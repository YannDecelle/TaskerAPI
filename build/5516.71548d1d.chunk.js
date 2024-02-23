"use strict";(self.webpackChunktask_master=self.webpackChunktask_master||[]).push([[5516],{24452:(W,M,s)=>{s.d(M,{B:()=>K,D:()=>A,H:()=>y,R:()=>U});var t=s(19968),l=s(48936),d=s(63358),O=s(20596),P=s(48112),g=s(42816),m=s(28464),a=s(50648),e=s(14520),o=s(15396),E=s(14632),c=s(66942),C=s(1844),i=s(69372);const D=(0,i.cp)(l.C)`
  svg path {
    fill: ${({theme:r})=>r.colors.neutral600};
  }
`,B=({name:r})=>(0,t.jsxs)(l.C,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,a.W8)(300),children:[(0,t.jsx)(D,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,t.jsx)(e.c,{width:`${8/16}rem`})}),(0,t.jsx)(d.O,{fontWeight:"bold",children:r})]}),A=()=>(0,t.jsx)(c.P,{renderItem:r=>{if(r.type===C.D.STAGE)return(0,t.jsx)(B,{name:typeof r.item=="string"?r.item:null})}}),U=({children:r})=>(0,t.jsx)(O._,{children:(0,t.jsx)(P.G,{tabIndex:-1,children:(0,t.jsx)(g.S,{children:r})})}),K=({href:r})=>{const{formatMessage:T}=(0,E.c)();return(0,t.jsx)(a.cH,{startIcon:(0,t.jsx)(o.c,{}),to:r,children:T({id:"global.back",defaultMessage:"Back"})})},y=({title:r,subtitle:T,navigationAction:L,primaryAction:h})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.K8,{name:r}),(0,t.jsx)(m.a,{navigationAction:L,primaryAction:h,title:r,subtitle:T})]})},53136:(W,M,s)=>{s.d(M,{ProtectedReviewWorkflowsPage:()=>J});var t=s(19968),l=s(62552),d=s(48936),O=s(89296),P=s(42848),g=s(89616),m=s(20464),a=s(76512),e=s(9752),o=s(63358),E=s(35480),c=s(48744),C=s(23264),i=s(50648),D=s(48636),B=s(89940),A=s(71324),U=s(14632),K=s(49008),y=s(69372),r=s(66942),T=s(17944),L=s(24452),h=s(6484),G=s(1844),H=s(51728),ls=s(54320),Es=s(5240),ds=s(91892),Ds=s(36196),Ms=s(20880),Os=s(21424),Ps=s(70516),gs=s(31812),ms=s(18424),cs=s(52540),vs=s(21968),fs=s(12132),Cs=s(48632),Ts=s(85676),hs=s(35184),Ws=s(99568),Ls=s(96556),Is=s(13192),Rs=s(30840),Bs=s(77784),As=s(79371),Us=s(67888),Ks=s(52600),ys=s(95752),js=s(37388),xs=s(61840),us=s(49108),ps=s(44632),ws=s(50840),Ss=s(20252),$s=s(86432),Fs=s(22612),zs=s(24808),Ns=s(24024),ks=s(40960),Gs=s(33656),Hs=s(43280),Qs=s(79804),Ys=s(19632),Js=s(29576),Vs=s(61152),Zs=s(9589),Xs=s(45488),bs=s(75516),qs=s(68396);const Q=(0,y.cp)(i.cH)`
  align-items: center;
  height: ${(0,i.W8)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:n})=>`${n.spaces[2]}}`};
  width: ${(0,i.W8)(32)};

  svg {
    height: ${(0,i.W8)(12)};
    width: ${(0,i.W8)(12)};

    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.neutral800};
      }
    }
  }
`,Y=()=>{const{formatMessage:n}=(0,U.c)(),{push:I}=(0,K.Uz)(),{trackUsage:w}=(0,i.m4)(),[j,x]=l.useState(null),[V,R]=l.useState(!1),{collectionTypes:Z,singleTypes:X,isLoading:b}=(0,T.u)(),{meta:v,workflows:S,isLoading:u,deleteWorkflow:q}=(0,H.u)(),[ss,$]=l.useState(!1),{_unstableFormatAPIError:ts}=(0,i.An)(),p=(0,i.eo)(),{getFeature:os,isLoading:F}=(0,r.m)(),es=(0,r.j)(_=>_.admin_app.permissions.settings?.["review-workflows"]),{allowedActions:{canCreate:z,canDelete:ns}}=(0,i.aU)(es),f=os("review-workflows")?.[G.C],_s=_=>[...Z,...X].find(k=>k.uid===_)?.info.displayName,as=_=>{x(_)},is=()=>{x(null)},rs=async()=>{if(j)try{$(!0);const _=await q({id:j});if("error"in _){p({type:"warning",message:ts(_.error)});return}x(null),p({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}catch{p({type:"warning",message:{id:"notification.error.unexpected",defaultMessage:"An error occurred"}})}finally{$(!1)}};return l.useEffect(()=>{!u&&!F&&f&&v&&v?.workflowCount>parseInt(f,10)&&R(!0)},[F,u,v,v?.workflowCount,f]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(L.H,{primaryAction:z&&(0,t.jsx)(i.EZ,{startIcon:(0,t.jsx)(D.c,{}),size:"S",to:"/settings/review-workflows/create",onClick:_=>{f&&v&&v?.workflowCount>=parseInt(f,10)?(_.preventDefault(),R(!0)):w("willCreateWorkflow")},children:n({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),subtitle:n({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:n({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),(0,t.jsxs)(L.R,{children:[u||b?(0,t.jsx)(d.C,{justifyContent:"center",children:(0,t.jsx)(O.c,{children:n({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"})})}):(0,t.jsxs)(P.o,{colCount:3,footer:z&&(0,t.jsx)(g.U,{icon:(0,t.jsx)(D.c,{}),onClick:()=>{f&&v&&v?.workflowCount>=parseInt(f,10)?R(!0):(I("/settings/review-workflows/create"),w("willCreateWorkflow"))},children:n({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),rowCount:1,children:[(0,t.jsx)(m.o,{children:(0,t.jsxs)(a.Tr,{children:[(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.O,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.O,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.O,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(E.K,{children:n({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"})})})]})}),(0,t.jsx)(c.K,{children:S?.map(_=>(0,l.createElement)(a.Tr,{...(0,i.on)({fn(N){N.target.nodeName!=="BUTTON"&&I(`/settings/review-workflows/${_.id}`)}}),key:`workflow-${_.id}`},(0,t.jsx)(e.Td,{width:(0,i.W8)(250),children:(0,t.jsx)(o.O,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,t.jsx)(e.Td,{children:(0,t.jsx)(o.O,{textColor:"neutral800",children:_.stages.length})}),(0,t.jsx)(e.Td,{children:(0,t.jsx)(o.O,{textColor:"neutral800",children:(_?.contentTypes??[]).map(_s).join(", ")})}),(0,t.jsx)(e.Td,{children:(0,t.jsxs)(d.C,{alignItems:"center",justifyContent:"end",children:[(0,t.jsx)(Q,{to:`/settings/review-workflows/${_.id}`,"aria-label":n({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:_.name}),children:(0,t.jsx)(B.c,{})}),S.length>1&&ns&&(0,t.jsx)(C.w,{"aria-label":n({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:(0,t.jsx)(A.c,{}),noBorder:!0,onClick:()=>{as(String(_.id))}})]})})))})]}),(0,t.jsx)(i.cz,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:ss,isOpen:!!j,onToggleDialog:is,onConfirm:rs}),(0,t.jsxs)(h.L.Root,{isOpen:V,onClose:()=>R(!1),children:[(0,t.jsx)(h.L.Title,{children:n({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(h.L.Body,{children:n({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})},J=()=>{const n=(0,r.j)(I=>I.admin_app.permissions.settings?.["review-workflows"]?.main);return(0,t.jsx)(i.rF,{permissions:n,children:(0,t.jsx)(Y,{})})}},17944:(W,M,s)=>{s.d(M,{u:()=>m});var t=s(62552),l=s(50648),d=s(66942);const O=d.n.injectEndpoints({endpoints:a=>({getComponents:a.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:e=>e.data}),getContentTypes:a.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:e=>e.data})}),overrideExisting:!1}),{useGetComponentsQuery:P,useGetContentTypesQuery:g}=O;function m(){const{_unstableFormatAPIError:a}=(0,l.An)(),e=(0,l.eo)(),o=P(),E=g();t.useEffect(()=>{E.error&&e({type:"warning",message:a(E.error)})},[E.error,a,e]),t.useEffect(()=>{o.error&&e({type:"warning",message:a(o.error)})},[o.error,a,e]);const c=o.isLoading||E.isLoading,C=t.useMemo(()=>(E?.data??[]).filter(D=>D.kind==="collectionType"&&D.isDisplayed),[E?.data]),i=t.useMemo(()=>(E?.data??[]).filter(D=>D.kind!=="collectionType"&&D.isDisplayed),[E?.data]);return{isLoading:c,components:t.useMemo(()=>o?.data??[],[o?.data]),collectionTypes:C,singleTypes:i}}},51728:(W,M,s)=>{s.d(M,{u:()=>l});var t=s(68396);function l(d={}){const{id:O="",...P}=d,{data:g,isLoading:m}=(0,t.c)({id:O,populate:"stages",...P}),[a]=(0,t.d)(),[e]=(0,t.e)(),[o]=(0,t.f)(),{workflows:E,meta:c}=g??{};return{meta:c,workflows:E,isLoading:m,createWorkflow:a,updateWorkflow:e,deleteWorkflow:o}}},89616:(W,M,s)=>{s.d(M,{U:()=>e});var t=s(19968),l=s(69372),d=s(5e3),O=s(6912),P=s(48936),g=s(63358);const m=(0,l.cp)(d.k)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,a=(0,l.cp)(d.k)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,e=({children:o,icon:E,...c})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(O.c,{}),(0,t.jsx)(a,{as:"button",background:"primary100",padding:5,...c,children:(0,t.jsxs)(P.C,{children:[(0,t.jsx)(m,{"aria-hidden":!0,background:"primary200",children:E}),(0,t.jsx)(d.k,{paddingLeft:3,children:(0,t.jsx)(g.O,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
