(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{1735:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},1736:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},1737:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=r.a.createContext({}),p=function(e){var t=r.a.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,s=b["".concat(c,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(s,o(o({ref:t},f),{},{components:n})):r.a.createElement(s,o({ref:t},f))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var f=2;f<i;f++)c[f]=n[f];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},272:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1735),r=n(1736),i=(n(0),n(1737)),c={title:"Taro.offWifiConnected(callback)",sidebar_label:"offWifiConnected"},o={unversionedId:"apis/device/wifi/offWifiConnected",id:"apis/device/wifi/offWifiConnected",isDocsHomePage:!1,title:"Taro.offWifiConnected(callback)",description:"\u53d6\u6d88\u76d1\u542c\u8fde\u63a5\u4e0a Wi-Fi \u7684\u4e8b\u4ef6\u3002",source:"@site/docs/apis/device/wifi/offWifiConnected.md",slug:"/apis/device/wifi/offWifiConnected",permalink:"/taro/docs/next/apis/device/wifi/offWifiConnected",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/wifi/offWifiConnected.md",version:"current",sidebar_label:"offWifiConnected",sidebar:"API",previous:{title:"Taro.onGetWifiList(callback)",permalink:"/taro/docs/next/apis/device/wifi/onGetWifiList"},next:{title:"Taro.offGetWifiList(callback)",permalink:"/taro/docs/next/apis/device/wifi/offGetWifiList"}},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],f={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"\u53d6\u6d88\u76d1\u542c\u8fde\u63a5\u4e0a Wi-Fi \u7684\u4e8b\u4ef6\u3002"),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.offWifiConnected.html"}),"\u53c2\u8003\u6587\u6863"))),Object(i.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: (...args: any[]) => any) => void\n")),Object(i.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(i.a)("table",null,Object(i.a)("thead",null,Object(i.a)("tr",null,Object(i.a)("th",null,"\u53c2\u6570"),Object(i.a)("th",null,"\u7c7b\u578b"),Object(i.a)("th",null,"\u8bf4\u660e"))),Object(i.a)("tbody",null,Object(i.a)("tr",null,Object(i.a)("td",null,"callback"),Object(i.a)("td",null,Object(i.a)("code",null,"(...args: any[]) => any")),Object(i.a)("td",null,"\u8fde\u63a5\u4e0a Wi-Fi \u7684\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(i.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.offWifiConnected"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);