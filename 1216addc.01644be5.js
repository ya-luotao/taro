(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1735:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},1736:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},1737:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(a),O=n,d=s["".concat(o,".").concat(O)]||s[O]||b[O]||c;return a?r.a.createElement(d,i(i({ref:t},p),{},{components:a})):r.a.createElement(d,i({ref:t},p))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},183:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(1735),r=a(1736),c=(a(0),a(1737)),o={title:"Taro.authorize(option)",sidebar_label:"authorize"},i={unversionedId:"apis/open-api/authorize/authorize",id:"version-3.x/apis/open-api/authorize/authorize",isDocsHomePage:!1,title:"Taro.authorize(option)",description:"\u63d0\u524d\u5411\u7528\u6237\u53d1\u8d77\u6388\u6743\u8bf7\u6c42\u3002\u8c03\u7528\u540e\u4f1a\u7acb\u523b\u5f39\u7a97\u8be2\u95ee\u7528\u6237\u662f\u5426\u540c\u610f\u6388\u6743\u5c0f\u7a0b\u5e8f\u4f7f\u7528\u67d0\u9879\u529f\u80fd\u6216\u83b7\u53d6\u7528\u6237\u7684\u67d0\u4e9b\u6570\u636e\uff0c\u4f46\u4e0d\u4f1a\u5b9e\u9645\u8c03\u7528\u5bf9\u5e94\u63a5\u53e3\u3002\u5982\u679c\u7528\u6237\u4e4b\u524d\u5df2\u7ecf\u540c\u610f\u6388\u6743\uff0c\u5219\u4e0d\u4f1a\u51fa\u73b0\u5f39\u7a97\uff0c\u76f4\u63a5\u8fd4\u56de\u6210\u529f\u3002\u66f4\u591a\u7528\u6cd5\u8be6\u89c1 \u7528\u6237\u6388\u6743\u3002",source:"@site/versioned_docs/version-3.x/apis/open-api/authorize/authorize.md",slug:"/apis/open-api/authorize/authorize",permalink:"/taro/docs/apis/open-api/authorize/authorize",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/open-api/authorize/authorize.md",version:"3.x",sidebar_label:"authorize",sidebar:"version-3.x/API",previous:{title:"Taro.faceVerifyForPay(option)",permalink:"/taro/docs/apis/open-api/payment/faceVerifyForPay"},next:{title:"Taro.openSetting(option)",permalink:"/taro/docs/apis/open-api/settings/openSetting"}},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],p={rightToc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"\u63d0\u524d\u5411\u7528\u6237\u53d1\u8d77\u6388\u6743\u8bf7\u6c42\u3002\u8c03\u7528\u540e\u4f1a\u7acb\u523b\u5f39\u7a97\u8be2\u95ee\u7528\u6237\u662f\u5426\u540c\u610f\u6388\u6743\u5c0f\u7a0b\u5e8f\u4f7f\u7528\u67d0\u9879\u529f\u80fd\u6216\u83b7\u53d6\u7528\u6237\u7684\u67d0\u4e9b\u6570\u636e\uff0c\u4f46\u4e0d\u4f1a\u5b9e\u9645\u8c03\u7528\u5bf9\u5e94\u63a5\u53e3\u3002\u5982\u679c\u7528\u6237\u4e4b\u524d\u5df2\u7ecf\u540c\u610f\u6388\u6743\uff0c\u5219\u4e0d\u4f1a\u51fa\u73b0\u5f39\u7a97\uff0c\u76f4\u63a5\u8fd4\u56de\u6210\u529f\u3002\u66f4\u591a\u7528\u6cd5\u8be6\u89c1 ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html"}),"\u7528\u6237\u6388\u6743"),"\u3002"),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),Object(c.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.a)("h3",{id:"option"},"Option"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"scope"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.a)("td",null,"\u9700\u8981\u83b7\u53d6\u6743\u9650\u7684 scope\uff0c\u8be6\u89c1 ",Object(c.a)("a",{href:"authorize#scope-%E5%88%97%E8%A1%A8"},"scope \u5217\u8868"))),Object(c.a)("tr",null,Object(c.a)("td",null,"complete"),Object(c.a)("td",null,Object(c.a)("code",null,"(res: CallbackResult) => void")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.a)("tr",null,Object(c.a)("td",null,"fail"),Object(c.a)("td",null,Object(c.a)("code",null,"(res: CallbackResult) => void")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.a)("tr",null,Object(c.a)("td",null,"success"),Object(c.a)("td",null,Object(c.a)("code",null,"(res: CallbackResult) => void")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"// \u53ef\u4ee5\u901a\u8fc7 Taro.getSetting \u5148\u67e5\u8be2\u4e00\u4e0b\u7528\u6237\u662f\u5426\u6388\u6743\u4e86 \"scope.record\" \u8fd9\u4e2a scope\nTaro.getSetting({\n  success: function (res) {\n    if (!res.authSetting['scope.record']) {\n      Taro.authorize({\n        scope: 'scope.record',\n        success: function () {\n          // \u7528\u6237\u5df2\u7ecf\u540c\u610f\u5c0f\u7a0b\u5e8f\u4f7f\u7528\u5f55\u97f3\u529f\u80fd\uff0c\u540e\u7eed\u8c03\u7528 Taro.startRecord \u63a5\u53e3\u4e0d\u4f1a\u5f39\u7a97\u8be2\u95ee\n          Taro.startRecord()\n        }\n      })\n    }\n  }\n})\n")),Object(c.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.authorize"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);