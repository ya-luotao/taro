(window.webpackJsonp=window.webpackJsonp||[]).push([[511],{1735:function(e,t,r){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return a}))},1736:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,"a",(function(){return a}))},1737:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),b=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(r),O=a,m=u["".concat(c,".").concat(O)]||u[O]||s[O]||o;return r?n.a.createElement(m,i(i({ref:t},p),{},{components:r})):n.a.createElement(m,i({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},575:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var a=r(1735),n=r(1736),o=(r(0),r(1737)),c={title:"Taro.removeStorageSync(KEY)",sidebar_label:"removeStorageSync"},i={unversionedId:"apis/storage/removeStorageSync",id:"version-1.x/apis/storage/removeStorageSync",isDocsHomePage:!1,title:"Taro.removeStorageSync(KEY)",description:"\u4ece\u672c\u5730\u7f13\u5b58\u4e2d\u540c\u6b65\u79fb\u9664\u6307\u5b9a key \u3002",source:"@site/versioned_docs/version-1.x/apis/storage/removeStorageSync.md",slug:"/apis/storage/removeStorageSync",permalink:"/taro/docs/1.x/apis/storage/removeStorageSync",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/storage/removeStorageSync.md",version:"1.x",sidebar_label:"removeStorageSync",sidebar:"version-1.x/API",previous:{title:"Taro.removeStorage(OBJECT)",permalink:"/taro/docs/1.x/apis/storage/removeStorage"},next:{title:"Taro.clearStorage()",permalink:"/taro/docs/1.x/apis/storage/clearStorage"}},l=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],p={rightToc:l};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"\u4ece\u672c\u5730\u7f13\u5b58\u4e2d\u540c\u6b65\u79fb\u9664\u6307\u5b9a key \u3002"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e\uff1a")),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5fc5\u586b"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"key"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"String"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u662f"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u672c\u5730\u7f13\u5b58\u4e2d\u7684\u6307\u5b9a\u7684 key")))),Object(o.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.removeStorageSync('key')\n")),Object(o.a)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.removeStorageSync"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}b.isMDXComponent=!0}}]);