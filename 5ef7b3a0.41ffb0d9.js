(window.webpackJsonp=window.webpackJsonp||[]).push([[633],{1735:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},1736:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},1737:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,O=d["".concat(c,".").concat(p)]||d[p]||s[p]||o;return a?r.a.createElement(O,l(l({ref:t},u),{},{components:a})):r.a.createElement(O,l({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var u=2;u<o;u++)c[u]=a[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},697:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(1735),r=a(1736),o=(a(0),a(1737)),c={title:"Taro.saveVideoToPhotosAlbum(option)",sidebar_label:"saveVideoToPhotosAlbum"},l={unversionedId:"apis/media/video/saveVideoToPhotosAlbum",id:"version-2.x/apis/media/video/saveVideoToPhotosAlbum",isDocsHomePage:!1,title:"Taro.saveVideoToPhotosAlbum(option)",description:"\u4fdd\u5b58\u89c6\u9891\u5230\u7cfb\u7edf\u76f8\u518c\u3002\u652f\u6301mp4\u89c6\u9891\u683c\u5f0f\u3002\u9700\u8981\u7528\u6237\u6388\u6743 scope.writePhotosAlbum",source:"@site/versioned_docs/version-2.x/apis/media/video/saveVideoToPhotosAlbum.md",slug:"/apis/media/video/saveVideoToPhotosAlbum",permalink:"/taro/docs/2.x/apis/media/video/saveVideoToPhotosAlbum",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/media/video/saveVideoToPhotosAlbum.md",version:"2.x",sidebar_label:"saveVideoToPhotosAlbum",sidebar:"version-2.x/API",previous:{title:"Taro.chooseImage(option)",permalink:"/taro/docs/2.x/apis/media/image/chooseImage"},next:{title:"Taro.createVideoContext(id, component)",permalink:"/taro/docs/2.x/apis/media/video/createVideoContext"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"\u4fdd\u5b58\u89c6\u9891\u5230\u7cfb\u7edf\u76f8\u518c\u3002\u652f\u6301mp4\u89c6\u9891\u683c\u5f0f\u3002\u9700\u8981",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html"}),"\u7528\u6237\u6388\u6743")," scope.writePhotosAlbum"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Bug & Tip\uff1a")),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},Object(o.a)("inlineCode",{parentName:"li"},"tip"),": camera \u53c2\u6570\u5728\u90e8\u5206 Android \u624b\u673a\u4e0b\u7531\u4e8e\u7cfb\u7edf ROM \u4e0d\u652f\u6301\u65e0\u6cd5\u751f\u6548")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.saveVideoToPhotosAlbum.html"}),"\u53c2\u8003\u6587\u6863"))),Object(o.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),Object(o.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(o.a)("h3",{id:"option"},"Option"),Object(o.a)("table",null,Object(o.a)("thead",null,Object(o.a)("tr",null,Object(o.a)("th",null,"\u53c2\u6570"),Object(o.a)("th",null,"\u7c7b\u578b"),Object(o.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(o.a)("th",null,"\u8bf4\u660e"))),Object(o.a)("tbody",null,Object(o.a)("tr",null,Object(o.a)("td",null,"filePath"),Object(o.a)("td",null,Object(o.a)("code",null,"string")),Object(o.a)("td",{style:{textAlign:"center"}},"\u662f"),Object(o.a)("td",null,"\u89c6\u9891\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u4ee5\u662f\u4e34\u65f6\u6587\u4ef6\u8def\u5f84\u4e5f\u53ef\u4ee5\u662f\u6c38\u4e45\u6587\u4ef6\u8def\u5f84")),Object(o.a)("tr",null,Object(o.a)("td",null,"complete"),Object(o.a)("td",null,Object(o.a)("code",null,"(res: CallbackResult) => void")),Object(o.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(o.a)("tr",null,Object(o.a)("td",null,"fail"),Object(o.a)("td",null,Object(o.a)("code",null,"(res: CallbackResult) => void")),Object(o.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(o.a)("tr",null,Object(o.a)("td",null,"success"),Object(o.a)("td",null,Object(o.a)("code",null,"(res: CallbackResult) => void")),Object(o.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(o.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.saveVideoToPhotosAlbum({\n  filePath: 'wxfile://xxx'\n  success: function (res) {\n    console.log(res.errMsg)\n  }\n})\n")),Object(o.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.saveVideoToPhotosAlbum"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}b.isMDXComponent=!0}}]);