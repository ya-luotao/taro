(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{1735:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},1736:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))},1737:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,O=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return r?a.a.createElement(O,i(i({ref:t},p),{},{components:r})):a.a.createElement(O,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},426:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(1735),a=r(1736),o=(r(0),r(1737)),c={title:"Taro.stopGyroscope(option)",sidebar_label:"stopGyroscope"},i={unversionedId:"apis/device/gyroscope/stopGyroscope",id:"version-3.x/apis/device/gyroscope/stopGyroscope",isDocsHomePage:!1,title:"Taro.stopGyroscope(option)",description:"\u505c\u6b62\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u3002",source:"@site/versioned_docs/version-3.x/apis/device/gyroscope/stopGyroscope.md",slug:"/apis/device/gyroscope/stopGyroscope",permalink:"/taro/docs/apis/device/gyroscope/stopGyroscope",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/gyroscope/stopGyroscope.md",version:"3.x",sidebar_label:"stopGyroscope",sidebar:"version-3.x/API",previous:{title:"Taro.offDeviceMotionChange(callback)",permalink:"/taro/docs/apis/device/motion/offDeviceMotionChange"},next:{title:"Taro.startGyroscope(option)",permalink:"/taro/docs/apis/device/gyroscope/startGyroscope"}},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"\u505c\u6b62\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u3002"),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.stopGyroscope.html"}),"\u53c2\u8003\u6587\u6863"))),Object(o.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<CallbackResult>\n")),Object(o.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(o.a)("h3",{id:"option"},"Option"),Object(o.a)("table",null,Object(o.a)("thead",null,Object(o.a)("tr",null,Object(o.a)("th",null,"\u53c2\u6570"),Object(o.a)("th",null,"\u7c7b\u578b"),Object(o.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(o.a)("th",null,"\u8bf4\u660e"))),Object(o.a)("tbody",null,Object(o.a)("tr",null,Object(o.a)("td",null,"complete"),Object(o.a)("td",null,Object(o.a)("code",null,"(res: CallbackResult) => void")),Object(o.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(o.a)("tr",null,Object(o.a)("td",null,"fail"),Object(o.a)("td",null,Object(o.a)("code",null,"(res: CallbackResult) => void")),Object(o.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(o.a)("tr",null,Object(o.a)("td",null,"success"),Object(o.a)("td",null,Object(o.a)("code",null,"(res: CallbackResult) => void")),Object(o.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(o.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.stopGyroscope"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0}}]);