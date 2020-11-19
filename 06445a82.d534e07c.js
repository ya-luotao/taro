(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{104:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a(1735),r=a(1736),l=(a(0),a(1737)),c={title:"Taro.getLogManager(res)",sidebar_label:"getLogManager"},o={unversionedId:"apis/base/debug/getLogManager",id:"apis/base/debug/getLogManager",isDocsHomePage:!1,title:"Taro.getLogManager(res)",description:"\u83b7\u53d6\u65e5\u5fd7\u7ba1\u7406\u5668\u5bf9\u8c61\u3002",source:"@site/docs/apis/base/debug/getLogManager.md",slug:"/apis/base/debug/getLogManager",permalink:"/taro/docs/next/apis/base/debug/getLogManager",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/base/debug/getLogManager.md",version:"current",sidebar_label:"getLogManager",sidebar:"API",previous:{title:"Taro.getRealtimeLogManager()",permalink:"/taro/docs/next/apis/base/debug/getRealtimeLogManager"},next:{title:"LogManager",permalink:"/taro/docs/next/apis/base/debug/LogManager"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"level",id:"level",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],b={rightToc:i};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("p",null,"\u83b7\u53d6\u65e5\u5fd7\u7ba1\u7406\u5668\u5bf9\u8c61\u3002"),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getLogManager.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(res?: Option) => LogManager\n")),Object(l.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.a)("h3",{id:"option"},"Option"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(l.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"level"),Object(l.a)("td",null,Object(l.a)("code",null,"0 | 1")),Object(l.a)("td",{style:{textAlign:"center"}},Object(l.a)("code",null,"0")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426")))),Object(l.a)("h3",{id:"level"},"level"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"0"),Object(l.a)("td",null,"\u8868\u793a\u4f1a\u628a App\u3001Page \u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u548c wx \u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u51fd\u6570\u8c03\u7528\u5199\u5165\u65e5\u5fd7")),Object(l.a)("tr",null,Object(l.a)("td",null,"1"),Object(l.a)("td",null,"\u8868\u793a\u4e0d\u4f1a\u628a App\u3001Page \u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u548c wx \u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u51fd\u6570\u8c03\u7528\u5199\u5165\u65e5\u5fd7")))),Object(l.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const logger = Taro.getLogManager({level: 1})\n\nlogger.log({str: 'hello world'}, 'basic log', 100, [1, 2, 3])\nlogger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])\nlogger.debug({str: 'hello world'}, 'debug log', 100, [1, 2, 3])\nlogger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])\n")),Object(l.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.getLogManager"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0},1735:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},1736:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},1737:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,O=p["".concat(c,".").concat(d)]||p[d]||g[d]||l;return a?r.a.createElement(O,o(o({ref:t},b),{},{components:a})):r.a.createElement(O,o({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<l;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);