(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{1735:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},1736:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}a.d(t,"a",(function(){return n}))},1737:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var u=c.a.createContext({}),i=function(e){var t=c.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),O=i(a),d=n,p=O["".concat(l,".").concat(d)]||O[d]||s[d]||r;return a?c.a.createElement(p,o(o({ref:t},u),{},{components:a})):c.a.createElement(p,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=O;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},210:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return i}));var n=a(1735),c=a(1736),r=(a(0),a(1737)),l={title:"Taro.onHCEMessage(callback)",sidebar_label:"onHCEMessage"},o={unversionedId:"apis/device/nfc/onHCEMessage",id:"apis/device/nfc/onHCEMessage",isDocsHomePage:!1,title:"Taro.onHCEMessage(callback)",description:"\u76d1\u542c\u63a5\u6536 NFC \u8bbe\u5907\u6d88\u606f\u4e8b\u4ef6\uff0c\u4ec5\u80fd\u6ce8\u518c\u4e00\u4e2a\u76d1\u542c",source:"@site/docs/apis/device/nfc/onHCEMessage.md",slug:"/apis/device/nfc/onHCEMessage",permalink:"/taro/docs/next/apis/device/nfc/onHCEMessage",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/nfc/onHCEMessage.md",version:"current",sidebar_label:"onHCEMessage",sidebar:"API",previous:{title:"Taro.sendHCEMessage(option)",permalink:"/taro/docs/next/apis/device/nfc/sendHCEMessage"},next:{title:"Taro.offHCEMessage(callback)",permalink:"/taro/docs/next/apis/device/nfc/offHCEMessage"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]},{value:"messageType",id:"messagetype",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:b};function i(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"\u76d1\u542c\u63a5\u6536 NFC \u8bbe\u5907\u6d88\u606f\u4e8b\u4ef6\uff0c\u4ec5\u80fd\u6ce8\u518c\u4e00\u4e2a\u76d1\u542c"),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"},Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.onHCEMessage.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),Object(r.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(r.a)("h3",{id:"callback"},"Callback"),Object(r.a)("p",null,"\u63a5\u6536 NFC \u8bbe\u5907\u6d88\u606f\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(result: CallbackResult) => void\n")),Object(r.a)("table",null,Object(r.a)("thead",null,Object(r.a)("tr",null,Object(r.a)("th",null,"\u53c2\u6570"),Object(r.a)("th",null,"\u7c7b\u578b"))),Object(r.a)("tbody",null,Object(r.a)("tr",null,Object(r.a)("td",null,"result"),Object(r.a)("td",null,Object(r.a)("code",null,"CallbackResult"))))),Object(r.a)("h3",{id:"callbackresult"},"CallbackResult"),Object(r.a)("table",null,Object(r.a)("thead",null,Object(r.a)("tr",null,Object(r.a)("th",null,"\u53c2\u6570"),Object(r.a)("th",null,"\u7c7b\u578b"),Object(r.a)("th",null,"\u8bf4\u660e"))),Object(r.a)("tbody",null,Object(r.a)("tr",null,Object(r.a)("td",null,"data"),Object(r.a)("td",null,Object(r.a)("code",null,"ArrayBuffer")),Object(r.a)("td",null,Object(r.a)("code",null,"messageType=1")," \u65f6 ,\u5ba2\u6237\u7aef\u63a5\u6536\u5230 NFC \u8bbe\u5907\u7684\u6307\u4ee4")),Object(r.a)("tr",null,Object(r.a)("td",null,"messageType"),Object(r.a)("td",null,Object(r.a)("code",null,"1 | 2")),Object(r.a)("td",null,"\u6d88\u606f\u7c7b\u578b")),Object(r.a)("tr",null,Object(r.a)("td",null,"reason"),Object(r.a)("td",null,Object(r.a)("code",null,"number")),Object(r.a)("td",null,Object(r.a)("code",null,"messageType=2")," \u65f6\uff0c\u539f\u56e0")))),Object(r.a)("h3",{id:"messagetype"},"messageType"),Object(r.a)("p",null,"\u6d88\u606f\u7c7b\u578b"),Object(r.a)("table",null,Object(r.a)("thead",null,Object(r.a)("tr",null,Object(r.a)("th",null,"\u53c2\u6570"),Object(r.a)("th",null,"\u8bf4\u660e"))),Object(r.a)("tbody",null,Object(r.a)("tr",null,Object(r.a)("td",null,"1"),Object(r.a)("td",null,"HCE APDU Command\u7c7b\u578b\uff0c\u5c0f\u7a0b\u5e8f\u9700\u5bf9\u6b64\u6307\u4ee4\u8fdb\u884c\u5904\u7406\uff0c\u5e76\u8c03\u7528 sendHCEMessage \u63a5\u53e3\u8fd4\u56de\u5904\u7406\u6307\u4ee4")),Object(r.a)("tr",null,Object(r.a)("td",null,"2"),Object(r.a)("td",null,"\u8bbe\u5907\u79bb\u573a\u4e8b\u4ef6\u7c7b\u578b")))),Object(r.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.onHCEMessage"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}i.isMDXComponent=!0}}]);