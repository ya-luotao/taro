(window.webpackJsonp=window.webpackJsonp||[]).push([[1571],{1633:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return b}));var r=a(1735),n=a(1736),c=(a(0),a(1737)),l={title:"Taro.writeBLECharacteristicValue(option)",sidebar_label:"writeBLECharacteristicValue"},i={unversionedId:"apis/device/ble/writeBLECharacteristicValue",id:"version-2.x/apis/device/ble/writeBLECharacteristicValue",isDocsHomePage:!1,title:"Taro.writeBLECharacteristicValue(option)",description:"\u5411\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7279\u5f81\u503c\u4e2d\u5199\u5165\u4e8c\u8fdb\u5236\u6570\u636e\u3002\u6ce8\u610f\uff1a\u5fc5\u987b\u8bbe\u5907\u7684\u7279\u5f81\u503c\u652f\u6301 write \u624d\u53ef\u4ee5\u6210\u529f\u8c03\u7528\u3002",source:"@site/versioned_docs/version-2.x/apis/device/ble/writeBLECharacteristicValue.md",slug:"/apis/device/ble/writeBLECharacteristicValue",permalink:"/taro/docs/2.x/apis/device/ble/writeBLECharacteristicValue",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/device/ble/writeBLECharacteristicValue.md",version:"2.x",sidebar_label:"writeBLECharacteristicValue",sidebar:"version-2.x/API",previous:{title:"Taro.addPhoneContact(option)",permalink:"/taro/docs/2.x/apis/device/contact/addPhoneContact"},next:{title:"Taro.readBLECharacteristicValue(option)",permalink:"/taro/docs/2.x/apis/device/ble/readBLECharacteristicValue"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Promised",id:"promised",children:[]},{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:o};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"\u5411\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7279\u5f81\u503c\u4e2d\u5199\u5165\u4e8c\u8fdb\u5236\u6570\u636e\u3002\u6ce8\u610f\uff1a\u5fc5\u987b\u8bbe\u5907\u7684\u7279\u5f81\u503c\u652f\u6301 write \u624d\u53ef\u4ee5\u6210\u529f\u8c03\u7528\u3002"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"\u6ce8\u610f")),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"\u5e76\u884c\u8c03\u7528\u591a\u6b21\u4f1a\u5b58\u5728\u5199\u5931\u8d25\u7684\u53ef\u80fd\u6027\u3002"),Object(c.a)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\u4e0d\u4f1a\u5bf9\u5199\u5165\u6570\u636e\u5305\u5927\u5c0f\u505a\u9650\u5236\uff0c\u4f46\u7cfb\u7edf\u4e0e\u84dd\u7259\u8bbe\u5907\u4f1a\u9650\u5236\u84dd\u72594.0\u5355\u6b21\u4f20\u8f93\u7684\u6570\u636e\u5927\u5c0f\uff0c\u8d85\u8fc7\u6700\u5927\u5b57\u8282\u6570\u540e\u4f1a\u53d1\u751f\u5199\u5165\u9519\u8bef\uff0c\u5efa\u8bae\u6bcf\u6b21\u5199\u5165\u4e0d\u8d85\u8fc720\u5b57\u8282\u3002"),Object(c.a)("li",{parentName:"ul"},"\u82e5\u5355\u6b21\u5199\u5165\u6570\u636e\u8fc7\u957f\uff0ciOS \u4e0a\u5b58\u5728\u7cfb\u7edf\u4e0d\u4f1a\u6709\u4efb\u4f55\u56de\u8c03\u7684\u60c5\u51b5\uff08\u5305\u62ec\u9519\u8bef\u56de\u8c03\uff09\u3002"),Object(c.a)("li",{parentName:"ul"},"\u5b89\u5353\u5e73\u53f0\u4e0a\uff0c\u5728\u8c03\u7528 ",Object(c.a)("inlineCode",{parentName:"li"},"notifyBLECharacteristicValueChange")," \u6210\u529f\u540e\u7acb\u5373\u8c03\u7528 ",Object(c.a)("inlineCode",{parentName:"li"},"writeBLECharacteristicValue")," \u63a5\u53e3\uff0c\u5728\u90e8\u5206\u673a\u578b\u4e0a\u4f1a\u53d1\u751f 10008 \u7cfb\u7edf\u9519\u8bef")),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.writeBLECharacteristicValue.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<Promised>\n")),Object(c.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.a)("h3",{id:"promised"},"Promised"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"errMsg"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),Object(c.a)("h3",{id:"option"},"Option"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"characteristicId"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.a)("td",null,"\u84dd\u7259\u7279\u5f81\u503c\u7684 uuid")),Object(c.a)("tr",null,Object(c.a)("td",null,"deviceId"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.a)("td",null,"\u84dd\u7259\u8bbe\u5907 id")),Object(c.a)("tr",null,Object(c.a)("td",null,"serviceId"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.a)("td",null,"\u84dd\u7259\u7279\u5f81\u503c\u5bf9\u5e94\u670d\u52a1\u7684 uuid")),Object(c.a)("tr",null,Object(c.a)("td",null,"value"),Object(c.a)("td",null,Object(c.a)("code",null,"ArrayBuffer")),Object(c.a)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.a)("td",null,"\u84dd\u7259\u8bbe\u5907\u7279\u5f81\u503c\u5bf9\u5e94\u7684\u4e8c\u8fdb\u5236\u503c")),Object(c.a)("tr",null,Object(c.a)("td",null,"complete"),Object(c.a)("td",null,Object(c.a)("code",null,"(res: BluetoothError) => void")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.a)("tr",null,Object(c.a)("td",null,"fail"),Object(c.a)("td",null,Object(c.a)("code",null,"(res: BluetoothError) => void")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.a)("tr",null,Object(c.a)("td",null,"success"),Object(c.a)("td",null,Object(c.a)("code",null,"(res: BluetoothError) => void")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.a)("pre",null,Object(c.a)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"// \u5411\u84dd\u7259\u8bbe\u5907\u53d1\u9001\u4e00\u4e2a0x00\u768416\u8fdb\u5236\u6570\u636e\nlet buffer = new ArrayBuffer(1)\nlet dataView = new DataView(buffer)\ndataView.setUint8(0, 0)\nTaro.writeBLECharacteristicValue({\n  // \u8fd9\u91cc\u7684 deviceId \u9700\u8981\u5728 getBluetoothDevices \u6216 onBluetoothDeviceFound \u63a5\u53e3\u4e2d\u83b7\u53d6\n  deviceId,\n  // \u8fd9\u91cc\u7684 serviceId \u9700\u8981\u5728 getBLEDeviceServices \u63a5\u53e3\u4e2d\u83b7\u53d6\n  serviceId,\n  // \u8fd9\u91cc\u7684 characteristicId \u9700\u8981\u5728 getBLEDeviceCharacteristics \u63a5\u53e3\u4e2d\u83b7\u53d6\n  characteristicId,\n  // \u8fd9\u91cc\u7684value\u662fArrayBuffer\u7c7b\u578b\n  value: buffer,\n  success: function (res) {\n    console.log('writeBLECharacteristicValue success', res.errMsg)\n  }\n})\n")),Object(c.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.writeBLECharacteristicValue"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}b.isMDXComponent=!0},1735:function(e,t,a){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return r}))},1736:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,"a",(function(){return r}))},1737:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=n.a.createContext({}),b=function(e){var t=n.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=b(a),O=r,j=s["".concat(l,".").concat(O)]||s[O]||d[O]||c;return a?n.a.createElement(j,i(i({ref:t},u),{},{components:a})):n.a.createElement(j,i({ref:t},u))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,l=new Array(c);l[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<c;u++)l[u]=a[u];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);