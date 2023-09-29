"use strict";(self.webpackChunkdart_code_linter=self.webpackChunkdart_code_linter||[]).push([[8053],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4542:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Long Parameter List",l={unversionedId:"anti-patterns/long-parameter-list",id:"anti-patterns/long-parameter-list",title:"Long Parameter List",description:"Long parameter lists are difficult to understand and use. Wrapping them into an object allows grouping parameters and change transferred data only by the object modification. When you're working with objects, you should pass just enough so that the method can get the data it needs.",source:"@site/docs/anti-patterns/long-parameter-list.md",sourceDirName:"anti-patterns",slug:"/anti-patterns/long-parameter-list",permalink:"/docs/anti-patterns/long-parameter-list",draft:!1,editUrl:"https://github.com/bancolombia/dart-code-linter/tree/gh-pages-source/docs/anti-patterns/long-parameter-list.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Long Method",permalink:"/docs/anti-patterns/long-method"}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"long-parameter-list"},"Long Parameter List"),(0,a.kt)("p",null,"Long parameter lists are difficult to understand and use. Wrapping them into an object allows grouping parameters and change transferred data only by the object modification. When you're working with objects, you should pass just enough so that the method can get the data it needs."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use Replace Parameter with Method when you can obtain data by calling a method of an object."),(0,a.kt)("li",{parentName:"ul"},"Preserve Whole Object allows you to take a group of arguments and replace them with the object."),(0,a.kt)("li",{parentName:"ul"},"Use Introduce Parameter Object, if you have several arguments without logically grouping object.")),(0,a.kt)("p",null,"P.S. We use terminology from a book ",(0,a.kt)("strong",{parentName:"p"},"Refactoring Improving the Design of Existing Code")," by ",(0,a.kt)("em",{parentName:"p"},"Martin Fowler")))}d.isMDXComponent=!0}}]);