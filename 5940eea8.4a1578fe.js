(window.webpackJsonp=window.webpackJsonp||[]).push([[588],{1735:function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return a}))},1736:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,l={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}n.d(e,"a",(function(){return a}))},1737:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n(0),l=n.n(a);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var O=l.a.createContext({}),j=function(t){var e=l.a.useContext(O),n=e;return t&&(n="function"==typeof t?t(e):b(b({},e),t)),n},o={inlineCode:"code",wrapper:function(t){var e=t.children;return l.a.createElement(l.a.Fragment,{},e)}},i=l.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,c=t.originalType,r=t.parentName,O=u(t,["components","mdxType","originalType","parentName"]),i=j(n),d=a,s=i["".concat(r,".").concat(d)]||i[d]||o[d]||c;return n?l.a.createElement(s,b(b({ref:e},O),{},{components:n})):l.a.createElement(s,b({ref:e},O))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var c=n.length,r=new Array(c);r[0]=i;var b={};for(var u in e)hasOwnProperty.call(e,u)&&(b[u]=e[u]);b.originalType=t,b.mdxType="string"==typeof t?t:a,r[1]=b;for(var O=2;O<c;O++)r[O]=n[O];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}i.displayName="MDXCreateElement"},652:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return b})),n.d(e,"rightToc",(function(){return u})),n.d(e,"default",(function(){return j}));var a=n(1735),l=n(1736),c=(n(0),n(1737)),r={title:"Taro.canvasToTempFilePath(option, component)",sidebar_label:"canvasToTempFilePath"},b={unversionedId:"apis/canvas/canvasToTempFilePath",id:"version-2.x/apis/canvas/canvasToTempFilePath",isDocsHomePage:!1,title:"Taro.canvasToTempFilePath(option, component)",description:"\u628a\u5f53\u524d\u753b\u5e03\u6307\u5b9a\u533a\u57df\u7684\u5185\u5bb9\u5bfc\u51fa\u751f\u6210\u6307\u5b9a\u5927\u5c0f\u7684\u56fe\u7247\u3002\u5728 draw() \u56de\u8c03\u91cc\u8c03\u7528\u8be5\u65b9\u6cd5\u624d\u80fd\u4fdd\u8bc1\u56fe\u7247\u5bfc\u51fa\u6210\u529f\u3002",source:"@site/versioned_docs/version-2.x/apis/canvas/canvasToTempFilePath.md",slug:"/apis/canvas/canvasToTempFilePath",permalink:"/taro/docs/2.x/apis/canvas/canvasToTempFilePath",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/canvas/canvasToTempFilePath.md",version:"2.x",sidebar_label:"canvasToTempFilePath",sidebar:"version-2.x/API",previous:{title:"Taro.createCanvasContext(canvasId, component)",permalink:"/taro/docs/2.x/apis/canvas/createCanvasContext"},next:{title:"Taro.canvasPutImageData(option, component)",permalink:"/taro/docs/2.x/apis/canvas/canvasPutImageData"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"fileType",id:"filetype",children:[]},{value:"CanvasProps",id:"canvasprops",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],O={rightToc:u};function j(t){var e=t.components,n=Object(l.a)(t,["components"]);return Object(c.a)("wrapper",Object(a.a)({},O,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)("p",null,"\u628a\u5f53\u524d\u753b\u5e03\u6307\u5b9a\u533a\u57df\u7684\u5185\u5bb9\u5bfc\u51fa\u751f\u6210\u6307\u5b9a\u5927\u5c0f\u7684\u56fe\u7247\u3002\u5728 ",Object(c.a)("inlineCode",{parentName:"p"},"draw()")," \u56de\u8c03\u91cc\u8c03\u7528\u8be5\u65b9\u6cd5\u624d\u80fd\u4fdd\u8bc1\u56fe\u7247\u5bfc\u51fa\u6210\u529f\u3002"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Bug & Tip\uff1a")),Object(c.a)("ol",null,Object(c.a)("li",{parentName:"ol"},Object(c.a)("inlineCode",{parentName:"li"},"tip"),": \u5728 ",Object(c.a)("inlineCode",{parentName:"li"},"draw")," \u56de\u8c03\u91cc\u8c03\u7528\u8be5\u65b9\u6cd5\u624d\u80fd\u4fdd\u8bc1\u56fe\u7247\u5bfc\u51fa\u6210\u529f\u3002")),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasToTempFilePath.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.a)("pre",null,Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option, component?: Record<string, any>) => Promise<SuccessCallbackResult>\n")),Object(c.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.a)("h3",{id:"option"},"Option"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"canvas"),Object(c.a)("td",null,Object(c.a)("code",null,"CanvasProps")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u753b\u5e03\u6807\u8bc6\uff0c\u4f20\u5165 ",Object(c.a)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"},"canvas"),' \u7ec4\u4ef6\u5b9e\u4f8b \uff08canvas type="2d" \u65f6\u4f7f\u7528\u8be5\u5c5e\u6027\uff09\u3002')),Object(c.a)("tr",null,Object(c.a)("td",null,"canvasId"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.a)("td",null,"\u753b\u5e03\u6807\u8bc6\uff0c\u4f20\u5165 ",Object(c.a)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"},"canvas")," \u7ec4\u4ef6\u7684 canvas-id")),Object(c.a)("tr",null,Object(c.a)("td",null,"quality"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u56fe\u7247\u7684\u8d28\u91cf\uff0c\u76ee\u524d\u4ec5\u5bf9 jpg \u6709\u6548\u3002\u53d6\u503c\u8303\u56f4\u4e3a (0, 1]\uff0c\u4e0d\u5728\u8303\u56f4\u5185\u65f6\u5f53\u4f5c 1.0 \u5904\u7406\u3002")),Object(c.a)("tr",null,Object(c.a)("td",null,"complete"),Object(c.a)("td",null,Object(c.a)("code",null,"(res: CallbackResult) => void")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.a)("tr",null,Object(c.a)("td",null,"destHeight"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u8f93\u51fa\u7684\u56fe\u7247\u7684\u9ad8\u5ea6")),Object(c.a)("tr",null,Object(c.a)("td",null,"destWidth"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u8f93\u51fa\u7684\u56fe\u7247\u7684\u5bbd\u5ea6")),Object(c.a)("tr",null,Object(c.a)("td",null,"fail"),Object(c.a)("td",null,Object(c.a)("code",null,"(res: CallbackResult) => void")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.a)("tr",null,Object(c.a)("td",null,"fileType"),Object(c.a)("td",null,Object(c.a)("code",null,'"jpg" | "png"')),Object(c.a)("td",{style:{textAlign:"center"}},Object(c.a)("code",null,'"png"')),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u76ee\u6807\u6587\u4ef6\u7684\u7c7b\u578b")),Object(c.a)("tr",null,Object(c.a)("td",null,"height"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u9ad8\u5ea6")),Object(c.a)("tr",null,Object(c.a)("td",null,"success"),Object(c.a)("td",null,Object(c.a)("code",null,"(result: SuccessCallbackResult) => void")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(c.a)("tr",null,Object(c.a)("td",null,"width"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u5bbd\u5ea6")),Object(c.a)("tr",null,Object(c.a)("td",null,"x"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u5de6\u4e0a\u89d2\u6a2a\u5750\u6807")),Object(c.a)("tr",null,Object(c.a)("td",null,"y"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u5de6\u4e0a\u89d2\u7eb5\u5750\u6807")))),Object(c.a)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"tempFilePath"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",null,"\u751f\u6210\u6587\u4ef6\u7684\u4e34\u65f6\u8def\u5f84")),Object(c.a)("tr",null,Object(c.a)("td",null,"errMsg"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(c.a)("h3",{id:"filetype"},"fileType"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"jpg"),Object(c.a)("td",null,"jpg \u56fe\u7247")),Object(c.a)("tr",null,Object(c.a)("td",null,"png"),Object(c.a)("td",null,"png \u56fe\u7247")))),Object(c.a)("h3",{id:"canvasprops"},"CanvasProps"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"type"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u6307\u5b9a canvas \u7c7b\u578b\uff0c\u652f\u6301 2d \u548c webgl")),Object(c.a)("tr",null,Object(c.a)("td",null,"canvasId"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"canvas \u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u82e5\u6307\u5b9a\u4e86 type \u5219\u65e0\u9700\u518d\u6307\u5b9a\u8be5\u5c5e\u6027")),Object(c.a)("tr",null,Object(c.a)("td",null,"disableScroll"),Object(c.a)("td",null,Object(c.a)("code",null,"boolean")),Object(c.a)("td",{style:{textAlign:"center"}},Object(c.a)("code",null,"false")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u5f53\u5728 canvas \u4e2d\u79fb\u52a8\u65f6\u4e14\u6709\u7ed1\u5b9a\u624b\u52bf\u4e8b\u4ef6\u65f6\uff0c\u7981\u6b62\u5c4f\u5e55\u6eda\u52a8\u4ee5\u53ca\u4e0b\u62c9\u5237\u65b0")),Object(c.a)("tr",null,Object(c.a)("td",null,"onTouchStart"),Object(c.a)("td",null,Object(c.a)("code",null,"CommonEventFunction<any>")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u5f00\u59cb")),Object(c.a)("tr",null,Object(c.a)("td",null,"onTouchMove"),Object(c.a)("td",null,Object(c.a)("code",null,"CommonEventFunction<any>")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u624b\u6307\u89e6\u6478\u540e\u79fb\u52a8")),Object(c.a)("tr",null,Object(c.a)("td",null,"onTouchEnd"),Object(c.a)("td",null,Object(c.a)("code",null,"CommonEventFunction<any>")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u7ed3\u675f")),Object(c.a)("tr",null,Object(c.a)("td",null,"onTouchCancel"),Object(c.a)("td",null,Object(c.a)("code",null,"CommonEventFunction<any>")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u88ab\u6253\u65ad\uff0c\u5982\u6765\u7535\u63d0\u9192\uff0c\u5f39\u7a97")),Object(c.a)("tr",null,Object(c.a)("td",null,"onLongTap"),Object(c.a)("td",null,Object(c.a)("code",null,"CommonEventFunction<any>")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u624b\u6307\u957f\u6309 500ms \u4e4b\u540e\u89e6\u53d1\uff0c\u89e6\u53d1\u4e86\u957f\u6309\u4e8b\u4ef6\u540e\u8fdb\u884c\u79fb\u52a8\u4e0d\u4f1a\u89e6\u53d1\u5c4f\u5e55\u7684\u6eda\u52a8")),Object(c.a)("tr",null,Object(c.a)("td",null,"onError"),Object(c.a)("td",null,Object(c.a)("code",null,"CommonEventFunction<onErrorEventDetail>")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u5f53\u53d1\u751f\u9519\u8bef\u65f6\u89e6\u53d1 error \u4e8b\u4ef6\uff0cdetail = ","{errMsg: 'something wrong'}"," ")))),Object(c.a)("h4",{id:"onerroreventdetail"},"onErrorEventDetail"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"errMsg"),Object(c.a)("td",null,Object(c.a)("code",null,"string"))))),Object(c.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.a)("pre",null,Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.canvasToTempFilePath({\n  x: 100,\n  y: 200,\n  width: 50,\n  height: 50,\n  destWidth: 100,\n  destHeight: 100,\n  canvasId: 'myCanvas',\n  success: function (res) {\n    console.log(res.tempFilePath)\n  }\n})\n")),Object(c.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.canvasToTempFilePath"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}j.isMDXComponent=!0}}]);