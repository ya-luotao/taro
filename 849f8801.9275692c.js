(window.webpackJsonp=window.webpackJsonp||[]).push([[884],{1735:function(e,t,r){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return a}))},1736:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,"a",(function(){return a}))},1737:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),j=p(r),d=a,u=j["".concat(i,".").concat(d)]||j[d]||O[d]||c;return r?n.a.createElement(u,o(o({ref:t},b),{},{components:r})):n.a.createElement(u,o({ref:t},b))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=j;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<c;b++)i[b]=r[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}j.displayName="MDXCreateElement"},948:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(1735),n=r(1736),c=(r(0),r(1737)),i={title:"Taro.createSelectorQuery()",sidebar_label:"createSelectorQuery"},o={unversionedId:"apis/interface/wxml/createSelectorQuery",id:"version-1.x/apis/interface/wxml/createSelectorQuery",isDocsHomePage:!1,title:"Taro.createSelectorQuery()",description:"\u8fd4\u56de\u4e00\u4e2a SelectorQuery \u5bf9\u8c61\u5b9e\u4f8b\u3002\u53ef\u4ee5\u5728\u8fd9\u4e2a\u5b9e\u4f8b\u4e0a\u4f7f\u7528 select \u7b49\u65b9\u6cd5\u9009\u62e9\u8282\u70b9\uff0c\u5e76\u4f7f\u7528 boundingClientRect \u7b49\u65b9\u6cd5\u9009\u62e9\u9700\u8981\u67e5\u8be2\u7684\u4fe1\u606f\u3002",source:"@site/versioned_docs/version-1.x/apis/interface/wxml/createSelectorQuery.md",slug:"/apis/interface/wxml/createSelectorQuery",permalink:"/taro/docs/1.x/apis/interface/wxml/createSelectorQuery",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/interface/wxml/createSelectorQuery.md",version:"1.x",sidebar_label:"createSelectorQuery",sidebar:"version-1.x/API",previous:{title:"Taro.offWindowResize(callback)",permalink:"/taro/docs/1.x/apis/interface/window/offWindowResize"},next:{title:"selectorQuery.in(component)",permalink:"/taro/docs/1.x/apis/interface/wxml/selectorQuery_in"}},l=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],b={rightToc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"\u8fd4\u56de\u4e00\u4e2a SelectorQuery \u5bf9\u8c61\u5b9e\u4f8b\u3002\u53ef\u4ee5\u5728\u8fd9\u4e2a\u5b9e\u4f8b\u4e0a\u4f7f\u7528 select \u7b49\u65b9\u6cd5\u9009\u62e9\u8282\u70b9\uff0c\u5e76\u4f7f\u7528 boundingClientRect \u7b49\u65b9\u6cd5\u9009\u62e9\u9700\u8981\u67e5\u8be2\u7684\u4fe1\u606f\u3002"),Object(c.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.a)("pre",null,Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nconst query = Taro.createSelectorQuery()\n")),Object(c.a)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.createSelectorQuery"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"selectorQuery.in"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"selectorQuery.select"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"selectorQuery.selectAll"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"selectorQuery.selectViewport"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"nodesRef.boundingClientRect"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"nodesRef.scrollOffset"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"nodesRef.fields"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"selectorQuery.exec"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);