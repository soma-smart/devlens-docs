"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[949],{4955:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"How to replace","title":"How to replace","description":"The replace command in our tool allows you to perform replacements in your codebase based on specified patterns or logic. This command is flexible and supports both simple string replacements and more complex logic-based replacements using SQL.","source":"@site/docs/8 - How to replace.md","sourceDirName":".","slug":"/How to replace","permalink":"/doc-devlens/How to replace","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Kubernetes","permalink":"/doc-devlens/How to get projects variables/Kubernetes"},"next":{"title":"Devlens in CI","permalink":"/doc-devlens/Devlens in CI"}}');var i=t(4848),a=t(8453);const c={},r=void 0,o={},l=[{value:"Simple Replacement",id:"simple-replacement",level:2},{value:"Interactive Mode",id:"interactive-mode",level:3},{value:"Command Mode",id:"command-mode",level:3},{value:"Logic Replacement",id:"logic-replacement",level:2},{value:"Command Mode",id:"command-mode-1",level:3}];function d(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"replace"})," command in our tool allows you to perform replacements in your codebase based on specified patterns or logic. This command is flexible and supports both simple string replacements and more complex logic-based replacements using SQL."]}),"\n",(0,i.jsx)(n.h2,{id:"simple-replacement",children:"Simple Replacement"}),"\n",(0,i.jsx)(n.p,{children:"A simple replacement involves directly replacing a specified pattern with a new value. This is useful for straightforward text substitutions."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Before:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"insert into DEV\n(SELECT * FROM DEV)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"After:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"insert into PROD\n(SELECT * FROM PROD)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"interactive-mode",children:"Interactive Mode"}),"\n",(0,i.jsx)(n.p,{children:"In interactive mode, you can visually select the text you want to replace and specify the new value."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"simple-interactive-1",src:t(3658).A+"",title:"simple-interactive-1",width:"1136",height:"502"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"simple-interactive-2",src:t(4463).A+"",title:"simple-interactive-2",width:"1136",height:"433"})}),"\n",(0,i.jsx)(n.h3,{id:"command-mode",children:"Command Mode"}),"\n",(0,i.jsx)(n.p,{children:"In command mode, you can use the following command to perform the replacement:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'python main.py replace downloads/ \\\n --query "SELECT * FROM annotation WHERE name=\'table_env\'" \\\n --replace-type simple \\\n --replace-pattern "DEV" \\\n --replace-value "PROD"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"logic-replacement",children:"Logic Replacement"}),"\n",(0,i.jsx)(n.p,{children:"A logic-based replacement uses SQL logic to perform more complex substitutions. This is useful when the replacement depends on the content or structure of the text."}),"\n",(0,i.jsxs)(n.p,{children:["This is why ",(0,i.jsx)(n.strong,{children:"Devlens"})," provides a more precise way to change what you want in code."]}),"\n",(0,i.jsx)(n.p,{children:"The logic replacement takes three flags:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--query"})}),": The query to filter your result by annotation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--replace-type"})}),": Set with the value ",(0,i.jsx)(n.code,{children:"logic"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--replace-logic"})}),": Your custom SQL logic."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For example, a logic replacement to change every ",(0,i.jsx)(n.code,{children:"hdfs://HDFS_SERVER:3543"})," to ",(0,i.jsx)(n.code,{children:"s3a://"})," can be done as follows:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Before:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'expected_df = (\n    spark.read.parquet("hdfs://HDFS_SERVER:3543/finance/pib/expected/")\n    .withColumn("year", F.year("date"))\n    .withColumnRenamed("pib", "expected_pib")\n)\nactual_df = (\n    spark.read.csv("hdfs://HDFS_SERVER:3543/finance/pib/expected/")\n    .withColumn("year", F.year("date"))\n)\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"After:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'expected_df = (\n    spark.read.parquet("s3a://finance/pib/expected/")\n    .withColumn("year", F.year("date"))\n    .withColumnRenamed("pib", "expected_pib")\n)\nactual_df = (\n    spark.read.csv("s3a://finance/pib/expected/")\n    .withColumn("year", F.year("date"))\n)\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"annotation-db",src:t(5625).A+"",title:"annotation-db",width:"1579",height:"94"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["The annotation made on ",(0,i.jsx)(n.code,{children:"spark.read"})," expression holds the complete value of the parameter, so a simple replacement cannot work."]})}),"\n",(0,i.jsxs)(n.p,{children:["We need to provide ",(0,i.jsx)(n.strong,{children:"Devlens"})," with a SQL replacement logic."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"logic-interactive",src:t(4472).A+"",title:"logic-interactive",width:"1295",height:"787"})}),"\n",(0,i.jsxs)(n.p,{children:["By using the ",(0,i.jsx)(n.code,{children:"logic"})," way, we are able to modify code without replacing a whole value."]}),"\n",(0,i.jsx)(n.h3,{id:"command-mode-1",children:"Command Mode"}),"\n",(0,i.jsx)(n.p,{children:"If you want to use the command mode:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python main.py replace downloads/ \\\n--query \"SELECT * FROM annotation WHERE name='spark_read'\" \\\n--replace-type logic \\\n--replace-logic \"REPLACE(value, 'hdfs://HDFS_SERVER:3543/', 's3a://')\"\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5625:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/annotation-db-617ee8d2724d54644d049537f6b5afa4.png"},4472:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/logic-interactive-3762c85727ca9377e7d3e7ebbea5d0a5.png"},3658:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/simple-interactive-1-95f848a3a38e9db289edaee537e644fa.png"},4463:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/simple-interactive-2-c85189af4af8e986d06c1150a44bcc06.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(6540);const i={},a=s.createContext(i);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);