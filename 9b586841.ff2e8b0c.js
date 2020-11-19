(window.webpackJsonp=window.webpackJsonp||[]).push([[1037],{1101:function(e,t,c){"use strict";c.r(t),c.d(t,"frontMatter",(function(){return l})),c.d(t,"metadata",(function(){return i})),c.d(t,"rightToc",(function(){return o})),c.d(t,"default",(function(){return b}));var n=c(1735),a=c(1736),r=(c(0),c(1737)),l={title:"Taro.getBLEDeviceServices(option)",sidebar_label:"getBLEDeviceServices"},i={unversionedId:"apis/device/ble/getBLEDeviceServices",id:"version-3.x/apis/device/ble/getBLEDeviceServices",isDocsHomePage:!1,title:"Taro.getBLEDeviceServices(option)",description:"\u83b7\u53d6\u84dd\u7259\u8bbe\u5907\u6240\u6709\u670d\u52a1(service)\u3002",source:"@site/versioned_docs/version-3.x/apis/device/ble/getBLEDeviceServices.md",slug:"/apis/device/ble/getBLEDeviceServices",permalink:"/taro/docs/apis/device/ble/getBLEDeviceServices",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/ble/getBLEDeviceServices.md",version:"3.x",sidebar_label:"getBLEDeviceServices",sidebar:"version-3.x/API",previous:{title:"Taro.notifyBLECharacteristicValueChange(option)",permalink:"/taro/docs/apis/device/ble/notifyBLECharacteristicValueChange"},next:{title:"Taro.getBLEDeviceCharacteristics(option)",permalink:"/taro/docs/apis/device/ble/getBLEDeviceCharacteristics"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"BLEService",id:"bleservice",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:o};function b(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"\u83b7\u53d6\u84dd\u7259\u8bbe\u5907\u6240\u6709\u670d\u52a1(service)\u3002"),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"},Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceServices.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(r.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(r.a)("h3",{id:"option"},"Option"),Object(r.a)("table",null,Object(r.a)("thead",null,Object(r.a)("tr",null,Object(r.a)("th",null,"\u53c2\u6570"),Object(r.a)("th",null,"\u7c7b\u578b"),Object(r.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.a)("th",null,"\u8bf4\u660e"))),Object(r.a)("tbody",null,Object(r.a)("tr",null,Object(r.a)("td",null,"deviceId"),Object(r.a)("td",null,Object(r.a)("code",null,"string")),Object(r.a)("td",{style:{textAlign:"center"}},"\u662f"),Object(r.a)("td",null,"\u84dd\u7259\u8bbe\u5907 id")),Object(r.a)("tr",null,Object(r.a)("td",null,"complete"),Object(r.a)("td",null,Object(r.a)("code",null,"(res: BluetoothError) => void")),Object(r.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(r.a)("tr",null,Object(r.a)("td",null,"fail"),Object(r.a)("td",null,Object(r.a)("code",null,"(res: BluetoothError) => void")),Object(r.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(r.a)("tr",null,Object(r.a)("td",null,"success"),Object(r.a)("td",null,Object(r.a)("code",null,"(result: SuccessCallbackResult) => void")),Object(r.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(r.a)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(r.a)("table",null,Object(r.a)("thead",null,Object(r.a)("tr",null,Object(r.a)("th",null,"\u53c2\u6570"),Object(r.a)("th",null,"\u7c7b\u578b"),Object(r.a)("th",null,"\u8bf4\u660e"))),Object(r.a)("tbody",null,Object(r.a)("tr",null,Object(r.a)("td",null,"services"),Object(r.a)("td",null,Object(r.a)("code",null,"BLEService[]")),Object(r.a)("td",null,"\u8bbe\u5907\u670d\u52a1\u5217\u8868")),Object(r.a)("tr",null,Object(r.a)("td",null,"errMsg"),Object(r.a)("td",null,Object(r.a)("code",null,"string")),Object(r.a)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),Object(r.a)("h3",{id:"bleservice"},"BLEService"),Object(r.a)("p",null,"\u8bbe\u5907\u670d\u52a1\u5217\u8868"),Object(r.a)("table",null,Object(r.a)("thead",null,Object(r.a)("tr",null,Object(r.a)("th",null,"\u53c2\u6570"),Object(r.a)("th",null,"\u7c7b\u578b"),Object(r.a)("th",null,"\u8bf4\u660e"))),Object(r.a)("tbody",null,Object(r.a)("tr",null,Object(r.a)("td",null,"isPrimary"),Object(r.a)("td",null,Object(r.a)("code",null,"boolean")),Object(r.a)("td",null,"\u8be5\u670d\u52a1\u662f\u5426\u4e3a\u4e3b\u670d\u52a1")),Object(r.a)("tr",null,Object(r.a)("td",null,"uuid"),Object(r.a)("td",null,Object(r.a)("code",null,"string")),Object(r.a)("td",null,"\u84dd\u7259\u8bbe\u5907\u670d\u52a1\u7684 uuid")))),Object(r.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.getBLEDeviceServices({\n  // \u8fd9\u91cc\u7684 deviceId \u9700\u8981\u5df2\u7ecf\u901a\u8fc7 createBLEConnection \u4e0e\u5bf9\u5e94\u8bbe\u5907\u5efa\u7acb\u94fe\u63a5\n  deviceId,\n  success: function (res) {\n    console.log('device services:', res.services)\n  }\n})\n")),Object(r.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.getBLEDeviceServices"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}b.isMDXComponent=!0},1735:function(e,t,c){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}c.d(t,"a",(function(){return n}))},1736:function(e,t,c){"use strict";function n(e,t){if(null==e)return{};var c,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||(a[c]=e[c]);return a}c.d(t,"a",(function(){return n}))},1737:function(e,t,c){"use strict";c.d(t,"a",(function(){return d}));var n=c(0),a=c.n(n);function r(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function l(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function i(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?l(Object(c),!0).forEach((function(t){r(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):l(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}function o(e,t){if(null==e)return{};var c,n,a=function(e,t){if(null==e)return{};var c,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||(a[c]=e[c]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(a[c]=e[c])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),c=t;return e&&(c="function"==typeof e?e(t):i(i({},t),e)),c},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var c=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),O=b(c),d=n,j=O["".concat(l,".").concat(d)]||O[d]||s[d]||r;return c?a.a.createElement(j,i(i({ref:t},u),{},{components:c})):a.a.createElement(j,i({ref:t},u))}));function d(e,t){var c=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=c.length,l=new Array(r);l[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<r;u++)l[u]=c[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,c)}O.displayName="MDXCreateElement"}}]);