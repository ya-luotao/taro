(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1735:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},1736:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},1737:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),O=b(a),p=n,d=O["".concat(c,".").concat(p)]||O[p]||s[p]||l;return a?r.a.createElement(d,o(o({ref:t},u),{},{components:a})):r.a.createElement(d,o({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=O;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<l;u++)c[u]=a[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},209:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(1735),r=a(1736),l=(a(0),a(1737)),c={title:"Taro.getShareInfo(option)",sidebar_label:"getShareInfo"},o={unversionedId:"apis/share/getShareInfo",id:"apis/share/getShareInfo",isDocsHomePage:!1,title:"Taro.getShareInfo(option)",description:"\u83b7\u53d6\u8f6c\u53d1\u8be6\u7ec6\u4fe1\u606f",source:"@site/docs/apis/share/getShareInfo.md",slug:"/apis/share/getShareInfo",permalink:"/taro/docs/next/apis/share/getShareInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/share/getShareInfo.md",version:"current",sidebar_label:"getShareInfo",sidebar:"API",previous:{title:"Taro.hideShareMenu(option)",permalink:"/taro/docs/next/apis/share/hideShareMenu"},next:{title:"Taro.createOffscreenCanvas()",permalink:"/taro/docs/next/apis/canvas/createOffscreenCanvas"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("p",null,"\u83b7\u53d6\u8f6c\u53d1\u8be6\u7ec6\u4fe1\u606f"),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"Tips")),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"\u5982\u9700\u8981\u5c55\u793a\u7fa4\u540d\u79f0\uff0c\u53ef\u4ee5\u4f7f\u7528",Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/open-ability/open-data.html"}),"\u5f00\u653e\u6570\u636e\u7ec4\u4ef6"))),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.getShareInfo.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(l.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.a)("h3",{id:"option"},"Option"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"shareTicket"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.a)("td",null,"shareTicket")),Object(l.a)("tr",null,Object(l.a)("td",null,"complete"),Object(l.a)("td",null,Object(l.a)("code",null,"(res: CallbackResult) => void")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.a)("tr",null,Object(l.a)("td",null,"fail"),Object(l.a)("td",null,Object(l.a)("code",null,"(res: CallbackResult) => void")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.a)("tr",null,Object(l.a)("td",null,"success"),Object(l.a)("td",null,Object(l.a)("code",null,"(result: SuccessCallbackResult) => void")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(l.a)("tr",null,Object(l.a)("td",null,"timeout"),Object(l.a)("td",null,Object(l.a)("code",null,"number")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d ms")))),Object(l.a)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"cloudID"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",null,"\u654f\u611f\u6570\u636e\u5bf9\u5e94\u7684\u4e91 ID\uff0c\u5f00\u901a",Object(l.a)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html"},"\u4e91\u5f00\u53d1"),"\u7684\u5c0f\u7a0b\u5e8f\u624d\u4f1a\u8fd4\u56de\uff0c\u53ef\u901a\u8fc7\u4e91\u8c03\u7528\u76f4\u63a5\u83b7\u53d6\u5f00\u653e\u6570\u636e\uff0c\u8be6\u7ec6\u89c1",Object(l.a)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud"},"\u4e91\u8c03\u7528\u76f4\u63a5\u83b7\u53d6\u5f00\u653e\u6570\u636e"))),Object(l.a)("tr",null,Object(l.a)("td",null,"encryptedData"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",null,"\u5305\u62ec\u654f\u611f\u6570\u636e\u5728\u5185\u7684\u5b8c\u6574\u8f6c\u53d1\u4fe1\u606f\u7684\u52a0\u5bc6\u6570\u636e\uff0c\u8be6\u7ec6\u89c1",Object(l.a)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html"},"\u52a0\u5bc6\u6570\u636e\u89e3\u5bc6\u7b97\u6cd5"))),Object(l.a)("tr",null,Object(l.a)("td",null,"errMsg"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",null,"\u9519\u8bef\u4fe1\u606f")),Object(l.a)("tr",null,Object(l.a)("td",null,"iv"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",null,"\u52a0\u5bc6\u7b97\u6cd5\u7684\u521d\u59cb\u5411\u91cf\uff0c\u8be6\u7ec6\u89c1",Object(l.a)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html"},"\u52a0\u5bc6\u6570\u636e\u89e3\u5bc6\u7b97\u6cd5"))))),Object(l.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.a)("p",null,"\u654f\u611f\u6570\u636e\u6709\u4e24\u79cd\u83b7\u53d6\u65b9\u5f0f\uff0c\u4e00\u662f\u4f7f\u7528 ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95"}),"\u52a0\u5bc6\u6570\u636e\u89e3\u5bc6\u7b97\u6cd5")," \u3002\n\u83b7\u53d6\u5f97\u5230\u7684\u5f00\u653e\u6570\u636e\u4e3a\u4ee5\u4e0b json \u7ed3\u6784\uff08\u5176\u4e2d openGId \u4e3a\u5f53\u524d\u7fa4\u7684\u552f\u4e00\u6807\u8bc6\uff09\uff1a"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n "openGId": "OPENGID"\n}\n')),Object(l.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.getShareInfo"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}b.isMDXComponent=!0}}]);