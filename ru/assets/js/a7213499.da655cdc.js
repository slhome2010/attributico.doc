"use strict";(self.webpackChunknew_attributico_su=self.webpackChunknew_attributico_su||[]).push([[9555],{2233:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"technical-specifications/database","title":"\u0411\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445","description":"\u0412 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043c\u043e\u0434\u0443\u043b\u044f  \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043a \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445.","source":"@site/i18n/ru/docusaurus-plugin-content-docs/version-3.2.8/technical-specifications/database.md","sourceDirName":"technical-specifications","slug":"/technical-specifications/database","permalink":"/attributico.doc/ru/docs/3.2.8/technical-specifications/database","draft":false,"unlisted":false,"tags":[],"version":"3.2.8","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"\u0421\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c","permalink":"/attributico.doc/ru/docs/3.2.8/technical-specifications/compatibility"},"next":{"title":"License","permalink":"/attributico.doc/ru/docs/3.2.8/category/license"}}');var c=i(4848),r=i(8453);const s={sidebar_position:4},a="\u0411\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445",o={},d=[];function u(e){const t={a:"a",code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.header,{children:(0,c.jsx)(t.h1,{id:"\u0431\u0430\u0437\u0430-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u0411\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"})}),"\n",(0,c.jsx)(t.p,{children:"\u0412 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043c\u043e\u0434\u0443\u043b\u044f  \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043a \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-SQL",children:"CREATE TABLE IF NOT EXISTS oc_category_attribute (\r\n  category_id INT(11) NOT NULL,\r\n  attribute_id INT(11) NOT NULL,\r\n  PRIMARY KEY (category_id, attribute_id)\r\n)\n"})}),"\n",(0,c.jsx)(t.p,{children:"\u0438"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-SQL",children:"ALTER TABLE oc_attribute_description ADD COLUMN `duty` TEXT NOT NULL\n"})}),"\n",(0,c.jsxs)(t.p,{children:["\u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u043d\u043e\u0432\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,c.jsx)(t.strong,{children:"category_attribute"})," \u0441 \u043f\u043e\u043b\u044f\u043c\u0438 ",(0,c.jsx)(t.code,{children:"`category_id`"})," \u0438 ",(0,c.jsx)(t.code,{children:"`attribute_id`"}),"."]}),"\n",(0,c.jsxs)(t.p,{children:["\u0410 \u0432 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 OpenCart ",(0,c.jsx)(t.strong,{children:"attribute_description"})," \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u0441\u044f \u043f\u043e\u043b\u0435 ",(0,c.jsx)(t.code,{children:"`duty`"})," \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f ",(0,c.jsx)(t.a,{href:"/attributico.doc/ru/docs/3.2.8/general-info/duty",children:"\u0414\u0435\u0436\u0443\u0440\u043d\u044b\u0445 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"}),"."]}),"\n",(0,c.jsx)(t.p,{children:"\u041e\u0431\u0449\u0430\u044f \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430 \u0442\u0430\u0431\u043b\u0438\u0446 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u044e\u0449\u0438\u0445 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430\u043c\u0438 \u0438 \u0441\u0432\u044f\u0437\u0435\u0439 \u043c\u0435\u0436\u0434\u0443 \u043d\u0438\u043c\u0438 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0430 \u043d\u0430 \u0440\u0438\u0441\u0443\u043d\u043a\u0435 \u043d\u0438\u0436\u0435."}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{alt:"Database diagram",src:i(6249).A+"",width:"932",height:"549"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},6249:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/attributico_db_diagram-e05f90fdd6f6cca0e3ceefe6456fa820.png"},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(6540);const c={},r=n.createContext(c);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);