"use strict";(self.webpackChunk_leap_cosmos_extension=self.webpackChunk_leap_cosmos_extension||[]).push([[4394],{654394:(Q,S,a)=>{a.r(S),a.d(S,{default:()=>V});var u=a(339279),P=a(492303),C=a(553476);const F=(0,C.cn)({key:"delete-chain",default:null});var B=a(240483),e=a(202784),p=a(795421);const O=t=>e.createElement(p.Z5,{onDragEnd:t.onDragEnd},e.createElement(p.bK,{droppableId:"droppable"},s=>e.createElement("div",{...s.droppableProps,ref:s.innerRef},t.children,s.placeholder)));var D=a(94608),I=a(571659),N=a(634680),b=a(372149),M=a(378268),j=a(861111),x=a(712878);const G=({chain:t})=>{const s=(0,C.Zl)(F),c=(0,b.p)()[t.chainName]?.chainSymbolImageUrl;return e.createElement(e.Fragment,null,e.createElement("div",{className:"flex justify-between items-center px-4 bg-white-100 dark:bg-gray-900 cursor-pointer w-[344px] h-[76px] rounded-[16px]"},e.createElement("div",{className:"flex items-center flex-grow"},e.createElement("img",{src:c??M.GenericLight,alt:"custom icon",width:"28",height:"28",className:"h-7 w-7 mr-3",onError:(0,j._)(M.GenericLight)}),e.createElement("div",{className:"flex flex-col justify-center items-start"},e.createElement("div",{className:"text-base font-bold text-black-100 dark:text-white-100 text-left max-w-[160px] text-ellipsis overflow-hidden text-xl"},t.chainName),e.createElement("div",{className:"text-xs font-medium text-gray-400"},(0,x.kC)(t.denom))),e.createElement("div",{className:"flex flex-grow"}),e.createElement("div",{className:"flex flex-col justify-center items-end"},e.createElement("button",{className:"text-sm font-bold text-red-300 py-1 px-3 rounded-[14px]",style:{backgroundColor:"rgba(255, 112, 126, 0.1)"},onClick:()=>s(t)},"Remove")))))},z=({chains:t,searchQuery:s,updateChainFunction:d})=>{const[c,i]=(0,e.useState)(!1),o=(0,N.a7)(),g=(0,b.p)(),m=(0,e.useMemo)(()=>new I.default(t,{threshold:.3,keys:["chainName"]}),[t]),f=(0,e.useMemo)(()=>{const r=s.trim();return s?m.search(r).map(n=>n.item):t},[s,t,m]);return e.createElement("div",{className:"rounded-2xl dark:bg-gray-900 bg-white-100"},t?f.map((r,n)=>{const l=n===0,h=n===t.length-1,v=g[r.chainName].chainSymbolImageUrl;return e.createElement(p._l,{key:r.id??n,draggableId:r?.id?.toString()??n.toString(),index:n},E=>e.createElement("div",{ref:E.innerRef,...E.draggableProps,...E.dragHandleProps},e.createElement(u.ToggleCard,{imgSrc:v,isRounded:h||l,size:"lg",subtitle:c&&o===r.chainName?e.createElement("span",{style:{color:"#FF707E"}},"Cannot disable a chain in use"):(0,x.kC)(r.denom),title:(0,x.kC)(r.chainName),onClick:()=>{o===r.chainName?i(!0):(i(!1),d(r.chainName))},isEnabled:r.active}),h?null:e.createElement(u.CardDivider,null)))}):null)},R=({chains:t,searchQuery:s,updateChainFunction:d,title:c})=>{const[i,o]=(0,e.useState)(!1),g=(0,N.a7)(),m=(0,b.p)(),f=(0,e.useMemo)(()=>new I.default(t,{threshold:.3,keys:["chainName"]}),[t]),r=(0,e.useMemo)(()=>{const n=s.trim();return s?f.search(n).map(l=>l.item):t},[s,t,f]);return e.createElement("div",{className:"rounded-2xl dark:bg-gray-900 bg-white-100"},c&&e.createElement(D.Z,{size:"xs",className:"pt-[20px] px-4 text"},c),t?r.map((n,l)=>{if(n.beta)return e.createElement(G,{chain:n});const h=m[n.chainName].chainSymbolImageUrl,v=l===0,E=l===r.length-1;return e.createElement(u.ToggleCard,{key:l,imgSrc:h,isRounded:E||v,size:"lg",subtitle:i&&g===n.chainName?e.createElement("span",{style:{color:"#FF707E"}},"Cannot disable a chain in use"):(0,x.kC)(n.denom),title:(0,x.kC)(n.chainName),onClick:()=>{g===n.chainName?o(!0):(o(!1),d(n.chainName))},isEnabled:n.active})}):null)};var K=a(892742),T=a(30447),k=a(164012),A=a(625890),w=a(926205),Z=a(508181),H=a(410289),y=a(610675),U=a(472565),L=a.n(U);const W=(t,s,d)=>{const c=Array.from(t),[i]=c.splice(s,1);return c.splice(d,0,i),c},J=({defaultChain:t})=>{const s=(0,N.N8)(),d=(0,C.Zl)(P.G),{activeWallet:c,setActiveWallet:i}=(0,A.ZP)(),[o,g]=(0,C.FV)(F),m=(0,A.Af)(),f=async()=>{await L().storage.local.get([k.Pw]).then(async r=>{const n=JSON.parse(r["beta-chains"]);delete n[o?.chainName],await L().storage.local.set({[k.Pw]:JSON.stringify(n)}),d(h=>{const v={...h};return delete v[o?.chainName],v});const l=await m(c,o?.chainName,"DELETE");await i(l[c?.id]),s(t),g(null)})};return e.createElement(B.Z,{isOpen:!!o,onClose:()=>g(null),title:"Remove Chain?"},e.createElement("div",{className:"flex flex-col gap-y-1"},e.createElement("div",{className:"text-center px-5"},e.createElement("div",{className:"rounded-2xl bg-white-100 dark:bg-gray-800 p-[12px] w-[48px] h-[48px] text-red-300 material-icons-round mb-4"},"remove_circle"),e.createElement(D.Z,{size:"md",color:"text-gray-800 dark:text-gray-200 font-medium"},"Are you sure you want to remove ",o?.chainName,"?")),e.createElement("div",{className:"flex flex-col justify-between w-full mt-7"},e.createElement(u.Buttons.Generic,{style:{height:"48px",background:y.w.gray900,color:y.w.white100},className:"w-full",onClick:f},"Remove"),e.createElement(u.Buttons.Generic,{style:{height:"48px",background:y.w.cosmosPrimary,color:y.w.white100},className:"mt-3 bg-gray-800 w-full",onClick:()=>g(null)},"Don\u2019t Remove"))))};function V(){const[t,s]=e.useState(""),d=(0,H.s0)(),c=(0,N.a7)(),[i]=(0,w.A4)(),[o]=(0,w.kO)(),[g]=(0,w.Z4)(),m=i.filter(l=>!l.beta),r=i.filter(l=>l.beta).filter(l=>l.chainName.toLowerCase().includes(t.toLowerCase())),n=async l=>{if(!l.destination)return;const h=W(m,l.source.index,l.destination.index);g(h)};return e.createElement("div",{className:"relative"},e.createElement(K.Z,{header:e.createElement(u.Header,{title:"Manage chains",action:{onClick:()=>{d(-1)},type:u.HeaderActionType.BACK}})},e.createElement("div",{className:"pt-[28px]"},e.createElement("div",{className:"mx-auto w-[344px] flex h-10 bg-white-100 dark:bg-gray-900 rounded-[30px] py-2 pl-5 pr-[10px]"},e.createElement("input",{placeholder:"search chains...",className:"flex flex-grow text-base text-gray-400 outline-none bg-white-0",value:t,onChange:l=>s(l.target.value)}),t.length===0?e.createElement("img",{src:Z.r.Misc.Search}):e.createElement("img",{className:"cursor-pointer",src:Z.r.Misc.CrossFilled,onClick:()=>s("")})),e.createElement("div",{className:"align-middle flex flex-col items-center justify-center mt-[20px] mb-10"},e.createElement(O,{onDragEnd:n},m.filter(l=>l.chainName.toLowerCase().includes(t.toLowerCase())).length===0&&e.createElement(T.Z,{searchQuery:t}),t.length===0?e.createElement(z,{chains:m,searchQuery:t,updateChainFunction:o}):e.createElement(R,{chains:m,searchQuery:t,updateChainFunction:o})),r.length>0?e.createElement("div",{className:"mt-[16px]"},e.createElement(R,{chains:r,searchQuery:t,updateChainFunction:o,title:"Recently added (Beta)"})):null))),e.createElement(J,{defaultChain:i[0].chainName}))}}}]);
