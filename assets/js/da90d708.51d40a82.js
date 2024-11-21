"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[550],{2426:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"Devlens in CI","title":"Devlens in CI","description":"One of the use of DEVLENS is to be a part of your project CI. DEVLENS can provide you quick checks really useful if you want","source":"@site/docs/9 - Devlens in CI.md","sourceDirName":".","slug":"/Devlens in CI","permalink":"/doc-devlens/Devlens in CI","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"How to replace","permalink":"/doc-devlens/How to replace"}}');var o=t(4848),r=t(8453);const l={},a="Devlens in CI",c={},u=[{value:"Example CI",id:"example-ci",level:2}];function i(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"devlens-in-ci",children:"Devlens in CI"})}),"\n",(0,o.jsxs)(n.p,{children:["One of the use of ",(0,o.jsx)(n.strong,{children:"DEVLENS"})," is to be a part of your project CI. ",(0,o.jsx)(n.strong,{children:"DEVLENS"})," can provide you quick checks really useful if you want\nto be sure your team is following code rules."]}),"\n",(0,o.jsxs)(n.p,{children:["Here is an example of how to use ",(0,o.jsx)(n.strong,{children:"DEVLENS"})," directly from our release. You can also download devlens and use it from your project root."]}),"\n",(0,o.jsx)(n.h2,{id:"example-ci",children:"Example CI"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'name: Use Devlens\n\non:\n  push:\n    branches:\n      - main\n  pull_request:\n    branches:\n      - main\n\njobs:\n  use_devlens:\n    runs-on: ubuntu-latest\n\n    steps:\n        - name: Checkout code\n        uses: actions/checkout@v4\n        # Make sure to specify the right version and dist of the release you want and also the right.\n        - name: Download Devlens release\n        run: |\n            version="0.3.0"\n            curl -s https://api.github.com/repos/soma-smart/devlens_cli/releases/latest \\\n            | jq -r \'.assets[] | select(.name | contains("ubuntu-latest-3.12.tar.gz")) | .browser_download_url\' \\\n            | xargs -n 1 curl -L -o devlens.tar.gz\n\n        - name: Extract Devlens\n        run: tar -xzvf devlens.tar.gz\n\n        - name: Make Devlens executable\n        run: chmod +x devlens\n\n        - name: Run Devlens\n        run: ./devlens check .\n        # This the query check if DEVLENS has annoted your project well.\n        - name: Query DB and check results\n        run: |\n            result_count=$(./devlens query "SELECT COUNT(*) FROM your_table WHERE your_conditions;" | tail -n 1)\n            if [ "$result_count" -eq 0 ]; then\n                echo "Problem detected: No results found."\n                exit 1\n            else\n                echo "No problems detected: $result_count results found."\n            fi\n        # This is the query you want to change to check you results.\n        - name: Set SQL query variables\n        run: |\n            export SQL_QUERY="SELECT COUNT(*) FROM another_table WHERE other_conditions;"\n\n        - name: Query DB and check results\n        run: |\n            result_count=$(./devlens query "$SQL_QUERY" | tail -n 1)\n            if [ "$result_count" -gt 0 ]; then\n                echo "Problem detected: $result_count results found."\n                exit 1\n            else\n                echo "No problems detected."\n            fi\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var s=t(6540);const o={},r=s.createContext(o);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);