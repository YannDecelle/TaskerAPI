"use strict";(self.webpackChunktask_master=self.webpackChunktask_master||[]).push([[8740],{132:(U,D,_)=>{_.d(D,{S:()=>A});var s=_(19968),M=_(28724),a=_(70996),n=_(70544),d=_(48936),h=_(63358),C=_(14632),v=_(39380),P=_(69372);const A=({providers:E,displayAllProviders:r})=>{const{formatMessage:B}=(0,C.c)();return r?(0,s.jsx)(M.y,{gap:4,children:E.map(t=>(0,s.jsx)(a.C,{col:4,children:(0,s.jsx)(o,{provider:t})},t.uid))}):E.length>2&&!r?(0,s.jsxs)(M.y,{gap:4,children:[E.slice(0,2).map(t=>(0,s.jsx)(a.C,{col:4,children:(0,s.jsx)(o,{provider:t})},t.uid)),(0,s.jsx)(a.C,{col:4,children:(0,s.jsx)(n.o,{label:B({id:"global.see-more"}),children:(0,s.jsx)(i,{as:v.cH,to:"/auth/providers",children:(0,s.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,s.jsx)(l,{justifyContent:"center",children:E.map(t=>(0,s.jsx)(o,{provider:t},t.uid))})},l=(0,P.cp)(d.C)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:E})=>E.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:E})=>E.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:E})=>E.spaces[2]};
  }
`,o=({provider:E})=>(0,s.jsx)(n.o,{label:E.displayName,children:(0,s.jsx)(i,{href:`${window.strapi.backendURL}/admin/connect/${E.uid}`,children:E.icon?(0,s.jsx)("img",{src:E.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,s.jsx)(h.O,{children:E.displayName})})}),i=P.cp.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:E})=>E.colors.neutral150};
  border-radius: ${({theme:E})=>E.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:E})=>E.colors.neutral600};
`},98740:(U,D,_)=>{_.r(D),_.d(D,{FORMS:()=>W});var s=_(19968),M=_(48112),a=_(5e3),n=_(63358),d=_(48936),h=_(89296),C=_(35676),v=_(6912),P=_(5540),A=_(14632),l=_(49008),o=_(39380),i=_(69372),E=_(66942),r=_(132),B=_(50648),t=_(54320),g=_(5240),x=_(91892),j=_(36196),c=_(20880),f=_(21424),y=_(62552),S=_(70516),$=_(31812),F=_(18424),N=_(52540),e=_(21968),u=_(12132),z=_(48632),G=_(85676),Z=_(35184),H=_(99568),J=_(96556),Y=_(13192),Q=_(30840),V=_(77784),X=_(79371),p=_(67888),k=_(52600),w=_(95752),b=_(37388),q=_(61840),__=_(49108),s_=_(44632),E_=_(50840),t_=_(20252),a_=_(86432),n_=_(22612),d_=_(24808),O_=_(24024),o_=_(40960),D_=_(33656),M_=_(43280),P_=_(79804),l_=_(19632),i_=_(29576),r_=_(61152),h_=_(9589),C_=_(45488),v_=_(75516);const T=()=>{const{push:I}=(0,l.Uz)(),{formatMessage:O}=(0,A.c)(),{isLoading:L,data:m=[]}=(0,E.g)(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)}),K=()=>{I("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!L&&m.length===0?(0,s.jsx)(l.YJ,{to:"/auth/login"}):(0,s.jsx)(E.U,{children:(0,s.jsxs)(M.G,{children:[(0,s.jsxs)(E.h,{children:[(0,s.jsxs)(E.C,{children:[(0,s.jsx)(E.i,{}),(0,s.jsx)(a.k,{paddingTop:6,paddingBottom:1,children:(0,s.jsx)(n.O,{as:"h1",variant:"alpha",children:O({id:"Auth.form.welcome.title"})})}),(0,s.jsx)(a.k,{paddingBottom:7,children:(0,s.jsx)(n.O,{variant:"epsilon",textColor:"neutral600",children:O({id:"Auth.login.sso.subtitle"})})})]}),(0,s.jsxs)(d.C,{direction:"column",alignItems:"stretch",gap:7,children:[L?(0,s.jsx)(d.C,{justifyContent:"center",children:(0,s.jsx)(h.c,{children:O({id:"Auth.login.sso.loading"})})}):(0,s.jsx)(r.S,{providers:m}),(0,s.jsxs)(d.C,{children:[(0,s.jsx)(R,{}),(0,s.jsx)(a.k,{paddingLeft:3,paddingRight:3,children:(0,s.jsx)(n.O,{variant:"sigma",textColor:"neutral600",children:O({id:"or"})})}),(0,s.jsx)(R,{})]}),(0,s.jsx)(C.Z,{fullWidth:!0,size:"L",onClick:K,children:O({id:"Auth.form.button.login.strapi"})})]})]}),(0,s.jsx)(d.C,{justifyContent:"center",children:(0,s.jsx)(a.k,{paddingTop:4,children:(0,s.jsx)(P.c,{as:o.Af,to:"/auth/forgot-password",children:(0,s.jsx)(n.O,{variant:"pi",children:O({id:"Auth.link.forgot-password"})})})})})]})})},R=(0,i.cp)(v.c)`
  flex: 1;
`,W={providers:T}}}]);
