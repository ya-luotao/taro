(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{1735:function(e,t,a){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return r}))},1736:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,"a",(function(){return r}))},1737:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),l=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),O=l(a),u=r,s=O["".concat(o,".").concat(u)]||O[u]||b[u]||c;return a?n.a.createElement(s,i(i({ref:t},d),{},{components:a})):n.a.createElement(s,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=O;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<c;d++)o[d]=a[d];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},227:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return l}));var r=a(1735),n=a(1736),c=(a(0),a(1737)),o={title:"\u5361\u5238",sidebar_label:"\u5361\u5238"},i={unversionedId:"apis/open-api/card/card",id:"version-2.x/apis/open-api/card/card",isDocsHomePage:!1,title:"\u5361\u5238",description:"Taro.addCard(OBJECT)",source:"@site/versioned_docs/version-2.x/apis/open-api/card/card.md",slug:"/apis/open-api/card/card",permalink:"/taro/docs/2.x/apis/open-api/card/card",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/open-api/card/card.md",version:"2.x",sidebar_label:"\u5361\u5238"},p=[{value:"Taro.addCard(OBJECT)",id:"taroaddcardobject",children:[]},{value:"Taro.openCard(OBJECT)",id:"taroopencardobject",children:[]}],d={rightToc:p};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h2",{id:"taroaddcardobject"},"Taro.addCard(OBJECT)"),Object(c.a)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(c.a)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.addCard.html"}),Object(c.a)("inlineCode",{parentName:"a"},"wx.addCard")),"\uff0c\u652f\u6301 ",Object(c.a)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.addCard(params).then(...)\n")),Object(c.a)("h2",{id:"taroopencardobject"},"Taro.openCard(OBJECT)"),Object(c.a)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(c.a)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.openCard.html"}),Object(c.a)("inlineCode",{parentName:"a"},"wx.openCard")),"\uff0c\u652f\u6301 ",Object(c.a)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.openCard(params).then(...)\n")),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},"API \u652f\u6301\u5ea6")),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.addCard"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.openCard"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}l.isMDXComponent=!0}}]);