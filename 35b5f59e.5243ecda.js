(window.webpackJsonp=window.webpackJsonp||[]).push([[363],{1735:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},1736:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}a.d(t,"a",(function(){return n}))},1737:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),c=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function O(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var j=c.a.createContext({}),o=function(e){var t=c.a.useContext(j),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},i=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,j=O(e,["components","mdxType","originalType","parentName"]),i=o(a),u=n,m=i["".concat(r,".").concat(u)]||i[u]||d[u]||l;return a?c.a.createElement(m,b(b({ref:t},j),{},{components:a})):c.a.createElement(m,b({ref:t},j))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=i;var b={};for(var O in t)hasOwnProperty.call(t,O)&&(b[O]=t[O]);b.originalType=e,b.mdxType="string"==typeof e?e:n,r[1]=b;for(var j=2;j<l;j++)r[j]=a[j];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,a)}i.displayName="MDXCreateElement"},427:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return O})),a.d(t,"default",(function(){return o}));var n=a(1735),c=a(1736),l=(a(0),a(1737)),r={title:"Camera",sidebar_label:"Camera"},b={unversionedId:"components/media/camera",id:"version-2.x/components/media/camera",isDocsHomePage:!1,title:"Camera",description:"\u7cfb\u7edf\u76f8\u673a",source:"@site/versioned_docs/version-2.x/components/media/camera.md",slug:"/components/media/camera",permalink:"/taro/docs/2.x/components/media/camera",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/components/media/camera.md",version:"2.x",sidebar_label:"Camera",sidebar:"version-2.x/components",previous:{title:"Video",permalink:"/taro/docs/2.x/components/media/video"},next:{title:"Map",permalink:"/taro/docs/2.x/components/maps/map"}},O=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"CameraProps",id:"cameraprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"mode",id:"mode",children:[]},{value:"resolution",id:"resolution",children:[]},{value:"devicePosition",id:"deviceposition",children:[]},{value:"flash",id:"flash",children:[]},{value:"frameSize",id:"framesize",children:[]},{value:"onInitDoneEventDetail",id:"oninitdoneeventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],j={rightToc:O};function o(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("p",null,"\u7cfb\u7edf\u76f8\u673a"),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<CameraProps>\n")),Object(l.a)("h2",{id:"cameraprops"},"CameraProps"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(l.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"mode"),Object(l.a)("td",null,Object(l.a)("code",null,'"normal" | "scanCode"')),Object(l.a)("td",{style:{textAlign:"center"}},Object(l.a)("code",null,'"normal"')),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u6a21\u5f0f\uff0c\u6709\u6548\u503c\u4e3anormal, scanCode")),Object(l.a)("tr",null,Object(l.a)("td",null,"resolution"),Object(l.a)("td",null,Object(l.a)("code",null,'"low" | "medium" | "high"')),Object(l.a)("td",{style:{textAlign:"center"}},Object(l.a)("code",null,'"medium"')),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u5206\u8fa8\u7387\uff0c\u4e0d\u652f\u6301\u52a8\u6001\u4fee\u6539")),Object(l.a)("tr",null,Object(l.a)("td",null,"devicePosition"),Object(l.a)("td",null,Object(l.a)("code",null,'"front" | "back"')),Object(l.a)("td",{style:{textAlign:"center"}},Object(l.a)("code",null,'"back"')),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u6444\u50cf\u5934\u671d\u5411")),Object(l.a)("tr",null,Object(l.a)("td",null,"flash"),Object(l.a)("td",null,Object(l.a)("code",null,'"auto" | "on" | "off" | "torch"')),Object(l.a)("td",{style:{textAlign:"center"}},Object(l.a)("code",null,'"auto"')),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u95ea\u5149\u706f")),Object(l.a)("tr",null,Object(l.a)("td",null,"frameSize"),Object(l.a)("td",null,Object(l.a)("code",null,'"medium" | "small" | "large"')),Object(l.a)("td",{style:{textAlign:"center"}},Object(l.a)("code",null,'"medium"')),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u6307\u5b9a\u671f\u671b\u7684\u76f8\u673a\u5e27\u6570\u636e\u5c3a\u5bf8")),Object(l.a)("tr",null,Object(l.a)("td",null,"scanArea"),Object(l.a)("td",null,Object(l.a)("code",null,"number[]")),Object(l.a)("td",{style:{textAlign:"center"}}),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u626b\u7801\u8bc6\u522b\u533a\u57df\uff0c\u683c\u5f0f\u4e3a[x, y, w, h]\uff0c",Object(l.a)("br",null),"x,y\u662f\u76f8\u5bf9\u4e8ecamera\u663e\u793a\u533a\u57df\u7684\u5de6\u4e0a\u89d2\uff0c",Object(l.a)("br",null),'w,h\u4e3a\u533a\u57df\u5bbd\u5ea6\uff0c\u5355\u4f4dpx\uff0c\u4ec5\u5728 mode="scanCode" \u65f6\u751f\u6548')),Object(l.a)("tr",null,Object(l.a)("td",null,"onStop"),Object(l.a)("td",null,Object(l.a)("code",null,"BaseEventOrigFunction<any>")),Object(l.a)("td",{style:{textAlign:"center"}}),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u6444\u50cf\u5934\u5728\u975e\u6b63\u5e38\u7ec8\u6b62\u65f6\u89e6\u53d1\uff0c",Object(l.a)("br",null),"\u5982\u9000\u51fa\u540e\u53f0\u7b49\u60c5\u51b5")),Object(l.a)("tr",null,Object(l.a)("td",null,"onError"),Object(l.a)("td",null,Object(l.a)("code",null,"BaseEventOrigFunction<any>")),Object(l.a)("td",{style:{textAlign:"center"}}),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u7528\u6237\u4e0d\u5141\u8bb8\u4f7f\u7528\u6444\u50cf\u5934\u65f6\u89e6\u53d1")),Object(l.a)("tr",null,Object(l.a)("td",null,"onInitDone"),Object(l.a)("td",null,Object(l.a)("code",null,"BaseEventOrigFunction<onInitDoneEventDetail>")),Object(l.a)("td",{style:{textAlign:"center"}}),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u76f8\u673a\u521d\u59cb\u5316\u5b8c\u6210\u65f6\u89e6\u53d1")),Object(l.a)("tr",null,Object(l.a)("td",null,"onScanCode"),Object(l.a)("td",null,Object(l.a)("code",null,"BaseEventOrigFunction<any>")),Object(l.a)("td",{style:{textAlign:"center"}}),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u5728\u6210\u529f\u8bc6\u522b\u5230\u4e00\u7ef4\u7801\u65f6\u89e6\u53d1\uff0c",Object(l.a)("br",null),'\u4ec5\u5728 mode="scanCode" \u65f6\u751f\u6548')))),Object(l.a)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.mode"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.resolution"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.devicePosition"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.flash"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.frameSize"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.scanArea"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.onStop"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.onError"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.onInitDone"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CameraProps.onScanCode"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(l.a)("h3",{id:"mode"},"mode"),Object(l.a)("p",null,"mode \u7684\u5408\u6cd5\u503c"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"normal"),Object(l.a)("td",null,"\u76f8\u673a\u6a21\u5f0f")),Object(l.a)("tr",null,Object(l.a)("td",null,"scanCode"),Object(l.a)("td",null,"\u626b\u7801\u6a21\u5f0f")))),Object(l.a)("h3",{id:"resolution"},"resolution"),Object(l.a)("p",null,"resolution \u7684\u5408\u6cd5\u503c"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"low"),Object(l.a)("td",null,"\u4f4e")),Object(l.a)("tr",null,Object(l.a)("td",null,"medium"),Object(l.a)("td",null,"\u4e2d")),Object(l.a)("tr",null,Object(l.a)("td",null,"high"),Object(l.a)("td",null,"\u9ad8")))),Object(l.a)("h3",{id:"deviceposition"},"devicePosition"),Object(l.a)("p",null,"device-position \u7684\u5408\u6cd5\u503c"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"front"),Object(l.a)("td",null,"\u524d\u7f6e")),Object(l.a)("tr",null,Object(l.a)("td",null,"back"),Object(l.a)("td",null,"\u540e\u7f6e")))),Object(l.a)("h3",{id:"flash"},"flash"),Object(l.a)("p",null,"flash \u7684\u5408\u6cd5\u503c"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"auto"),Object(l.a)("td",null,"\u81ea\u52a8")),Object(l.a)("tr",null,Object(l.a)("td",null,"on"),Object(l.a)("td",null,"\u6253\u5f00")),Object(l.a)("tr",null,Object(l.a)("td",null,"off"),Object(l.a)("td",null,"\u5173\u95ed")),Object(l.a)("tr",null,Object(l.a)("td",null,"torch"),Object(l.a)("td",null,"\u5e38\u4eae")))),Object(l.a)("h3",{id:"framesize"},"frameSize"),Object(l.a)("p",null,"frame-size \u7684\u5408\u6cd5\u503c"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"small"),Object(l.a)("td",null,"\u5c0f\u5c3a\u5bf8\u5e27\u6570\u636e")),Object(l.a)("tr",null,Object(l.a)("td",null,"medium"),Object(l.a)("td",null,"\u4e2d\u5c3a\u5bf8\u5e27\u6570\u636e")),Object(l.a)("tr",null,Object(l.a)("td",null,"large"),Object(l.a)("td",null,"\u5927\u5c3a\u5bf8\u5e27\u6570\u636e")))),Object(l.a)("h3",{id:"oninitdoneeventdetail"},"onInitDoneEventDetail"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"maxZoom"),Object(l.a)("td",null,Object(l.a)("code",null,"number")),Object(l.a)("td",null,"\u6700\u5927\u53d8\u7126")))),Object(l.a)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Camera"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}o.isMDXComponent=!0}}]);