"use strict";(self.webpackChunknew_attributico_su=self.webpackChunknew_attributico_su||[]).push([[594],{6381:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"technical-specifications/database","title":"Database","description":"During the module installation, database queries will be executed.","source":"@site/versioned_docs/version-3.2.8/technical-specifications/database.md","sourceDirName":"technical-specifications","slug":"/technical-specifications/database","permalink":"/attributico.doc/docs/3.2.8/technical-specifications/database","draft":false,"unlisted":false,"tags":[],"version":"3.2.8","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Compatibility","permalink":"/attributico.doc/docs/3.2.8/technical-specifications/compatibility"},"next":{"title":"License","permalink":"/attributico.doc/docs/3.2.8/category/license"}}');var n=i(4848),s=i(8453);const r={sidebar_position:4},c="Database",o={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"database",children:"Database"})}),"\n",(0,n.jsx)(t.p,{children:"During the module installation, database queries will be executed."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"CREATE TABLE IF NOT EXISTS oc_category_attribute (\r\n  category_id INT(11) NOT NULL,\r\n  attribute_id INT(11) NOT NULL,\r\n  PRIMARY KEY (category_id, attribute_id)\r\n)\n"})}),"\n",(0,n.jsx)(t.p,{children:"and"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"ALTER TABLE oc_attribute_description ADD COLUMN `duty` TEXT NOT NULL\n"})}),"\n",(0,n.jsxs)(t.p,{children:["As a result, a new table ",(0,n.jsx)(t.strong,{children:"category_attribute"})," will be created with fields ",(0,n.jsx)(t.code,{children:"`category_id`"})," and ",(0,n.jsx)(t.code,{children:"`attribute_id`"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["And in the standard OpenCart table ",(0,n.jsx)(t.strong,{children:"attribute_description"}),", a field ",(0,n.jsx)(t.code,{children:"`duty`"})," will be added to store ",(0,n.jsx)(t.a,{href:"/attributico.doc/docs/3.2.8/general-info/duty",children:"Duty Templates"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The general diagram of tables serving attribute management and relationships between them is shown in the figure below."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Database diagram",src:i(6249).A+"",width:"932",height:"549"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},6249:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/attributico_db_diagram-e05f90fdd6f6cca0e3ceefe6456fa820.png"},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>c});var a=i(6540);const n={},s=a.createContext(n);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);