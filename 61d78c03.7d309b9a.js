(window.webpackJsonp=window.webpackJsonp||[]).push([[653],{1735:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},1736:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},1737:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=u(n),y=r,b=f["".concat(o,".").concat(y)]||f[y]||l[y]||c;return n?a.a.createElement(b,i(i({ref:t},s),{},{components:n})):a.a.createElement(b,i({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},717:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1735),a=n(1736),c=(n(0),n(1737)),o={title:"\u5f02\u6b65\u7f16\u7a0b"},i={unversionedId:"async-await",id:"async-await",isDocsHomePage:!1,title:"\u5f02\u6b65\u7f16\u7a0b",description:"Taro \u652f\u6301\u4f7f\u7528 async functions \u6765\u8ba9\u5f00\u53d1\u8005\u83b7\u5f97\u4e0d\u9519\u7684\u5f02\u6b65\u7f16\u7a0b\u4f53\u9a8c\uff0c\u5f00\u542f async functions \u652f\u6301\u9700\u8981\u5b89\u88c5\u5305 @tarojs/async-await",source:"@site/docs/async-await.md",slug:"/async-await",permalink:"/taro/docs/next/async-await",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/async-await.md",version:"current"},p=[],s={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Taro \u652f\u6301\u4f7f\u7528 ",Object(c.a)("inlineCode",{parentName:"p"},"async functions")," \u6765\u8ba9\u5f00\u53d1\u8005\u83b7\u5f97\u4e0d\u9519\u7684\u5f02\u6b65\u7f16\u7a0b\u4f53\u9a8c\uff0c\u5f00\u542f ",Object(c.a)("inlineCode",{parentName:"p"},"async functions")," \u652f\u6301\u9700\u8981\u5b89\u88c5\u5305 ",Object(c.a)("inlineCode",{parentName:"p"},"@tarojs/async-await")),Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ yarn add @tarojs/async-await\n# \u6216\u8005\u4f7f\u7528 npm\n$ npm install --save @tarojs/async-await\n")),Object(c.a)("p",null,"\u968f\u540e\u5728\u9879\u76ee\u5165\u53e3\u6587\u4ef6 ",Object(c.a)("inlineCode",{parentName:"p"},"app.js")," \u4e2d\u76f4\u63a5 ",Object(c.a)("inlineCode",{parentName:"p"},"import")," \uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u4f7f\u7528 ",Object(c.a)("inlineCode",{parentName:"p"},"async functions")," \u529f\u80fd\u4e86"),Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// src/app.js\nimport '@tarojs/async-await'\n")),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},"\u503c\u5f97\u6ce8\u610f\u7684\u4e8b\uff0c\u4f7f\u7528 ",Object(c.a)("inlineCode",{parentName:"p"},"@tarojs/async-await")," \u4e00\u5b9a\u8981\u8bb0\u5f97\u6309\u7167",Object(c.a)("a",Object(r.a)({parentName:"p"},{href:"/taro/docs/next/before-dev-remind"}),"\u5f00\u53d1\u524d\u6ce8\u610f"),"\u4e2d\u63d0\u793a\u7684\u5185\u5bb9\u8fdb\u884c\u64cd\u4f5c\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u62a5\u9519")))}u.isMDXComponent=!0}}]);