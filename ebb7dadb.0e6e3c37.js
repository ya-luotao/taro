(window.webpackJsonp=window.webpackJsonp||[]).push([[1539],{1601:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(1735),a=n(1736),c=(n(0),n(1737)),o={title:"Taro.closeBLEConnection(option)",sidebar_label:"closeBLEConnection"},l={unversionedId:"apis/device/ble/closeBLEConnection",id:"version-2.x/apis/device/ble/closeBLEConnection",isDocsHomePage:!1,title:"Taro.closeBLEConnection(option)",description:"\u65ad\u5f00\u4e0e\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7684\u8fde\u63a5\u3002",source:"@site/versioned_docs/version-2.x/apis/device/ble/closeBLEConnection.md",slug:"/apis/device/ble/closeBLEConnection",permalink:"/taro/docs/2.x/apis/device/ble/closeBLEConnection",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/device/ble/closeBLEConnection.md",version:"2.x",sidebar_label:"closeBLEConnection",sidebar:"version-2.x/API",previous:{title:"Taro.createBLEConnection(option)",permalink:"/taro/docs/2.x/apis/device/ble/createBLEConnection"},next:{title:"Taro.stopBluetoothDevicesDiscovery(option)",permalink:"/taro/docs/2.x/apis/device/bluetooth/stopBluetoothDevicesDiscovery"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Promised",id:"promised",children:[]},{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],b={rightToc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"\u65ad\u5f00\u4e0e\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7684\u8fde\u63a5\u3002"),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.closeBLEConnection.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<Promised>\n")),Object(c.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.a)("h3",{id:"promised"},"Promised"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"errMsg"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),Object(c.a)("h3",{id:"option"},"Option"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"deviceId"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.a)("td",null,"\u7528\u4e8e\u533a\u5206\u8bbe\u5907\u7684 id")),Object(c.a)("tr",null,Object(c.a)("td",null,"complete"),Object(c.a)("td",null,Object(c.a)("code",null,"(res: BluetoothError) => void")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.a)("tr",null,Object(c.a)("td",null,"fail"),Object(c.a)("td",null,Object(c.a)("code",null,"(res: BluetoothError) => void")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.a)("tr",null,Object(c.a)("td",null,"success"),Object(c.a)("td",null,Object(c.a)("code",null,"(res: BluetoothError) => void")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.closeBLEConnection({\n  deviceId,\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),Object(c.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.closeBLEConnection"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0},1735:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},1736:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},1737:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,O=d["".concat(o,".").concat(p)]||d[p]||s[p]||c;return n?a.a.createElement(O,l(l({ref:t},b),{},{components:n})):a.a.createElement(O,l({ref:t},b))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<c;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);