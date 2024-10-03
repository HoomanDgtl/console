export class QueryKeys {
  static getFinancialDataKey = () => ["MARKET_DATA"];
  static getDashboardDataKey = () => ["DASHBOARD_DATA"];
  static getBlocksKey = (limit: number) => ["BLOCKS", limit];
  static getTransactionsKey = (limit: number) => ["TRANSACTIONS", limit];
  static getAddressTransactionsKey = (address: string, skip: number, limit: number) => ["ADDRESS_TRANSACTIONS", address, skip, limit];
  static getAddressDeploymentsKey = (address: string, skip: number, limit: number, reverseSorting: boolean, filters: { [key: string]: string }) => [
    "ADDRESS_DEPLOYMENTS",
    address,
    skip,
    limit,
    reverseSorting,
    JSON.stringify(filters)
  ];
  static getValidatorsKey = () => ["VALIDATORS"];
  static getProposalsKey = () => ["PROPOSALS"];
  static getTemplateKey = (id: string) => ["SDL_TEMPLATES", id];
  static getUserTemplatesKey = (username: string) => ["USER_TEMPLATES", username];
  static getUserFavoriteTemplatesKey = (userId: string) => ["USER_FAVORITES_TEMPLATES", userId];
  static getGranterGrants = (address: string) => ["GRANTER_GRANTS", address];
  static getGranteeGrants = (address: string) => ["GRANTEE_GRANTS", address];
  static getAllowancesIssued = (address: string) => ["ALLOWANCES_ISSUED", address];
  static getAllowancesGranted = (address: string) => ["ALLOWANCES_GRANTED", address];

  // Deploy
  static getDeploymentListKey = (address: string) => ["DEPLOYMENT_LIST", address];
  static getDeploymentDetailKey = (address: string, dseq: string) => ["DEPLOYMENT_DETAIL", address, dseq];
  static getAllLeasesKey = (address: string) => ["ALL_LEASES", address];
  static getLeasesKey = (address: string, dseq: string) => ["LEASE_LIST", address, dseq];
  static getLeaseStatusKey = (dseq: string, gseq: number, oseq: number) => ["LEASE_STATUS", dseq, gseq, oseq];
  static getBidListKey = (address: string, dseq: string) => ["BID_LIST", address, dseq];
  static getBidInfoKey = (address: string, dseq: string, gseq: number, oseq: number, provider: string) => ["BID_INFO", address, dseq, gseq, oseq, provider];
  static getProvidersKey = () => ["PROVIDERS"];
  static getProviderListKey = () => ["PROVIDER_LIST"];
  static getProviderRegionsKey = () => ["PROVIDER_REGIONS"];
  static getProviderDetailKey = (owner: string) => ["PROVIDERS", owner];
  static getDataNodeProvidersKey = () => ["DATA_NODE_PROVIDERS"];
  static getProviderStatusKey = (providerUri: string) => ["PROVIDER_STATUS", providerUri];
  static getNetworkCapacity = () => ["NETWORK_CAPACITY"];
  static getProviderActiveLeasesGraph = (providerAddress: string) => ["PROVIDER_ACTIVE_LEASES_GRAPH", providerAddress];
  static getAuditorsKey = () => ["AUDITORS"];
  static getBlockKey = (id: string) => ["BLOCK", id];
  static getBalancesKey = (address?: string) => (address ? ["BALANCES", address] : []);
  static getTemplatesKey = () => ["TEMPLATES"];
  static getProviderAttributesSchema = () => ["PROVIDER_ATTRIBUTES_SCHEMA"];
  static getDepositParamsKey = () => ["DEPOSIT_PARAMS"];
  static getGpuModelsKey = () => ["GPU_MODELS"];

  // Remote deploy
  static getProviderTokenKey = () => ["TOKEN"];
  static getUserProfileKey = (accessToken?: string | null) => ["USER_PROFILE", accessToken];
  static getCommitsKey = (repo?: string, accessToken?: string | null) => ["COMMITS", repo, accessToken];
  static getWorkspacesKey = (accessToken?: string | null) => ["WORKSPACES", accessToken];
  static getReposByWorkspaceKey = (workspace: string, accessToken: string | null) => ["REPOS", accessToken, workspace];
  static getBranchesKey = (repo?: string, accessToken?: string | null) => ["BRANCHES", repo, accessToken];
  static getPackageJsonKey = (repo?: string, branch?: string, subFolder?: string, accessToken?: string | null) => [
    "PACKAGE_JSON",
    repo,
    branch,
    subFolder,
    accessToken
  ];
  static getSrcFoldersKey = (repo?: string, branch?: string, accessToken?: string | null) => ["SRC_FOLDERS", repo, branch, accessToken];
}
