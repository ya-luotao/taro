(window.webpackJsonp=window.webpackJsonp||[]).push([[790],{1735:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},1736:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},1737:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=u(a),d=n,j=s["".concat(l,".").concat(d)]||s[d]||O[d]||c;return a?r.a.createElement(j,o(o({ref:t},b),{},{components:a})):r.a.createElement(j,o({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<c;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1738:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},1739:function(e,t,a){"use strict";var n=a(0),r=a(1740);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1740:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},1741:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1739),l=a(1738),o=a(50),i=a.n(o),b=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.children,O=e.defaultValue,s=e.values,d=e.groupId,j=e.className,p=Object(c.a)(),m=p.tabGroupChoices,v=p.setTabGroupChoices,f=Object(n.useState)(O),g=f[0],h=f[1];if(null!=d){var w=m[d];null!=w&&w!==g&&s.some((function(e){return e.value===w}))&&h(w)}var y=function(e){h(e),null!=d&&v(d,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},j)},s.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},a)}))),t?Object(n.cloneElement)(o.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},o.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},1742:function(e,t,a){"use strict";var n=a(1735),r=a(0),c=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},854:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return s}));var n=a(1735),r=a(1736),c=(a(0),a(1737)),l=a(1741),o=a(1742),i={title:"WebView",sidebar_label:"WebView"},b={unversionedId:"components/open/web-view",id:"version-3.x/components/open/web-view",isDocsHomePage:!1,title:"WebView",description:"web-view \u7ec4\u4ef6\u662f\u4e00\u4e2a\u53ef\u4ee5\u7528\u6765\u627f\u8f7d\u7f51\u9875\u7684\u5bb9\u5668\uff0c\u4f1a\u81ea\u52a8\u94fa\u6ee1\u6574\u4e2a\u5c0f\u7a0b\u5e8f\u9875\u9762\u3002\u4e2a\u4eba\u7c7b\u578b\u4e0e\u6d77\u5916\u7c7b\u578b\u7684\u5c0f\u7a0b\u5e8f\u6682\u4e0d\u652f\u6301\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-3.x/components/open/web-view.md",slug:"/components/open/web-view",permalink:"/taro/docs/components/open/web-view",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/open/web-view.md",version:"3.x",sidebar_label:"WebView",sidebar:"version-3.x/components",previous:{title:"OpenData",permalink:"/taro/docs/components/open/open-data"},next:{title:"\u5176\u4ed6",permalink:"/taro/docs/components/open/others"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"WebViewProps",id:"webviewprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"onMessageEventDetail",id:"onmessageeventdetail",children:[]},{value:"onLoadEventDetail",id:"onloadeventdetail",children:[]},{value:"onErrorEventDetail",id:"onerroreventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],O={rightToc:u};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"web-view \u7ec4\u4ef6\u662f\u4e00\u4e2a\u53ef\u4ee5\u7528\u6765\u627f\u8f7d\u7f51\u9875\u7684\u5bb9\u5668\uff0c\u4f1a\u81ea\u52a8\u94fa\u6ee1\u6574\u4e2a\u5c0f\u7a0b\u5e8f\u9875\u9762\u3002\u4e2a\u4eba\u7c7b\u578b\u4e0e\u6d77\u5916\u7c7b\u578b\u7684\u5c0f\u7a0b\u5e8f\u6682\u4e0d\u652f\u6301\u4f7f\u7528\u3002"),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<WebViewProps>\n")),Object(c.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.a)(l.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(c.a)(o.a,{value:"React",mdxType:"TabItem"},Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n  handleMessage () {}\n  \n  render () {\n    return (\n      <WebView src='https://mp.weixin.qq.com/' onMessage={this.handleMessage} />\n    )\n  }\n}\n"))),Object(c.a)(o.a,{value:"Vue",mdxType:"TabItem"},Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<template>\n  <web-view src='https://mp.weixin.qq.com/' @message=\"handleMessage\" />\n</template>\n")))),Object(c.a)("h2",{id:"webviewprops"},"WebViewProps"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u5fc5\u586b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"src"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",null,"\u662f"),Object(c.a)("td",null,"webview \u6307\u5411\u7f51\u9875\u7684\u94fe\u63a5\u3002\u53ef\u6253\u5f00\u5173\u8054\u7684\u516c\u4f17\u53f7\u7684\u6587\u7ae0\uff0c\u5176\u5b83\u7f51\u9875\u9700\u767b\u5f55\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u914d\u7f6e\u4e1a\u52a1\u57df\u540d\u3002")),Object(c.a)("tr",null,Object(c.a)("td",null,"onMessage"),Object(c.a)("td",null,Object(c.a)("code",null,"BaseEventOrigFunction<onMessageEventDetail>")),Object(c.a)("td",null,"\u5426"),Object(c.a)("td",null,"\u7f51\u9875\u5411\u5c0f\u7a0b\u5e8f postMessage \u65f6\uff0c\u4f1a\u5728\u7279\u5b9a\u65f6\u673a\uff08\u5c0f\u7a0b\u5e8f\u540e\u9000\u3001\u7ec4\u4ef6\u9500\u6bc1\u3001\u5206\u4eab\uff09\u89e6\u53d1\u5e76\u6536\u5230\u6d88\u606f\u3002e.detail = ","{ data }")),Object(c.a)("tr",null,Object(c.a)("td",null,"onLoad"),Object(c.a)("td",null,Object(c.a)("code",null,"BaseEventOrigFunction<onLoadEventDetail>")),Object(c.a)("td",null,"\u5426"),Object(c.a)("td",null,"\u7f51\u9875\u52a0\u8f7d\u6210\u529f\u65f6\u5019\u89e6\u53d1\u6b64\u4e8b\u4ef6\u3002e.detail = ","{ src }")),Object(c.a)("tr",null,Object(c.a)("td",null,"onError"),Object(c.a)("td",null,Object(c.a)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),Object(c.a)("td",null,"\u5426"),Object(c.a)("td",null,"\u7f51\u9875\u52a0\u8f7d\u5931\u8d25\u7684\u65f6\u5019\u89e6\u53d1\u6b64\u4e8b\u4ef6\u3002e.detail = ","{ src }")))),Object(c.a)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"WebViewProps.src"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"WebViewProps.onMessage"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"WebViewProps.onLoad"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"WebViewProps.onError"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(c.a)("h3",{id:"onmessageeventdetail"},"onMessageEventDetail"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"data"),Object(c.a)("td",null,Object(c.a)("code",null,"any[]")),Object(c.a)("td",null,"\u6d88\u606f\u6570\u636e\uff0c\u662f\u591a\u6b21 postMessage \u7684\u53c2\u6570\u7ec4\u6210\u7684\u6570\u7ec4")))),Object(c.a)("h3",{id:"onloadeventdetail"},"onLoadEventDetail"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"src"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",null,"\u7f51\u9875\u94fe\u63a5")))),Object(c.a)("h3",{id:"onerroreventdetail"},"onErrorEventDetail"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"src"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",null,"\u7f51\u9875\u94fe\u63a5")))),Object(c.a)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"WebView"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);