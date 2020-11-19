(window.webpackJsonp=window.webpackJsonp||[]).push([[1080],{1144:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(1735),n=r(1736),o=(r(0),r(1737)),i={title:"Taro.getRealtimeLogManager()",sidebar_label:"getRealtimeLogManager"},c={unversionedId:"apis/base/debug/getRealtimeLogManager",id:"version-2.x/apis/base/debug/getRealtimeLogManager",isDocsHomePage:!1,title:"Taro.getRealtimeLogManager()",description:"\u83b7\u53d6\u5b9e\u65f6\u65e5\u5fd7\u7ba1\u7406\u5668\u5bf9\u8c61\u3002",source:"@site/versioned_docs/version-2.x/apis/base/debug/getRealtimeLogManager.md",slug:"/apis/base/debug/getRealtimeLogManager",permalink:"/taro/docs/2.x/apis/base/debug/getRealtimeLogManager",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/base/debug/getRealtimeLogManager.md",version:"2.x",sidebar_label:"getRealtimeLogManager",sidebar:"version-2.x/API",previous:{title:"Taro.setEnableDebug(res)",permalink:"/taro/docs/2.x/apis/base/debug/setEnableDebug"},next:{title:"Taro.getLogManager(res)",permalink:"/taro/docs/2.x/apis/base/debug/getLogManager"}},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],g={rightToc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},g,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"\u83b7\u53d6\u5b9e\u65f6\u65e5\u5fd7\u7ba1\u7406\u5668\u5bf9\u8c61\u3002"),Object(o.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"() => RealtimeLogManager\n")),Object(o.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(o.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const logger = Taro.getRealtimeLogManager()\nlogger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])\nlogger.error({str: 'hello world'}, 'error log', 100, [1, 2, 3])\nlogger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])\n")),Object(o.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.getRealtimeLogManager"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0},1735:function(e,t,r){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return a}))},1736:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,"a",(function(){return a}))},1737:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=n.a.createContext({}),s=function(e){var t=n.a.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=s(r),b=a,d=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return r?n.a.createElement(d,c(c({ref:t},g),{},{components:r})):n.a.createElement(d,c({ref:t},g))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var g=2;g<o;g++)i[g]=r[g];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);