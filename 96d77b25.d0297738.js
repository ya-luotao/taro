(window.webpackJsonp=window.webpackJsonp||[]).push([[1005],{1069:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(1735),a=n(1736),o=(n(0),n(1737)),i={title:"\u73af\u5883\u5224\u65ad"},c={unversionedId:"apis/about/env",id:"version-1.x/apis/about/env",isDocsHomePage:!1,title:"\u73af\u5883\u5224\u65ad",description:"Taro.ENV_TYPE",source:"@site/versioned_docs/version-1.x/apis/about/env.md",slug:"/apis/about/env",permalink:"/taro/docs/1.x/apis/about/env",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/about/env.md",version:"1.x",sidebar:"version-1.x/API",previous:{title:"Taro.Component",permalink:"/taro/docs/1.x/apis/about/tarocomponent"},next:{title:"\u6d88\u606f\u673a\u5236",permalink:"/taro/docs/1.x/apis/about/events"}},p=[{value:"Taro.ENV_TYPE",id:"taroenv_type",children:[]},{value:"Taro.getEnv()",id:"tarogetenv",children:[]}],u={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h2",{id:"taroenv_type"},"Taro.ENV_TYPE"),Object(o.a)("p",null,Object(o.a)("inlineCode",{parentName:"p"},"ENV_TYPE.WEAPP")," \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u73af\u5883"),Object(o.a)("p",null,Object(o.a)("inlineCode",{parentName:"p"},"ENV_TYPE.SWAN")," \u767e\u5ea6\u5c0f\u7a0b\u5e8f\u73af\u5883"),Object(o.a)("p",null,Object(o.a)("inlineCode",{parentName:"p"},"ENV_TYPE.ALIPAY")," \u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u73af\u5883"),Object(o.a)("p",null,Object(o.a)("inlineCode",{parentName:"p"},"ENV_TYPE.TT")," \u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f\u73af\u5883"),Object(o.a)("p",null,Object(o.a)("inlineCode",{parentName:"p"},"ENV_TYPE.WEB")," WEB(H5)\u73af\u5883"),Object(o.a)("p",null,Object(o.a)("inlineCode",{parentName:"p"},"ENV_TYPE.RN")," ReactNative \u73af\u5883"),Object(o.a)("h2",{id:"tarogetenv"},"Taro.getEnv()"),Object(o.a)("p",null,"\u83b7\u53d6\u5f53\u524d\u73af\u5883\u503c\uff0c\u5177\u4f53\u503c\u5982\u4e0a ",Object(o.a)("inlineCode",{parentName:"p"},"Taro.ENV_TYPE")))}l.isMDXComponent=!0},1735:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},1736:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},1737:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(n),b=r,d=f["".concat(i,".").concat(b)]||f[b]||s[b]||o;return n?a.a.createElement(d,c(c({ref:t},u),{},{components:n})):a.a.createElement(d,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);