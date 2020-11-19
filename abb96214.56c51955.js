(window.webpackJsonp=window.webpackJsonp||[]).push([[1136],{1199:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(1735),r=a(1736),c=(a(0),a(1737)),l={title:"Taro.getStorage(option)",sidebar_label:"getStorage"},o={unversionedId:"apis/storage/getStorage",id:"version-2.x/apis/storage/getStorage",isDocsHomePage:!1,title:"Taro.getStorage(option)",description:"\u4ece\u672c\u5730\u7f13\u5b58\u4e2d\u5f02\u6b65\u83b7\u53d6\u6307\u5b9a key \u7684\u5185\u5bb9",source:"@site/versioned_docs/version-2.x/apis/storage/getStorage.md",slug:"/apis/storage/getStorage",permalink:"/taro/docs/2.x/apis/storage/getStorage",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/storage/getStorage.md",version:"2.x",sidebar_label:"getStorage",sidebar:"version-2.x/API",previous:{title:"Taro.getStorageInfo(option)",permalink:"/taro/docs/2.x/apis/storage/getStorageInfo"},next:{title:"Taro.clearStorageSync()",permalink:"/taro/docs/2.x/apis/storage/clearStorageSync"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"\u4ece\u672c\u5730\u7f13\u5b58\u4e2d\u5f02\u6b65\u83b7\u53d6\u6307\u5b9a key \u7684\u5185\u5bb9"),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorage.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(c.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.a)("h3",{id:"option"},"Option"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"key"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.a)("td",null,"\u672c\u5730\u7f13\u5b58\u4e2d\u6307\u5b9a\u7684 key")),Object(c.a)("tr",null,Object(c.a)("td",null,"complete"),Object(c.a)("td",null,Object(c.a)("code",null,"(res: CallbackResult) => void")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.a)("tr",null,Object(c.a)("td",null,"fail"),Object(c.a)("td",null,Object(c.a)("code",null,"(res: CallbackResult) => void")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.a)("tr",null,Object(c.a)("td",null,"success"),Object(c.a)("td",null,Object(c.a)("code",null,"(result: SuccessCallbackResult) => void")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.a)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"data"),Object(c.a)("td",null,Object(c.a)("code",null,"any")),Object(c.a)("td",null,"key\u5bf9\u5e94\u7684\u5185\u5bb9")),Object(c.a)("tr",null,Object(c.a)("td",null,"errMsg"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(c.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.getStorage({\n  key: 'key',\n  success: function (res) {\n    console.log(res.data)\n  }\n})\n")),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"try {\n  var value = Taro.getStorageSync('key')\n  if (value) {\n    // Do something with return value\n  }\n} catch (e) {\n  // Do something when catch error\n}\n")),Object(c.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.getStorage"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}b.isMDXComponent=!0},1735:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},1736:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},1737:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),O=b(a),p=n,d=O["".concat(l,".").concat(p)]||O[p]||s[p]||c;return a?r.a.createElement(d,o(o({ref:t},u),{},{components:a})):r.a.createElement(d,o({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=O;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<c;u++)l[u]=a[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);