"use strict";(self.webpackChunknew_attributico_su=self.webpackChunknew_attributico_su||[]).push([[910],{800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"opencart-integration/value-filter","title":"Value Filter","description":"In stores with a large number of products, Attributes, and their Values, the list linked to the selection field can become very long. This can cause inconvenience when filling out the table. The filter allows you to limit the list.","source":"@site/docs/opencart-integration/value-filter.md","sourceDirName":"opencart-integration","slug":"/opencart-integration/value-filter","permalink":"/attributico.doc/docs/next/opencart-integration/value-filter","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Managing List View","permalink":"/attributico.doc/docs/next/opencart-integration/list-view"},"next":{"title":"Overriding the Value Insertion Method","permalink":"/attributico.doc/docs/next/opencart-integration/method-inserting"}}');var s=n(4848),r=n(8453);const l={sidebar_position:3},o="Value Filter",a={},c=[];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"value-filter",children:"Value Filter"})}),"\n",(0,s.jsxs)(t.p,{children:["In stores with a large number of products, ",(0,s.jsx)(t.strong,{children:"Attributes"}),", and their ",(0,s.jsx)(t.strong,{children:"Values"}),", the list linked to the selection field can become very long. This can cause inconvenience when filling out the table. The filter allows you to limit the list."]}),"\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.img,{alt:"attribute",src:n(964).A+"",width:"375",height:"34"})})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.em,{children:"List Filter"})})})})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Switch"})}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"List"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"All"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Displays all ",(0,s.jsx)(t.strong,{children:"Values"})," of the given ",(0,s.jsx)(t.strong,{children:"Attribute"})," from all products, plus the ",(0,s.jsx)(t.strong,{children:"Default Template"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"Categories"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Displays ",(0,s.jsx)(t.strong,{children:"Values"})," only for categories selected on the ",(0,s.jsx)(t.strong,{children:"Links"})," tab (not to be confused with ",(0,s.jsx)(t.strong,{children:"Category Attribute Values"}),")"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"Default"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Displays ",(0,s.jsx)(t.strong,{children:"Values"})," from the ",(0,s.jsx)(t.a,{href:"/attributico.doc/docs/next/general-info/duty",children:"Default Template"})]})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["The filter operates in real-time, and the ",(0,s.jsx)(t.strong,{children:"Values"})," list is reloaded immediately after switching modes. In large stores, delays may sometimes be noticeable, so after switching, it may be necessary to wait briefly."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},964:(e,t,n)=>{n.d(t,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXcAAAAiCAYAAACk9JkOAAAAAXNSR0IArs4c6QAAB75JREFUeF7tnMFqGzkcxr9SlgYKORR6KLGDoe/QNuDc+gQlIc6hl730mGSb3nuPu6mPPfeQlIY8wNJbAmn6AnsKmDghLFl66FJoD90skkYaSSPbGs80Hnu/gYJjy5q/ftJ8+uuT6htXV1dX4EUCJEACJDBVBG5Q3KeqP9kYEiABEpAEKO4cCCRAAiQwhQQo7lPYqWwSCZAACVDcOQZIgARIYAoJUNynsFPZJBIgARKguHMMkAAJkMAUEqC4T2GnskkkQAIkkFvcv3z5gq9fv+L79+/48eMHbt68iVu3buH27duYnZ2tJNFJjLmSIANBke2k9BTj/L8RiBZ3IeaXl5dSzIWIz8zMyNdC4L99+wbxkIvXd+/elWJfhWsSY64Ct5gYyDaGEsuQwPgIRIm7eJAvLi5w586dgdm5EPjPnz/j3r17Yxf4SYx5fMMg353JNh8vliaBcRCIEvezszMp6jG2ixB48a9Wq42jPeaekxjzWIHluDnZ5oDFoiQwJgJDxV17qiIb19fh4SE+fPggs3nx/uPHj9FsNs3n4v1xevChmIfxHXfMw+KryudkW5WeYBwkMJjAUHEXoicydiHW4hLC/vbt20ytT58+NQIvNlyFCNgTwnV2hB9zzL3HHXNMjFUoQ7ZV6AXGQALDCQwV9263i3q9LjdPxfXy5UuZsfuXEHLxmbjExmqv10Oj8Rc6y20cWoWbL95j7cHwwIqU8GOOqSuN+RfsP28Dv23jyZz65vneBtbfAauv0/di6pzGMsXYNhSSTx0sb1mjYn4Vr189QYJ7GrGxTSRw7QSGivvJyQnu379vAnv27FnfIN+8eWM+U9/7G53lj3j0fg0PpUruY2O9h5b++yc114859jbqezOuuEshAjZ/csyxMY67XDG2ahyJybKNTWwvzakx8TuwSXEfd9fy/lNGYKi4F8/cLXHHMTrLu6hbGbDKis8UViuDO+4so50kd7WV10oIIq9i2aWVuSM0GYk2pKsRFRuw/3wdO6d2gDWT6TttbG7i/Zqc6mC3EWiaCaTf+2ZyfAG0deZr1eeIpsmQ9cQk4rb74lzGfLBwnWxV5i7a93EhWcEFxD3ISyYGO4AeC16iIJmdruLX+R38MWe3KR1zD482sH7ewibaZmylK8nw2NSTkIzpvGX6zvS0mPyPHqXvJ3GqEZ32aeTQZTESKI3AUHEv5rmfuoLiPQjygTlaNEvy47191JaeAM6DpESotxJv5xTzhf9VmfvKIg62DrDoWzGfOuhgTVlL8kG2y4hYXUtHWhDv6mkbO8vYTcRHCJJ+rXvUZ+J8XwuHEXRXoF1xP0bn+S66p41kpeSKuyx7BGAhyaAjh1QxtmJT3hNRX9wH8AKs9i4cm1UghLAjmTS970t+ifjqScMIutN/ZYi7V4cfSyRjFiOBMggMFfdip2X+9Dz3NJtVD6onhCqvC2b3Zhkf0epiJzr+MVn48BWD34bQ397EZIlNVtyzbXc4hVYSloCISVFzUtnxJrCls3VL3BNBbS0cYFfbIxFcRZFibGezNowj7oGJ3M+M5fgQk+8quu96WFzpYsdKENT4SVco9iohlH2nfXA2cNzFZO7ZMv5qKRIyi5FACQSGiru4x+jnmsNWgMrC+w181/YwbbTsh5h2jx6zFugWeuttILMBrAQotWAGTVh+2STyxH46y2TuYSZGoOYCNpEljkbcRVa7N4ftNVhCl9aNzgbOl7YhbIo8k6bmPjpbz28XFQbE3bW3XLtOxuBsyNr8VYSpoGdXK761kq52hLi7m/+iLj3BO1aRvEtiuQRWBu74zMYXM35ZhgSKEogS99H/R2JWrNyHyfXfk0fT84ZHa+LoMVvZt8yUd9AwAu9nljGZe2h1koqQa8uMmLlbtkMbLSwe7SanfWz+yWvh1zvl89kyIvLR2QbalxH3/rwkNW2lvBC2WQ8tuf/gbXiLMmJyW/jo+OH9Mnfl/+ezZUzGP7/n2D6jTJajjXB+iwQGE4gSd/1A5/9tmUGZe7KheJoeg9Oeu8hojYdaoAdH+/0TT7AH+bIRnnvGQ7faE/Lc9cagORpo+7b+pqK2KJLJJ+uj++K+i+58A61X6vRSZgM2B+uR2GYsFj9zT46dOjaLFVTSfjnZWquYmrd3o6ysPfTmu6gvDTjS6pyEKi7u2T2YHEBZlARKJhAt7vq++X4FMGux+D62czLE2ygMWx/5CeSLuc+m6NYh5EYcrDPa80000UXdnIkP7yO4p1+g6nmgJjd/Q1XbCvqkkH2CSJ+WkT5zcsLI5qmsg4Z1bNMX9za61smjIuKeezz4Z9sz3djvtFDCK+Huboamx2oV47SO0KSqMvdFrJ7uJLaabZlEiLs+1SVi1ye7/AnLb2dOOzH/6OY3SCBMILe4E+QYCVzT/xP4KS0MZe3mRirTnktWFGXcPzRx9d0ULeOGrIMEKkaA4l6xDhkYDsU9srfCG9MU90h8LDYVBCjuk9SNkyzu18RZW2Chn7mguF9TJ/A2lSBAca9ENzAIEiABEiiXAMW9XJ6sjQRIgAQqQYDiXoluYBAkQAIkUC4Binu5PFkbCZAACVSCAMW9Et3AIEiABEigXAIU93J5sjYSIAESqAQBinsluoFBkAAJkEC5BCju5fJkbSRAAiRQCQL/AYh0BARx4bJLAAAAAElFTkSuQmCC"},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(6540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);