(window.webpackJsonp=window.webpackJsonp||[]).push([[1228],{1291:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(1735),c=n(1736),r=(n(0),n(1737)),o={title:"Taro.chooseInvoice(option)",sidebar_label:"chooseInvoice"},i={unversionedId:"apis/open-api/invoice/chooseInvoice",id:"version-3.x/apis/open-api/invoice/chooseInvoice",isDocsHomePage:!1,title:"Taro.chooseInvoice(option)",description:"\u9009\u62e9\u7528\u6237\u5df2\u6709\u7684\u53d1\u7968\u3002",source:"@site/versioned_docs/version-3.x/apis/open-api/invoice/chooseInvoice.md",slug:"/apis/open-api/invoice/chooseInvoice",permalink:"/taro/docs/apis/open-api/invoice/chooseInvoice",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/open-api/invoice/chooseInvoice.md",version:"3.x",sidebar_label:"chooseInvoice",sidebar:"version-3.x/API",previous:{title:"Taro.chooseInvoiceTitle(option)",permalink:"/taro/docs/apis/open-api/invoice/chooseInvoiceTitle"},next:{title:"Taro.startSoterAuthentication(option)",permalink:"/taro/docs/apis/open-api/soter/startSoterAuthentication"}},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.a)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"\u9009\u62e9\u7528\u6237\u5df2\u6709\u7684\u53d1\u7968\u3002"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"\u901a\u8fc7 cardId \u548c encryptCode \u83b7\u5f97\u62a5\u9500\u53d1\u7968\u7684\u4fe1\u606f"),"\n\u8bf7\u53c2\u8003",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://mp.weixin.qq.com/wiki?t=resource/res_main&id=21517918939oae3U"}),"\u5fae\u4fe1\u7535\u5b50\u53d1\u7968\u6587\u6863"),"\u4e2d\uff0c\u300c\u67e5\u8be2\u62a5\u9500\u53d1\u7968\u4fe1\u606f\u300d\u90e8\u5206\u3002\n\u5176\u4e2d ",Object(r.a)("inlineCode",{parentName:"p"},"access_token")," \u7684\u83b7\u53d6\u8bf7\u53c2\u8003",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html"}),"auth.getAccessToken"),"\u6587\u6863"),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"},Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),Object(r.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(r.a)("h3",{id:"option"},"Option"),Object(r.a)("table",null,Object(r.a)("thead",null,Object(r.a)("tr",null,Object(r.a)("th",null,"\u53c2\u6570"),Object(r.a)("th",null,"\u7c7b\u578b"),Object(r.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.a)("th",null,"\u8bf4\u660e"))),Object(r.a)("tbody",null,Object(r.a)("tr",null,Object(r.a)("td",null,"complete"),Object(r.a)("td",null,Object(r.a)("code",null,"(res: CallbackResult) => void")),Object(r.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(r.a)("tr",null,Object(r.a)("td",null,"fail"),Object(r.a)("td",null,Object(r.a)("code",null,"(res: CallbackResult) => void")),Object(r.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(r.a)("tr",null,Object(r.a)("td",null,"success"),Object(r.a)("td",null,Object(r.a)("code",null,"(result: SuccessCallbackResult) => void")),Object(r.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(r.a)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(r.a)("table",null,Object(r.a)("thead",null,Object(r.a)("tr",null,Object(r.a)("th",null,"\u53c2\u6570"),Object(r.a)("th",null,"\u7c7b\u578b"),Object(r.a)("th",null,"\u8bf4\u660e"))),Object(r.a)("tbody",null,Object(r.a)("tr",null,Object(r.a)("td",null,"invoiceInfo"),Object(r.a)("td",null,Object(r.a)("code",null,"string")),Object(r.a)("td",null,"\u7528\u6237\u9009\u4e2d\u7684\u53d1\u7968\u4fe1\u606f\uff0c\u683c\u5f0f\u4e3a\u4e00\u4e2a JSON \u5b57\u7b26\u4e32\uff0c\u5305\u542b\u4e09\u4e2a\u5b57\u6bb5\uff1a card_id\uff1a\u6240\u9009\u53d1\u7968\u5361\u5238\u7684 cardId\uff0cencrypt_code\uff1a\u6240\u9009\u53d1\u7968\u5361\u5238\u7684\u52a0\u5bc6 code\uff0c\u62a5\u9500\u65b9\u53ef\u4ee5\u901a\u8fc7 cardId \u548c encryptCode \u83b7\u5f97\u62a5\u9500\u53d1\u7968\u7684\u4fe1\u606f\uff0capp_id\uff1a \u53d1\u7968\u65b9\u7684 appId\u3002")),Object(r.a)("tr",null,Object(r.a)("td",null,"errMsg"),Object(r.a)("td",null,Object(r.a)("code",null,"string")),Object(r.a)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(r.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.chooseInvoice({\n  success: function (res) {}\n})\n")),Object(r.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.chooseInvoice"),Object(r.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(r.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0},1735:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},1736:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}n.d(t,"a",(function(){return a}))},1737:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),s=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),O=a,d=b["".concat(o,".").concat(O)]||b[O]||u[O]||r;return n?c.a.createElement(d,i(i({ref:t},p),{},{components:n})):c.a.createElement(d,i({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);