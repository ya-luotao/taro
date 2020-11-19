(window.webpackJsonp=window.webpackJsonp||[]).push([[876],{1735:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},1736:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},1737:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,j=d["".concat(l,".").concat(u)]||d[u]||O[u]||c;return a?r.a.createElement(j,b(b({ref:t},i),{},{components:a})):r.a.createElement(j,b({ref:t},i))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var i=2;i<c;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},940:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(1735),r=a(1736),c=(a(0),a(1737)),l={title:"RequestTask",sidebar_label:"RequestTask"},b={unversionedId:"apis/network/request/RequestTask",id:"version-2.x/apis/network/request/RequestTask",isDocsHomePage:!1,title:"RequestTask",description:"\u7f51\u7edc\u8bf7\u6c42\u4efb\u52a1\u5bf9\u8c61",source:"@site/versioned_docs/version-2.x/apis/network/request/RequestTask.md",slug:"/apis/network/request/RequestTask",permalink:"/taro/docs/2.x/apis/network/request/RequestTask",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/network/request/RequestTask.md",version:"2.x",sidebar_label:"RequestTask",sidebar:"version-2.x/API",previous:{title:"Taro.request(option)",permalink:"/taro/docs/2.x/apis/network/request/request"},next:{title:"Taro.addInterceptor(callback)",permalink:"/taro/docs/2.x/apis/network/request/addInterceptor"}},o=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"abort",id:"abort",children:[]},{value:"offHeadersReceived",id:"offheadersreceived",children:[]},{value:"onHeadersReceived",id:"onheadersreceived",children:[]}]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"OnHeadersReceivedCallbackResult",id:"onheadersreceivedcallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",children:[]},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",children:[]},{value:"\u793a\u4f8b 3",id:"\u793a\u4f8b-3",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-3",children:[]}],i={rightToc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"\u7f51\u7edc\u8bf7\u6c42\u4efb\u52a1\u5bf9\u8c61"),Object(c.a)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(c.a)("h3",{id:"abort"},"abort"),Object(c.a)("p",null,"\u4e2d\u65ad\u8bf7\u6c42\u4efb\u52a1"),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.abort.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),Object(c.a)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"RequestTask.abort"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(c.a)("h3",{id:"offheadersreceived"},"offHeadersReceived"),Object(c.a)("p",null,"\u53d6\u6d88\u76d1\u542c HTTP Response Header \u4e8b\u4ef6"),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.offHeadersReceived.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"callback"),Object(c.a)("td",null,Object(c.a)("code",null,"(res: CallbackResult) => void")),Object(c.a)("td",null,"HTTP Response Header \u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.a)("h4",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"RequestTask.offHeadersReceived"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(c.a)("h3",{id:"onheadersreceived"},"onHeadersReceived"),Object(c.a)("p",null,"\u76d1\u542c HTTP Response Header \u4e8b\u4ef6\u3002\u4f1a\u6bd4\u8bf7\u6c42\u5b8c\u6210\u4e8b\u4ef6\u66f4\u65e9"),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.onHeadersReceived.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: (result: OnHeadersReceivedCallbackResult) => void) => void\n")),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"callback"),Object(c.a)("td",null,Object(c.a)("code",null,"(result: OnHeadersReceivedCallbackResult) => void")),Object(c.a)("td",null,"HTTP Response Header \u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.a)("h4",{id:"api-\u652f\u6301\u5ea6-2"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"RequestTask.onHeadersReceived"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(c.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.a)("h3",{id:"onheadersreceivedcallbackresult"},"OnHeadersReceivedCallbackResult"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"header"),Object(c.a)("td",null,Object(c.a)("code",null,"Record<string, any>")),Object(c.a)("td",null,"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684 HTTP Response Header")))),Object(c.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.a)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b 1"),Object(c.a)("p",null,"\u56de\u8c03\u51fd\u6570(Callback)\u7528\u6cd5\uff1a"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const requestTask = Taro.request({\n  url: 'test.php', //\u4ec5\u4e3a\u793a\u4f8b\uff0c\u5e76\u975e\u771f\u5b9e\u7684\u63a5\u53e3\u5730\u5740\n  data: {\n    x: '' ,\n    y: ''\n  },\n  header: {\n    'content-type': 'application/json' // \u9ed8\u8ba4\u503c\n  },\n  success: function (res) {\n    console.log(res.data)\n  }\n})\nrequestTask.abort()\n")),Object(c.a)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b 2"),Object(c.a)("p",null,"Promise \u7528\u6cd5\uff1a"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const requestTask = Taro.request({\n  url: 'test.php', //\u4ec5\u4e3a\u793a\u4f8b\uff0c\u5e76\u975e\u771f\u5b9e\u7684\u63a5\u53e3\u5730\u5740\n  data: {\n    x: '' ,\n    y: ''\n  },\n  header: {\n    'content-type': 'application/json' // \u9ed8\u8ba4\u503c\n  },\n  success: function (res) {\n    console.log(res.data)\n  }\n})\nrequestTask.then(res => {\n  console.log(res.data)\n})\nrequestTask.abort()\n")),Object(c.a)("h3",{id:"\u793a\u4f8b-3"},"\u793a\u4f8b 3"),Object(c.a)("p",null,"async/await \u7528\u6cd5\uff1a"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const requestTask = Taro.request(params)\nconst res = await requestTask\nrequestTask.abort()\n")),Object(c.a)("h2",{id:"api-\u652f\u6301\u5ea6-3"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"RequestTask.abort"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"RequestTask.offHeadersReceived"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"RequestTask.onHeadersReceived"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0}}]);