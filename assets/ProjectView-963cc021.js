import{C as d}from"./ContainerBaseComponent-9545ba10.js";import{d as n,r as f,g as m,o as a,c as u,b as h,w as v,a as t,t as x,_ as C,h as j}from"./index-5f166855.js";import"./CardComponent-f184a5d9.js";const g={class:"root"},k={class:"content"},w=["src"],B={class:"info"},y=["href"],P=n({__name:"ProjectComponent",setup(r){const o=f([]),e=m();async function _(){const s=await fetch("doc/projects.json");if(!s.ok)throw"request projectInfo error";const c=await s.text();e==null||e.done(),o.value=JSON.parse(c)}return _().catch(console.error),(s,c)=>(a(),u("div",g,[h(d,{class:"list",data:o.value},{default:v(({name:i,link:p,img:l})=>[t("div",k,[t("img",{class:"screenshot",src:`/img/${l}`},null,8,w),t("div",B,[t("a",{class:"link",href:p,target:"_blank"},x(i),9,y)])])]),_:1},8,["data"])]))}});const I=C(P,[["__scopeId","data-v-5378c194"]]),q=n({__name:"ProjectView",setup(r){return(o,e)=>(a(),j(I))}});export{q as default};