"use strict";(self.webpackChunkdart_code_linter=self.webpackChunkdart_code_linter||[]).push([[2883],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=l.createContext({}),s=function(e){var n=l.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return l.createElement(u.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},p=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),p=r,g=d["".concat(u,".").concat(p)]||d[p]||f[p]||i;return t?l.createElement(g,a(a({ref:n},c),{},{components:t})):l.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var s=2;s<i;s++)a[s]=t[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7720:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var l=t(7462),r=(t(7294),t(3905));const i={},a="Configuring Rules",o={unversionedId:"configuration/configuring-rules",id:"configuration/configuring-rules",title:"Configuring Rules",description:"Rules are one of the core building blocks of DCM. A rule validates if your code meets a certain expectation, and what to do if it does not meet that expectation.",source:"@site/docs/configuration/configuring-rules.md",sourceDirName:"configuration",slug:"/configuration/configuring-rules",permalink:"/docs/configuration/configuring-rules",draft:!1,editUrl:"https://github.com/bancolombia/dart-code-linter/tree/gh-pages-source/docs/configuration/configuring-rules.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuring Metrics",permalink:"/docs/configuration/configuring-metrics"},next:{title:"Excluding Code from Analysis",permalink:"/docs/configuration/excluding-code"}},u={},s=[{value:"Enabling a Rule",id:"enabling-a-rule",level:2},{value:"Rule Severities",id:"rule-severities",level:2},{value:"Excluding Files",id:"excluding-files",level:2},{value:"Excluding Files for All Rules",id:"excluding-files-for-all-rules",level:2},{value:"Including Files",id:"including-files",level:2},{value:"Disabling a Rule",id:"disabling-a-rule",level:2}],c={toc:s},d="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuring-rules"},"Configuring Rules"),(0,r.kt)("p",null,"Rules are one of the core building blocks of DCM. A rule validates if your code meets a certain expectation, and what to do if it does not meet that expectation."),(0,r.kt)("p",null,"All rules can be configured with severity, exclude and include options, but some rules also have additional configuration options specific to that rule and are marked with \u2699\ufe0f."),(0,r.kt)("h2",{id:"enabling-a-rule"},"Enabling a Rule"),(0,r.kt)("p",null,"To enable a rule add its id to the rules entry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-analysis_options.yaml"},"\ndart_code_linter:\n  rules:\n    - newline-before-return\n")),(0,r.kt)("h2",{id:"rule-severities"},"Rule Severities"),(0,r.kt)("p",null,"To change a rule's severity, configure the rule with one of these values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"none"),(0,r.kt)("li",{parentName:"ul"},"style"),(0,r.kt)("li",{parentName:"ul"},"performance"),(0,r.kt)("li",{parentName:"ul"},"warning"),(0,r.kt)("li",{parentName:"ul"},"error")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-analysis_options.yaml"},"\ndart_code_linter:\n  rules:\n    - newline-before-return:\n        severity: style\n")),(0,r.kt)("h2",{id:"excluding-files"},"Excluding Files"),(0,r.kt)("p",null,"To exclude specific files from rule's analysis, configure the rule exclude option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-analysis_options.yaml"},"\ndart_code_linter:\n  rules:\n    - newline-before-return:\n        exclude:\n          - test/**\n")),(0,r.kt)("h2",{id:"excluding-files-for-all-rules"},"Excluding Files for All Rules"),(0,r.kt)("p",null,"To exclude a file for all the rules, configure global rules-exclude option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-analysis_options.yaml"},"\ndart_code_linter:\n  rules-exclude:\n    - test/**\n    - lib/src/some_file.dart\n")),(0,r.kt)("h2",{id:"including-files"},"Including Files"),(0,r.kt)("p",null,"To include specific files to rule's analysis, configure the rule include option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-analysis_options.yaml"},"\n```dart_code_linter:\n  rules:\n    - newline-before-return:\n        include:\n          - test/**\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"All files are included by default.")),(0,r.kt)("h2",{id:"disabling-a-rule"},"Disabling a Rule"),(0,r.kt)("p",null,"If you include an analysis options file (which has DCM configuration) or use a preset, you might want to disable some of the included rules. Disabling individual rules is similar to enabling them, but the name of a rule should be followed by either : false or : true."),(0,r.kt)("p",null,"Here's an example of an analysis options file that has a disabled rule:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-analysis_options.yaml"},"\ninclude: package:my_lints/all.yaml\n\ndart_code_linter:\n  rules:\n    - newline-before-return: false\n    ```\n")))}f.isMDXComponent=!0}}]);