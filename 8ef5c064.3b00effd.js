(window.webpackJsonp=window.webpackJsonp||[]).push([[948],{1012:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return O})),a.d(t,"default",(function(){return o}));var c=a(1735),n=a(1736),l=(a(0),a(1737)),r={title:"UDPSocket",sidebar_label:"UDPSocket"},b={unversionedId:"apis/network/udp/UDPSocket",id:"version-2.x/apis/network/udp/UDPSocket",isDocsHomePage:!1,title:"UDPSocket",description:"\u4e00\u4e2a UDP Socket \u5b9e\u4f8b\uff0c\u9ed8\u8ba4\u4f7f\u7528 IPv4 \u534f\u8bae\u3002",source:"@site/versioned_docs/version-2.x/apis/network/udp/UDPSocket.md",slug:"/apis/network/udp/UDPSocket",permalink:"/taro/docs/2.x/apis/network/udp/UDPSocket",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/network/udp/UDPSocket.md",version:"2.x",sidebar_label:"UDPSocket",sidebar:"version-2.x/API",previous:{title:"Taro.createUDPSocket()",permalink:"/taro/docs/2.x/apis/network/udp/createUDPSocket"},next:{title:"Taro.setStorageSync(key, data)",permalink:"/taro/docs/2.x/apis/storage/setStorageSync"}},O=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"close",id:"close",children:[]},{value:"offClose",id:"offclose",children:[]},{value:"offError",id:"offerror",children:[]},{value:"offListening",id:"offlistening",children:[]},{value:"offMessage",id:"offmessage",children:[]},{value:"onClose",id:"onclose",children:[]},{value:"onError",id:"onerror",children:[]},{value:"onListening",id:"onlistening",children:[]},{value:"onMessage",id:"onmessage",children:[]},{value:"send",id:"send",children:[]},{value:"bind",id:"bind",children:[]}]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"OffCloseCallback",id:"offclosecallback",children:[]},{value:"OffErrorCallback",id:"offerrorcallback",children:[]},{value:"OnCloseCallback",id:"onclosecallback",children:[]},{value:"OnErrorCallback",id:"onerrorcallback",children:[]},{value:"OnMessageCallback",id:"onmessagecallback",children:[]},{value:"OnErrorCallbackResult",id:"onerrorcallbackresult",children:[]},{value:"OnMessageCallbackResult",id:"onmessagecallbackresult",children:[]},{value:"RemoteInfo",id:"remoteinfo",children:[]},{value:"SendOption",id:"sendoption",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-11",children:[]}],j={rightToc:O};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.a)("wrapper",Object(c.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("p",null,"\u4e00\u4e2a UDP Socket \u5b9e\u4f8b\uff0c\u9ed8\u8ba4\u4f7f\u7528 IPv4 \u534f\u8bae\u3002"),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.a)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(l.a)("h3",{id:"close"},"close"),Object(l.a)("p",null,"\u5173\u95ed UDP Socket \u5b9e\u4f8b\uff0c\u76f8\u5f53\u4e8e\u9500\u6bc1\u3002 \u5728\u5173\u95ed\u4e4b\u540e\uff0cUDP Socket \u5b9e\u4f8b\u4e0d\u80fd\u518d\u53d1\u9001\u6d88\u606f\uff0c\u6bcf\u6b21\u8c03\u7528 ",Object(l.a)("inlineCode",{parentName:"p"},"UDPSocket.send")," \u5c06\u4f1a\u89e6\u53d1\u9519\u8bef\u4e8b\u4ef6\uff0c\u5e76\u4e14 message \u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u4e5f\u4e0d\u4f1a\u518d\u4e5f\u6267\u884c\u3002\u5728 ",Object(l.a)("inlineCode",{parentName:"p"},"UDPSocket")," \u5b9e\u4f8b\u88ab\u521b\u5efa\u540e\u5c06\u88ab Native \u5f3a\u5f15\u7528\uff0c\u4fdd\u8bc1\u5176\u4e0d\u88ab GC\u3002\u5728 ",Object(l.a)("inlineCode",{parentName:"p"},"UDPSocket.close")," \u540e\u5c06\u89e3\u9664\u5bf9\u5176\u7684\u5f3a\u5f15\u7528\uff0c\u8ba9 UDPSocket \u5b9e\u4f8b\u9075\u4ece GC\u3002"),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.close.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.a)("pre",null,Object(l.a)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),Object(l.a)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.close"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))),Object(l.a)("h3",{id:"offclose"},"offClose"),Object(l.a)("p",null,"\u53d6\u6d88\u76d1\u542c\u5173\u95ed\u4e8b\u4ef6"),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.offClose.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.a)("pre",null,Object(l.a)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OffCloseCallback) => void\n")),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"callback"),Object(l.a)("td",null,Object(l.a)("code",null,"OffCloseCallback")),Object(l.a)("td",null,"\u5173\u95ed\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.a)("h4",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.offClose"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))),Object(l.a)("h3",{id:"offerror"},"offError"),Object(l.a)("p",null,"\u53d6\u6d88\u76d1\u542c\u9519\u8bef\u4e8b\u4ef6"),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.offError.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.a)("pre",null,Object(l.a)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OffErrorCallback) => void\n")),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"callback"),Object(l.a)("td",null,Object(l.a)("code",null,"OffErrorCallback")),Object(l.a)("td",null,"\u9519\u8bef\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.a)("h4",{id:"api-\u652f\u6301\u5ea6-2"},"API \u652f\u6301\u5ea6"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.offError"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))),Object(l.a)("h3",{id:"offlistening"},"offListening"),Object(l.a)("p",null,"\u53d6\u6d88\u76d1\u542c\u5f00\u59cb\u76d1\u542c\u6570\u636e\u5305\u6d88\u606f\u7684\u4e8b\u4ef6"),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.offListening.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.a)("pre",null,Object(l.a)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"callback"),Object(l.a)("td",null,Object(l.a)("code",null,"(res: CallbackResult) => void")),Object(l.a)("td",null,"\u5f00\u59cb\u76d1\u542c\u6570\u636e\u5305\u6d88\u606f\u7684\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.a)("h4",{id:"api-\u652f\u6301\u5ea6-3"},"API \u652f\u6301\u5ea6"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.offListening"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))),Object(l.a)("h3",{id:"offmessage"},"offMessage"),Object(l.a)("p",null,"\u53d6\u6d88\u76d1\u542c\u6536\u5230\u6d88\u606f\u7684\u4e8b\u4ef6"),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.offMessage.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.a)("pre",null,Object(l.a)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"callback"),Object(l.a)("td",null,Object(l.a)("code",null,"(res: CallbackResult) => void")),Object(l.a)("td",null,"\u6536\u5230\u6d88\u606f\u7684\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.a)("h4",{id:"api-\u652f\u6301\u5ea6-4"},"API \u652f\u6301\u5ea6"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.offMessage"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))),Object(l.a)("h3",{id:"onclose"},"onClose"),Object(l.a)("p",null,"\u76d1\u542c\u5173\u95ed\u4e8b\u4ef6"),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.onClose.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.a)("pre",null,Object(l.a)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OnCloseCallback) => void\n")),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"callback"),Object(l.a)("td",null,Object(l.a)("code",null,"OnCloseCallback")),Object(l.a)("td",null,"\u5173\u95ed\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.a)("h4",{id:"api-\u652f\u6301\u5ea6-5"},"API \u652f\u6301\u5ea6"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.onClose"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))),Object(l.a)("h3",{id:"onerror"},"onError"),Object(l.a)("p",null,"\u76d1\u542c\u9519\u8bef\u4e8b\u4ef6"),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.onError.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.a)("pre",null,Object(l.a)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OnErrorCallback) => void\n")),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"callback"),Object(l.a)("td",null,Object(l.a)("code",null,"OnErrorCallback")),Object(l.a)("td",null,"\u9519\u8bef\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.a)("h4",{id:"api-\u652f\u6301\u5ea6-6"},"API \u652f\u6301\u5ea6"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.onError"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))),Object(l.a)("h3",{id:"onlistening"},"onListening"),Object(l.a)("p",null,"\u76d1\u542c\u5f00\u59cb\u76d1\u542c\u6570\u636e\u5305\u6d88\u606f\u7684\u4e8b\u4ef6"),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.onListening.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.a)("pre",null,Object(l.a)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"callback"),Object(l.a)("td",null,Object(l.a)("code",null,"(res: CallbackResult) => void")),Object(l.a)("td",null,"\u5f00\u59cb\u76d1\u542c\u6570\u636e\u5305\u6d88\u606f\u7684\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.a)("h4",{id:"api-\u652f\u6301\u5ea6-7"},"API \u652f\u6301\u5ea6"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.onListening"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))),Object(l.a)("h3",{id:"onmessage"},"onMessage"),Object(l.a)("p",null,"\u76d1\u542c\u6536\u5230\u6d88\u606f\u7684\u4e8b\u4ef6"),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.onMessage.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.a)("pre",null,Object(l.a)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OnMessageCallback) => void\n")),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"callback"),Object(l.a)("td",null,Object(l.a)("code",null,"OnMessageCallback")),Object(l.a)("td",null,"\u6536\u5230\u6d88\u606f\u7684\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.a)("h4",{id:"api-\u652f\u6301\u5ea6-8"},"API \u652f\u6301\u5ea6"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.onMessage"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))),Object(l.a)("h3",{id:"send"},"send"),Object(l.a)("p",null,"\u5411\u6307\u5b9a\u7684 IP \u548c port \u53d1\u9001\u6d88\u606f"),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.send.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.a)("pre",null,Object(l.a)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(option: SendOption) => void\n")),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"option"),Object(l.a)("td",null,Object(l.a)("code",null,"SendOption"))))),Object(l.a)("h4",{id:"api-\u652f\u6301\u5ea6-9"},"API \u652f\u6301\u5ea6"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.send"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))),Object(l.a)("h3",{id:"bind"},"bind"),Object(l.a)("p",null,"\u7ed1\u5b9a\u4e00\u4e2a\u7cfb\u7edf\u968f\u673a\u5206\u914d\u7684\u53ef\u7528\u7aef\u53e3\uff0c\u6216\u7ed1\u5b9a\u4e00\u4e2a\u6307\u5b9a\u7684\u7aef\u53e3\u53f7"),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.bind.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.a)("pre",null,Object(l.a)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(port: number) => number\n")),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"port"),Object(l.a)("td",null,Object(l.a)("code",null,"number")),Object(l.a)("td",null,"\u6307\u5b9a\u8981\u7ed1\u5b9a\u7684\u7aef\u53e3\u53f7")))),Object(l.a)("h4",{id:"api-\u652f\u6301\u5ea6-10"},"API \u652f\u6301\u5ea6"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.bind"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))),Object(l.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.a)("h3",{id:"offclosecallback"},"OffCloseCallback"),Object(l.a)("p",null,"\u5173\u95ed\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.a)("pre",null,Object(l.a)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"res"),Object(l.a)("td",null,Object(l.a)("code",null,"CallbackResult"))))),Object(l.a)("h3",{id:"offerrorcallback"},"OffErrorCallback"),Object(l.a)("p",null,"\u9519\u8bef\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.a)("pre",null,Object(l.a)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"res"),Object(l.a)("td",null,Object(l.a)("code",null,"CallbackResult"))))),Object(l.a)("h3",{id:"onclosecallback"},"OnCloseCallback"),Object(l.a)("p",null,"\u5173\u95ed\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.a)("pre",null,Object(l.a)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"res"),Object(l.a)("td",null,Object(l.a)("code",null,"CallbackResult"))))),Object(l.a)("h3",{id:"onerrorcallback"},"OnErrorCallback"),Object(l.a)("p",null,"\u9519\u8bef\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.a)("pre",null,Object(l.a)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(result: OnErrorCallbackResult) => void\n")),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"result"),Object(l.a)("td",null,Object(l.a)("code",null,"OnErrorCallbackResult"))))),Object(l.a)("h3",{id:"onmessagecallback"},"OnMessageCallback"),Object(l.a)("p",null,"\u6536\u5230\u6d88\u606f\u7684\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.a)("pre",null,Object(l.a)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(result: OnMessageCallbackResult) => void\n")),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"result"),Object(l.a)("td",null,Object(l.a)("code",null,"OnMessageCallbackResult"))))),Object(l.a)("h3",{id:"onerrorcallbackresult"},"OnErrorCallbackResult"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"errMsg"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",null,"\u9519\u8bef\u4fe1\u606f")))),Object(l.a)("h3",{id:"onmessagecallbackresult"},"OnMessageCallbackResult"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"message"),Object(l.a)("td",null,Object(l.a)("code",null,"ArrayBuffer")),Object(l.a)("td",null,"\u6536\u5230\u7684\u6d88\u606f")),Object(l.a)("tr",null,Object(l.a)("td",null,"remoteInfo"),Object(l.a)("td",null,Object(l.a)("code",null,"RemoteInfo")),Object(l.a)("td",null,"\u6d88\u606f\u6765\u6e90\u7684\u7ed3\u6784\u5316\u4fe1\u606f")))),Object(l.a)("h3",{id:"remoteinfo"},"RemoteInfo"),Object(l.a)("p",null,"\u6d88\u606f\u6765\u6e90\u7684\u7ed3\u6784\u5316\u4fe1\u606f"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"address"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",null,"\u53d1\u9001\u6d88\u606f\u7684 socket \u7684\u5730\u5740")),Object(l.a)("tr",null,Object(l.a)("td",null,"family"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",null,"\u4f7f\u7528\u7684\u534f\u8bae\u65cf\uff0c\u4e3a IPv4 \u6216\u8005 IPv6")),Object(l.a)("tr",null,Object(l.a)("td",null,"port"),Object(l.a)("td",null,Object(l.a)("code",null,"number")),Object(l.a)("td",null,"\u7aef\u53e3\u53f7")),Object(l.a)("tr",null,Object(l.a)("td",null,"size"),Object(l.a)("td",null,Object(l.a)("code",null,"number")),Object(l.a)("td",null,"message \u7684\u5927\u5c0f\uff0c\u5355\u4f4d\uff1a\u5b57\u8282")))),Object(l.a)("h3",{id:"sendoption"},"SendOption"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"data"),Object(l.a)("td",null,Object(l.a)("code",null,"string | ArrayBuffer")),Object(l.a)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.a)("td",null,"\u9700\u8981\u53d1\u9001\u7684\u5185\u5bb9")),Object(l.a)("tr",null,Object(l.a)("td",null,"complete"),Object(l.a)("td",null,Object(l.a)("code",null,"(res: CallbackResult) => void")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.a)("tr",null,Object(l.a)("td",null,"fail"),Object(l.a)("td",null,Object(l.a)("code",null,"(res: CallbackResult) => void")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.a)("tr",null,Object(l.a)("td",null,"success"),Object(l.a)("td",null,Object(l.a)("code",null,"(res: CallbackResult) => void")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.a)("h2",{id:"api-\u652f\u6301\u5ea6-11"},"API \u652f\u6301\u5ea6"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.a)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.close"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.offClose"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.offError"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.offListening"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.offMessage"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.onClose"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.onError"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.onListening"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.onMessage"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.send"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"UDPSocket.bind"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))))}o.isMDXComponent=!0},1735:function(e,t,a){"use strict";function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return c}))},1736:function(e,t,a){"use strict";function c(e,t){if(null==e)return{};var a,c,n={},l=Object.keys(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,"a",(function(){return c}))},1737:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var c=a(0),n=a.n(c);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function O(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},l=Object.keys(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var j=n.a.createContext({}),o=function(e){var t=n.a.useContext(j),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,c=e.mdxType,l=e.originalType,r=e.parentName,j=O(e,["components","mdxType","originalType","parentName"]),u=o(a),i=c,p=u["".concat(r,".").concat(i)]||u[i]||d[i]||l;return a?n.a.createElement(p,b(b({ref:t},j),{},{components:a})):n.a.createElement(p,b({ref:t},j))}));function i(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var l=a.length,r=new Array(l);r[0]=u;var b={};for(var O in t)hasOwnProperty.call(t,O)&&(b[O]=t[O]);b.originalType=e,b.mdxType="string"==typeof e?e:c,r[1]=b;for(var j=2;j<l;j++)r[j]=a[j];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);