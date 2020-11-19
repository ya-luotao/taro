(window.webpackJsonp=window.webpackJsonp||[]).push([[673],{1735:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},1736:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}a.d(t,"a",(function(){return n}))},1737:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var O=c.a.createContext({}),j=function(e){var t=c.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},o={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),p=j(a),d=n,s=p["".concat(l,".").concat(d)]||p[d]||o[d]||r;return a?c.a.createElement(s,b(b({ref:t},O),{},{components:a})):c.a.createElement(s,b({ref:t},O))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=p;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var O=2;O<r;O++)l[O]=a[O];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},737:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var n=a(1735),c=a(1736),r=(a(0),a(1737)),l={title:"Switch",sidebar_label:"Switch"},b={unversionedId:"components/forms/switch",id:"version-2.x/components/forms/switch",isDocsHomePage:!1,title:"Switch",description:"\u5f00\u5173\u9009\u62e9\u5668",source:"@site/versioned_docs/version-2.x/components/forms/switch.md",slug:"/components/forms/switch",permalink:"/taro/docs/2.x/components/forms/switch",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/components/forms/switch.md",version:"2.x",sidebar_label:"Switch",sidebar:"version-2.x/components",previous:{title:"Slider",permalink:"/taro/docs/2.x/components/forms/slider"},next:{title:"Textarea",permalink:"/taro/docs/2.x/components/forms/textarea"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"SwitchProps",id:"switchprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"onChangeEventDetail",id:"onchangeeventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],O={rightToc:i};function j(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"\u5f00\u5173\u9009\u62e9\u5668"),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"},Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/switch.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<SwitchProps>\n")),Object(r.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>\u9ed8\u8ba4\u6837\u5f0f</Text>\n        <Switch checked/>\n        <Switch/>\n        <Text>\u63a8\u8350\u5c55\u793a\u6837\u5f0f</Text>\n        <Switch checked/>\n        <Switch/>\n      </View>\n    )\n  }\n}\n")),Object(r.a)("h2",{id:"switchprops"},"SwitchProps"),Object(r.a)("table",null,Object(r.a)("thead",null,Object(r.a)("tr",null,Object(r.a)("th",null,"\u53c2\u6570"),Object(r.a)("th",null,"\u7c7b\u578b"),Object(r.a)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(r.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.a)("th",null,"\u8bf4\u660e"))),Object(r.a)("tbody",null,Object(r.a)("tr",null,Object(r.a)("td",null,"checked"),Object(r.a)("td",null,Object(r.a)("code",null,"boolean")),Object(r.a)("td",{style:{textAlign:"center"}},Object(r.a)("code",null,"false")),Object(r.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.a)("td",null,"\u662f\u5426\u9009\u4e2d")),Object(r.a)("tr",null,Object(r.a)("td",null,"disabled"),Object(r.a)("td",null,Object(r.a)("code",null,"boolean")),Object(r.a)("td",{style:{textAlign:"center"}},Object(r.a)("code",null,"false")),Object(r.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.a)("td",null,"\u662f\u5426\u7981\u7528")),Object(r.a)("tr",null,Object(r.a)("td",null,"type"),Object(r.a)("td",null,Object(r.a)("code",null,'"switch" | "checkbox"')),Object(r.a)("td",{style:{textAlign:"center"}},Object(r.a)("code",null,'"switch"')),Object(r.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.a)("td",null,"\u6837\u5f0f\uff0c\u6709\u6548\u503c\uff1aswitch, checkbox")),Object(r.a)("tr",null,Object(r.a)("td",null,"color"),Object(r.a)("td",null,Object(r.a)("code",null,"string")),Object(r.a)("td",{style:{textAlign:"center"}},Object(r.a)("code",null,'"#04BE02"')),Object(r.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.a)("td",null,"switch \u7684\u989c\u8272\uff0c\u540c css \u7684 color")),Object(r.a)("tr",null,Object(r.a)("td",null,"onChange"),Object(r.a)("td",null,Object(r.a)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),Object(r.a)("td",{style:{textAlign:"center"}}),Object(r.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.a)("td",null,"checked \u6539\u53d8\u65f6\u89e6\u53d1 change \u4e8b\u4ef6")))),Object(r.a)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"SwitchProps.checked"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"SwitchProps.disabled"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"SwitchProps.type"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"SwitchProps.color"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"SwitchProps.onChange"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(r.a)("h3",{id:"onchangeeventdetail"},"onChangeEventDetail"),Object(r.a)("table",null,Object(r.a)("thead",null,Object(r.a)("tr",null,Object(r.a)("th",null,"\u53c2\u6570"),Object(r.a)("th",null,"\u7c7b\u578b"))),Object(r.a)("tbody",null,Object(r.a)("tr",null,Object(r.a)("td",null,"value"),Object(r.a)("td",null,Object(r.a)("code",null,"boolean"))))),Object(r.a)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Switch"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}j.isMDXComponent=!0}}]);