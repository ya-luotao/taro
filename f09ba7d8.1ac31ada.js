(window.webpackJsonp=window.webpackJsonp||[]).push([[1568],{1630:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return j}));var n=a(1735),r=a(1736),c=(a(0),a(1737)),l={title:"Taro.chooseImage(OBJECT)",sidebar_label:"chooseImage"},i={unversionedId:"apis/multimedia/images/chooseImage",id:"version-1.x/apis/multimedia/images/chooseImage",isDocsHomePage:!1,title:"Taro.chooseImage(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.chooseImage \uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/multimedia/images/chooseImage.md",slug:"/apis/multimedia/images/chooseImage",permalink:"/taro/docs/1.x/apis/multimedia/images/chooseImage",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/multimedia/images/chooseImage.md",version:"1.x",sidebar_label:"chooseImage",sidebar:"version-1.x/API",previous:{title:"Taro.createCameraContext(this.$scope)",permalink:"/taro/docs/1.x/apis/multimedia/camera/createCameraContext"},next:{title:"Taro.previewImage(param)",permalink:"/taro/docs/1.x/apis/multimedia/images/previewImage"}},b=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",children:[{value:"Promise &lt;object res&gt;",id:"promise-object-res",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],o={rightToc:b};function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.chooseImage.html"}),Object(c.a)("inlineCode",{parentName:"a"},"wx.chooseImage ")),"\uff0c\u652f\u6301 ",Object(c.a)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(c.a)("p",null,"\u6ce8\uff1aRN \u7aef\u8be5 API \u4e0d\u652f\u6301 ",Object(c.a)("inlineCode",{parentName:"p"},"count")," \u5c5e\u6027\uff1b\u4e0d\u652f\u6301\u76f8\u673a\u4e0e\u76f8\u518c\u540c\u65f6\u9009\u62e9\uff0c\u53ea\u4f1a\u53d6 ",Object(c.a)("inlineCode",{parentName:"p"},"sourceType")," \u6570\u7ec4\u91cc\u7684\u7b2c\u4e00\u4e2a\u503c\u3002\u9ed8\u8ba4\u4ece\u76f8\u518c\u9009\u53d6\u56fe\u7247\u3002"),Object(c.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"object"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("code",null,"Object")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u53c2\u6570")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[object.sourceType]"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("code",null,"Array.","<","string",">")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("code",null,"['","album","'",", ","'","camera","']")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u9009\u62e9\u56fe\u7247\u7684\u6765\u6e90\uff08h5\u7aef\u672a\u5b9e\u73b0\uff09")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[object.sizeType]"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("code",null,"Array.","<","string",">")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("code",null,"['","original","'",", ","'","compressed","']")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6240\u9009\u7684\u56fe\u7247\u7684\u5c3a\u5bf8\uff08h5\u7aef\u672a\u5b9e\u73b0\uff09")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[object.count]"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("code",null,"number")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("code",null,"9")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6700\u591a\u53ef\u4ee5\u9009\u62e9\u7684\u56fe\u7247\u5f20\u6570")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[object.success]"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("code",null,"function")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[object.fail]"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("code",null,"function")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[object.complete]"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("code",null,"function")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[object.imageId]"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("code",null,"string")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u7528\u6765\u4e0a\u4f20\u7684input\u5143\u7d20ID\uff08\u4ec5h5\u7aef\uff09")))),Object(c.a)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),Object(c.a)("h3",{id:"promise-object-res"},"Promise ","<","object res",">"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"res.tempFilePaths"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"Array.<string>")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u56fe\u7247\u7684\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u8def\u5f84\u5217\u8868")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"res.tempFiles"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"Array.<Object>")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u56fe\u7247\u7684\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5217\u8868")))),Object(c.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.chooseImage(params).then(...)\n")),Object(c.a)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.chooseImage"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}j.isMDXComponent=!0},1735:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},1736:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},1737:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),j=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=j(a),m=n,u=p["".concat(l,".").concat(m)]||p[m]||O[m]||c;return a?r.a.createElement(u,i(i({ref:t},o),{},{components:a})):r.a.createElement(u,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=p;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<c;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);