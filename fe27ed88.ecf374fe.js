(window.webpackJsonp=window.webpackJsonp||[]).push([[1656],{1718:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(1735),r=a(1736),c=(a(0),a(1737)),o={title:"CanvasGradient",sidebar_label:"CanvasGradient"},l={unversionedId:"apis/canvas/CanvasGradient",id:"version-2.x/apis/canvas/CanvasGradient",isDocsHomePage:!1,title:"CanvasGradient",description:"\u521b\u5efa canvas \u7684\u7ed8\u56fe\u4e0a\u4e0b\u6587 CanvasContext \u5bf9\u8c61",source:"@site/versioned_docs/version-2.x/apis/canvas/CanvasGradient.md",slug:"/apis/canvas/CanvasGradient",permalink:"/taro/docs/2.x/apis/canvas/CanvasGradient",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/canvas/CanvasGradient.md",version:"2.x",sidebar_label:"CanvasGradient",sidebar:"version-2.x/API",previous:{title:"CanvasContext",permalink:"/taro/docs/2.x/apis/canvas/CanvasContext"},next:{title:"Color",permalink:"/taro/docs/2.x/apis/canvas/Color"}},i=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"addColorStop",id:"addcolorstop",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],p={rightToc:i};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"\u521b\u5efa canvas \u7684\u7ed8\u56fe\u4e0a\u4e0b\u6587 CanvasContext \u5bf9\u8c61"),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasGradient.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(c.a)("h3",{id:"addcolorstop"},"addColorStop"),Object(c.a)("p",null,"\u6dfb\u52a0\u989c\u8272\u7684\u6e10\u53d8\u70b9\u3002\u5c0f\u4e8e\u6700\u5c0f stop \u7684\u90e8\u5206\u4f1a\u6309\u6700\u5c0f stop \u7684 color \u6765\u6e32\u67d3\uff0c\u5927\u4e8e\u6700\u5927 stop \u7684\u90e8\u5206\u4f1a\u6309\u6700\u5927 stop \u7684 color \u6765\u6e32\u67d3"),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasGradient.addColorStop.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(stop: number, color: string) => void\n")),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"stop"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u8868\u793a\u6e10\u53d8\u4e2d\u5f00\u59cb\u4e0e\u7ed3\u675f\u4e4b\u95f4\u7684\u4f4d\u7f6e\uff0c\u8303\u56f4 0-1\u3002")),Object(c.a)("tr",null,Object(c.a)("td",null,"color"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",null,"\u6e10\u53d8\u70b9\u7684\u989c\u8272\u3002")))),Object(c.a)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const ctx = Taro.createCanvasContext('myCanvas')\n// Create circular gradient\nconst grd = ctx.createLinearGradient(30, 10, 120, 10)\ngrd.addColorStop(0, 'red')\ngrd.addColorStop(0.16, 'orange')\ngrd.addColorStop(0.33, 'yellow')\ngrd.addColorStop(0.5, 'green')\ngrd.addColorStop(0.66, 'cyan')\ngrd.addColorStop(0.83, 'blue')\ngrd.addColorStop(1, 'purple')\n// Fill with gradient\nctx.setFillStyle(grd)\nctx.fillRect(10, 10, 150, 80)\nctx.draw()\n")),Object(c.a)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CanvasGradient.addColorStop"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(c.a)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CanvasGradient.addColorStop"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0},1735:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},1736:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},1737:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(a),u=n,O=s["".concat(o,".").concat(u)]||s[u]||b[u]||c;return a?r.a.createElement(O,l(l({ref:t},p),{},{components:a})):r.a.createElement(O,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<c;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);