"use strict";(self.webpackChunknew_attributico_su=self.webpackChunknew_attributico_su||[]).push([[2034],{7355:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"opencart-integration/category-form","title":"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 \u0444\u043e\u0440\u043c\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438","description":"\u041d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f\u0448\u043d\u0438\u0439 \u0434\u0435\u043d\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0444\u043e\u0440\u043c\u044b \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438. \u0422\u0430\u043c \u0434\u043e\u043b\u0436\u043d\u0430 \u043f\u043e\u044f\u0432\u0438\u0442\u044c\u0441\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430 \u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044b.","source":"@site/i18n/ru/docusaurus-plugin-content-docs/version-3.2.8/opencart-integration/category-form.md","sourceDirName":"opencart-integration","slug":"/opencart-integration/category-form","permalink":"/attributico.doc/ru/docs/3.2.8/opencart-integration/category-form","draft":false,"unlisted":false,"tags":[],"version":"3.2.8","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044b \u0433\u0440\u0443\u043f\u043f\u044b","permalink":"/attributico.doc/ru/docs/3.2.8/opencart-integration/group-attributes"},"next":{"title":"Tools","permalink":"/attributico.doc/ru/docs/3.2.8/category/tools"}}');var r=e(4848),i=e(8453);const s={sidebar_position:8},a="\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 \u0444\u043e\u0440\u043c\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",c={},u=[];function d(t){const n={admonition:"admonition",h1:"h1",header:"header",p:"p",strong:"strong",...(0,i.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f-\u0441-\u0444\u043e\u0440\u043c\u043e\u0439-\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",children:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 \u0444\u043e\u0440\u043c\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"})}),"\n",(0,r.jsxs)(n.p,{children:["\u041d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f\u0448\u043d\u0438\u0439 \u0434\u0435\u043d\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0444\u043e\u0440\u043c\u044b \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438. \u0422\u0430\u043c \u0434\u043e\u043b\u0436\u043d\u0430 \u043f\u043e\u044f\u0432\u0438\u0442\u044c\u0441\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430 ",(0,r.jsx)(n.strong,{children:"\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044b"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441\u0434\u0435\u043b\u0430\u043d\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0446\u0435\u043b\u044f\u0445. \u041c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u043a \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b. \u0412\u0441\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430\u043c\u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439 \u0434\u0435\u043b\u0430\u044e\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u043c\u043e\u0434\u0443\u043b\u044c. \u042d\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0434\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u0441\u0430\u043c\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f \u0438 \u043c\u0438\u043d\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0434\u0432\u0438\u0436\u043a\u0430 OpenCart, \u0447\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0438 \u043e\u0448\u0438\u0431\u043e\u043a, \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u043e\u0432 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430\u043c\u0438."})})]})}function p(t={}){const{wrapper:n}={...(0,i.R)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},8453:(t,n,e)=>{e.d(n,{R:()=>s,x:()=>a});var o=e(6540);const r={},i=o.createContext(r);function s(t){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function a(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),o.createElement(i.Provider,{value:n},t.children)}}}]);