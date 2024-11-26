"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[836],{1730:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>i});const l=JSON.parse('{"id":"Usage command","title":"Usage Command","description":"Download DEVLENS","source":"@site/docs/2 - Usage command.md","sourceDirName":".","slug":"/Usage command","permalink":"/doc-devlens/Usage command","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Quick-Start","permalink":"/doc-devlens/"},"next":{"title":"Examples","permalink":"/doc-devlens/Examples"}}');var s=a(4848),c=a(8453);const o={},d="Usage Command",t={},i=[{value:"Download DEVLENS",id:"download-devlens",level:2},{value:"Interactive mode",id:"interactive-mode",level:2},{value:"Command mode",id:"command-mode",level:2},{value:"Local Check",id:"local-check",level:3},{value:"Local Check + Kubernetes secrets",id:"local-check--kubernetes-secrets",level:3},{value:"Dataiku Check",id:"dataiku-check",level:3},{value:"Dataiku download locally your project",id:"dataiku-download-locally-your-project",level:3},{value:"Query",id:"query",level:3},{value:"Replace",id:"replace",level:3},{value:"Make DEVLENS globally available",id:"make-devlens-globally-available",level:2}];function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"usage-command",children:"Usage Command"})}),"\n",(0,s.jsx)(n.h2,{id:"download-devlens",children:"Download DEVLENS"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DEVLENS"})," is available in the release section of the documentation repository:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/soma-smart/doc-devlens/releases",children:"https://github.com/soma-smart/doc-devlens/releases"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"When you extract DEVLENS, be sure to get the ANNOTATORS FOLDER unless you have your own."})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"download",src:a(6034).A+"",title:"download",width:"923",height:"548"})}),"\n",(0,s.jsx)(n.h2,{id:"interactive-mode",children:"Interactive mode"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DEVLENS"})," provides an easy and accessible Interactive mode that will give you a cool step-by-step UI in the terminal to do everything you need."]}),"\n",(0,s.jsxs)(n.p,{children:["To launch the interactive mode, use the ",(0,s.jsx)(n.code,{children:"--interactive"})," flag:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./devlens --interactive\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"interactive",src:a(9828).A+"",title:"interactive",width:"977",height:"308"})}),"\n",(0,s.jsx)(n.h2,{id:"command-mode",children:"Command mode"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DEVLENS"}),' also comes in "command" mode where you can use flags to launch various commands:']}),"\n",(0,s.jsx)(n.p,{children:"To see the command mode you can simply execute:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./devlens\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"basic",src:a(4150).A+"",title:"basic",width:"977",height:"308"})}),"\n",(0,s.jsx)(n.h3,{id:"local-check",children:"Local Check"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./devlens check yourfolder/\n"})}),"\n",(0,s.jsx)(n.h3,{id:"local-check--kubernetes-secrets",children:"Local Check + Kubernetes secrets"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./devlens check yourfolder/ \\\n--deployment-file yourdeploymentfilepath \\\n--kubeconfig yourkubeconfigpath\n"})}),"\n",(0,s.jsx)(n.h3,{id:"dataiku-check",children:"Dataiku Check"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./devlens --dataiku-instance yourdataikuinstancename \\\n--dataiku-project-key yourdataikuprojectkey\n"})}),"\n",(0,s.jsx)(n.h3,{id:"dataiku-download-locally-your-project",children:"Dataiku download locally your project"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./devlens --dataiku-instance yourdataikuinstancename \\\n--dataiku-project-key yourdataikuprojectkey \\\n--project-file-download\n"})}),"\n",(0,s.jsx)(n.h3,{id:"query",children:"Query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./devlens query "SELECT ...."\n'})}),"\n",(0,s.jsx)(n.h3,{id:"replace",children:"Replace"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python main.py replace downloads/ \\\n\"SELECT * FROM annotation WHERE name='Table_Env'\" \\\n--replace \"value || 'replacement' || logic\"\n"})}),"\n",(0,s.jsx)(n.h2,{id:"make-devlens-globally-available",children:"Make DEVLENS globally available"}),"\n",(0,s.jsx)(n.p,{children:"If you want to use devlens anywhere on your machine, you might want to make it available globally:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo mv ./devlens /usr/local/bin/\nsudo chmod +x /usr/local/bin/devlens\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},4150:(e,n,a)=>{a.d(n,{A:()=>l});const l=a.p+"assets/images/basic-c89b8f58d1f5240023d02c12f4455477.png"},6034:(e,n,a)=>{a.d(n,{A:()=>l});const l=a.p+"assets/images/download-05f525a52aef8e1a4c90a925f8294edb.png"},9828:(e,n,a)=>{a.d(n,{A:()=>l});const l=a.p+"assets/images/interactive-8bb3f246ce78ad45231f8baf267cbff1.png"},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>d});var l=a(6540);const s={},c=l.createContext(s);function o(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);