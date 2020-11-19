(window.webpackJsonp=window.webpackJsonp||[]).push([[725],{1735:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},1736:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},1737:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(n),b=a,f=m["".concat(o,".").concat(b)]||m[b]||u[b]||i;return n?r.a.createElement(f,c(c({ref:t},l),{},{components:n})):r.a.createElement(f,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},789:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(1735),r=n(1736),i=(n(0),n(1737)),o={title:"Taro.createAnimation(OBJECT)",sidebar_label:"createAnimation"},c={unversionedId:"apis/interface/animation/createAnimation",id:"version-1.x/apis/interface/animation/createAnimation",isDocsHomePage:!1,title:"Taro.createAnimation(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.createAnimation\u3002",source:"@site/versioned_docs/version-1.x/apis/interface/animation/createAnimation.md",slug:"/apis/interface/animation/createAnimation",permalink:"/taro/docs/1.x/apis/interface/animation/createAnimation",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/interface/animation/createAnimation.md",version:"1.x",sidebar_label:"createAnimation",sidebar:"version-1.x/API",previous:{title:"Taro.saveFile(OBJECT)",permalink:"/taro/docs/1.x/apis/files/saveFile"},next:{title:"Taro.createCanvasContext(canvasId, componentInstance)",permalink:"/taro/docs/1.x/apis/interface/canvas/createCanvasContext"}},p=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.createAnimation.html"}),Object(i.a)("inlineCode",{parentName:"a"},"wx.createAnimation")),"\u3002"),Object(i.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import Taro from \'@tarojs/taro\'\n\nconst animation = Taro.createAnimation({\n  transformOrigin: "50% 50%",\n  duration: 1000,\n  timingFunction: "ease",\n  delay: 0\n})\n')),Object(i.a)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.createAnimation"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0}}]);