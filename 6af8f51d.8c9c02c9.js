(window.webpackJsonp=window.webpackJsonp||[]).push([[713],{1735:function(e,t,n){"use strict";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return i}))},1736:function(e,t,n){"use strict";function i(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return i}))},1737:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),O=s(n),d=i,p=O["".concat(c,".").concat(d)]||O[d]||u[d]||r;return n?a.a.createElement(p,l(l({ref:t},b),{},{components:n})):a.a.createElement(p,l({ref:t},b))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=O;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var b=2;b<r;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},777:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var i=n(1735),a=n(1736),r=(n(0),n(1737)),c={title:"Taro.setWifiList(option)",sidebar_label:"setWifiList"},l={unversionedId:"apis/device/wifi/setWifiList",id:"version-3.x/apis/device/wifi/setWifiList",isDocsHomePage:!1,title:"Taro.setWifiList(option)",description:"\u8bbe\u7f6e wifiList \u4e2d AP \u7684\u76f8\u5173\u4fe1\u606f\u3002\u5728 onGetWifiList \u56de\u8c03\u540e\u8c03\u7528\uff0ciOS\u7279\u6709\u63a5\u53e3\u3002",source:"@site/versioned_docs/version-3.x/apis/device/wifi/setWifiList.md",slug:"/apis/device/wifi/setWifiList",permalink:"/taro/docs/apis/device/wifi/setWifiList",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/wifi/setWifiList.md",version:"3.x",sidebar_label:"setWifiList",sidebar:"version-3.x/API",previous:{title:"Taro.startWifi(option)",permalink:"/taro/docs/apis/device/wifi/startWifi"},next:{title:"Taro.onWifiConnected(callback)",permalink:"/taro/docs/apis/device/wifi/onWifiConnected"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"WifiData",id:"wifidata",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],b={rightToc:o};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.a)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"\u8bbe\u7f6e ",Object(r.a)("inlineCode",{parentName:"p"},"wifiList")," \u4e2d AP \u7684\u76f8\u5173\u4fe1\u606f\u3002\u5728 ",Object(r.a)("inlineCode",{parentName:"p"},"onGetWifiList")," \u56de\u8c03\u540e\u8c03\u7528\uff0c",Object(r.a)("strong",{parentName:"p"},"iOS\u7279\u6709\u63a5\u53e3"),"\u3002"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"\u6ce8\u610f")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"\u8be5\u63a5\u53e3\u53ea\u80fd\u5728 ",Object(r.a)("inlineCode",{parentName:"li"},"onGetWifiList")," \u56de\u8c03\u4e4b\u540e\u624d\u80fd\u8c03\u7528\u3002"),Object(r.a)("li",{parentName:"ul"},"\u6b64\u65f6\u5ba2\u6237\u7aef\u4f1a\u6302\u8d77\uff0c\u7b49\u5f85\u5c0f\u7a0b\u5e8f\u8bbe\u7f6e Wi-Fi \u4fe1\u606f\uff0c\u8bf7\u52a1\u5fc5\u5c3d\u5feb\u8c03\u7528\u8be5\u63a5\u53e3\uff0c\u82e5\u65e0\u6570\u636e\u8bf7\u4f20\u5165\u4e00\u4e2a\u7a7a\u6570\u7ec4\u3002"),Object(r.a)("li",{parentName:"ul"},"\u6709\u53ef\u80fd\u968f\u7740\u5468\u8fb9 Wi-Fi \u5217\u8868\u7684\u5237\u65b0\uff0c\u5355\u4e2a\u6d41\u7a0b\u5185\u6536\u5230\u591a\u6b21\u5e26\u6709\u5b58\u5728\u91cd\u590d\u7684 Wi-Fi \u5217\u8868\u7684\u56de\u8c03\u3002")),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"},Object(r.a)("a",Object(i.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.setWifiList.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.a)("pre",null,Object(r.a)("code",Object(i.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<WifiError>\n")),Object(r.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(r.a)("h3",{id:"option"},"Option"),Object(r.a)("table",null,Object(r.a)("thead",null,Object(r.a)("tr",null,Object(r.a)("th",null,"\u53c2\u6570"),Object(r.a)("th",null,"\u7c7b\u578b"),Object(r.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.a)("th",null,"\u8bf4\u660e"))),Object(r.a)("tbody",null,Object(r.a)("tr",null,Object(r.a)("td",null,"wifiList"),Object(r.a)("td",null,Object(r.a)("code",null,"WifiData[]")),Object(r.a)("td",{style:{textAlign:"center"}},"\u662f"),Object(r.a)("td",null,"\u63d0\u4f9b\u9884\u8bbe\u7684 Wi-Fi \u4fe1\u606f\u5217\u8868")),Object(r.a)("tr",null,Object(r.a)("td",null,"complete"),Object(r.a)("td",null,Object(r.a)("code",null,"(res: WifiError) => void")),Object(r.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(r.a)("tr",null,Object(r.a)("td",null,"fail"),Object(r.a)("td",null,Object(r.a)("code",null,"(res: WifiError) => void")),Object(r.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(r.a)("tr",null,Object(r.a)("td",null,"success"),Object(r.a)("td",null,Object(r.a)("code",null,"(res: WifiError) => void")),Object(r.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(r.a)("h3",{id:"wifidata"},"WifiData"),Object(r.a)("p",null,"\u63d0\u4f9b\u9884\u8bbe\u7684 Wi-Fi \u4fe1\u606f\u5217\u8868"),Object(r.a)("table",null,Object(r.a)("thead",null,Object(r.a)("tr",null,Object(r.a)("th",null,"\u53c2\u6570"),Object(r.a)("th",null,"\u7c7b\u578b"),Object(r.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.a)("th",null,"\u8bf4\u660e"))),Object(r.a)("tbody",null,Object(r.a)("tr",null,Object(r.a)("td",null,"BSSID"),Object(r.a)("td",null,Object(r.a)("code",null,"string")),Object(r.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.a)("td",null,"Wi-Fi \u7684 BSSID")),Object(r.a)("tr",null,Object(r.a)("td",null,"SSID"),Object(r.a)("td",null,Object(r.a)("code",null,"string")),Object(r.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.a)("td",null,"Wi-Fi \u7684 SSID")),Object(r.a)("tr",null,Object(r.a)("td",null,"password"),Object(r.a)("td",null,Object(r.a)("code",null,"string")),Object(r.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.a)("td",null,"Wi-Fi \u8bbe\u5907\u5bc6\u7801")))),Object(r.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.a)("pre",null,Object(r.a)("code",Object(i.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.onGetWifiList(function (res) {\n  if (res.wifiList.length) {\n    Taro.setWifiList({\n      wifiList: [{\n        SSID: res.wifiList[0].SSID,\n        BSSID: res.wifiList[0].BSSID,\n        password: '123456'\n      }]\n    })\n  } else {\n    Taro.setWifiList({\n      wifiList: []\n    })\n  }\n})\nTaro.getWifiList()\n")),Object(r.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.a)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.a)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.a)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"Taro.setWifiList"),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"center"})),Object(r.a)("td",Object(i.a)({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0}}]);