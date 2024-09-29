"use client";
import { FC, useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { useRouter, useSearchParams } from "next/navigation";

import { useLocalNotes } from "@src/context/LocalNoteProvider";
import { useSdlBuilder } from "@src/context/SdlBuilderProvider";
import { useTemplates } from "@src/context/TemplatesProvider";
import sdlStore from "@src/store/sdlStore";
import { TemplateCreation } from "@src/types";
import { RouteStep } from "@src/types/route-steps.type";
import { hardcodedTemplates } from "@src/utils/templates";
import { UrlService } from "@src/utils/urlUtils";
import Layout from "../layout/Layout";
import { ciCdTemplateId, isRedeployImage } from "../remote-deploy/helper-functions";
import { CreateLease } from "./CreateLease";
import { ManifestEdit } from "./ManifestEdit";
import { CustomizedSteppers } from "./Stepper";
import { TemplateList } from "./TemplateList";

export const NewDeploymentContainer: FC = () => {
  const [github, setGithub] = useState<boolean>(false);
  const { isLoading: isLoadingTemplates, templates } = useTemplates();
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateCreation | null>(null);
  const [editedManifest, setEditedManifest] = useState<string | null>(null);
  const deploySdl = useAtomValue(sdlStore.deploySdl);
  const { getDeploymentData } = useLocalNotes();
  const { getTemplateById } = useTemplates();
  const router = useRouter();
  const searchParams = useSearchParams();
  const dseq = searchParams?.get("dseq");
  const { toggleCmp, hasComponent } = useSdlBuilder();

  useEffect(() => {
    const queryStep = searchParams?.get("step");
    const _activeStep = getStepIndexByParam(queryStep);
    setActiveStep(_activeStep);
    const state = searchParams?.get("state");
    const redeploy = searchParams?.get("redeploy");
    const code = searchParams?.get("code");

    if (!redeploy && state === "gitlab" && code) {
      router.replace(
        UrlService.newDeployment({
          step: RouteStep.editDeployment,
          gitProvider: "gitlab",
          gitProviderCode: code,
          templateId: ciCdTemplateId
        })
      );
    }
  }, [searchParams]);

  useEffect(() => {
    if (!templates || editedManifest) return;

    const template = getRedeployTemplate() || getGalleryTemplate();

    if (template) {
      setSelectedTemplate(template as TemplateCreation);
      setEditedManifest(template.content as string);

      if ("config" in template && (template.config?.ssh || (!template.config?.ssh && hasComponent("ssh")))) {
        toggleCmp("ssh");
      }

      const code = searchParams?.get("code");
      const gitProvider = searchParams?.get("gitProvider");
      const state = searchParams?.get("state");

      const templateId = searchParams?.get("templateId");

      if (gitProvider === "github" || code || state === "gitlab" || (templateId && templateId === ciCdTemplateId)) {
        setGithub(true);
      } else {
        setGithub(false);
      }

      const queryStep = searchParams?.get("step");
      if (queryStep !== RouteStep.editDeployment) {
        if (isRedeployImage(template?.content as string, getTemplateById(ciCdTemplateId)?.deploy)) {
          router.replace(
            UrlService.newDeployment({
              ...searchParams,
              step: RouteStep.editDeployment,
              gitProvider: "github"
            })
          );
          setGithub(true);
        } else {
          router.replace(UrlService.newDeployment({ ...searchParams, step: RouteStep.editDeployment }));
        }
      }
    }
  }, [templates, editedManifest, searchParams, router, toggleCmp, hasComponent]);

  const getRedeployTemplate = () => {
    let template: Partial<TemplateCreation> | null = null;
    const queryRedeploy = searchParams?.get("redeploy");
    if (queryRedeploy) {
      const deploymentData = getDeploymentData(queryRedeploy as string);

      if (deploymentData && deploymentData.manifest) {
        template = {
          name: deploymentData.name,
          code: "empty",
          content: deploymentData.manifest
        };
      }
    }

    return template;
  };

  const getGalleryTemplate = (): Partial<{
    code: string;
    name: string;
    content: string;
    valuesToChange: any[];
    config: { ssh?: boolean };
  }> | null => {
    const queryTemplateId = searchParams?.get("templateId");
    if (queryTemplateId) {
      const templateById = getTemplateById(queryTemplateId as string);
      if (templateById) {
        return {
          code: "empty",
          name: templateById.name,
          content: templateById.deploy,
          valuesToChange: templateById.valuesToChange || [],
          config: templateById.config
        };
      }

      const hardCodedTemplate = hardcodedTemplates.find(t => t.code === queryTemplateId);
      if (hardCodedTemplate) {
        return hardCodedTemplate;
      }
    }

    // Jotai state template
    if (deploySdl) {
      return deploySdl;
    }

    return null;
  };

  function getStepIndexByParam(step) {
    switch (step) {
      case RouteStep.editDeployment:
        return 1;
      case RouteStep.createLeases:
        return 2;
      case RouteStep.chooseTemplate:
      default:
        return 0;
    }
  }

  return (
    <Layout isLoading={isLoadingTemplates} isUsingSettings isUsingWallet containerClassName="pb-0">
      <div className="flex w-full items-center">{activeStep !== null && <CustomizedSteppers activeStep={activeStep} />}</div>

      {activeStep === 0 && <TemplateList setGithub={setGithub} />}
      {activeStep === 1 && (
        <ManifestEdit
          selectedTemplate={selectedTemplate}
          onTemplateSelected={setSelectedTemplate}
          editedManifest={editedManifest}
          setEditedManifest={setEditedManifest}
          setGithub={setGithub}
          github={github}
        />
      )}
      {activeStep === 2 && <CreateLease dseq={dseq as string} />}
    </Layout>
  );
};
