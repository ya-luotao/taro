(window.webpackJsonp=window.webpackJsonp||[]).push([[976],{1040:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return O})),a.d(t,"metadata",(function(){return j})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(1735),r=a(1736),c=(a(0),a(1737)),l=a(1741),b=a(1742),O={title:"Progress",sidebar_label:"Progress"},j={unversionedId:"components/base/progress",id:"version-3.x/components/base/progress",isDocsHomePage:!1,title:"Progress",description:"\u8fdb\u5ea6\u6761\u3002\u7ec4\u4ef6\u5c5e\u6027\u7684\u957f\u5ea6\u5355\u4f4d\u9ed8\u8ba4\u4e3a px",source:"@site/versioned_docs/version-3.x/components/base/progress.md",slug:"/components/base/progress",permalink:"/taro/docs/components/base/progress",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/base/progress.md",version:"3.x",sidebar_label:"Progress",sidebar:"version-3.x/components",previous:{title:"Text",permalink:"/taro/docs/components/base/text"},next:{title:"RichText",permalink:"/taro/docs/components/base/rich-text"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"ProgressProps",id:"progressprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],i={rightToc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"\u8fdb\u5ea6\u6761\u3002\u7ec4\u4ef6\u5c5e\u6027\u7684\u957f\u5ea6\u5355\u4f4d\u9ed8\u8ba4\u4e3a px"),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/progress.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<ProgressProps>\n")),Object(c.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.a)(l.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(c.a)(b.a,{value:"React",mdxType:"TabItem"},Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Progress percent={20} showInfo strokeWidth={2} />\n        <Progress percent={40} strokeWidth={2} active />\n        <Progress percent={60}  strokeWidth={2} active />\n        <Progress percent={80}  strokeWidth={2} active activeColor='blue' />\n      </View>\n    )\n  }\n}\n"))),Object(c.a)(b.a,{value:"Vue",mdxType:"TabItem"},Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="components-page">\n    <progress percent="20" stroke-width="2" show-info="true"  />\n    <progress percent="40" stroke-width="2" active="true" />\n    <progress percent="60" stroke-width="2" active="true" />\n    <progress percent="80" stroke-width="2" active="true" activeColor="blue" />\n  </view>\n</template>\n')))),Object(c.a)("h2",{id:"progressprops"},"ProgressProps"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"percent"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u767e\u5206\u6bd4 0~100")),Object(c.a)("tr",null,Object(c.a)("td",null,"showInfo"),Object(c.a)("td",null,Object(c.a)("code",null,"boolean")),Object(c.a)("td",{style:{textAlign:"center"}},Object(c.a)("code",null,"false")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u5728\u8fdb\u5ea6\u6761\u53f3\u4fa7\u663e\u793a\u767e\u5206\u6bd4")),Object(c.a)("tr",null,Object(c.a)("td",null,"borderRadius"),Object(c.a)("td",null,Object(c.a)("code",null,"string | number")),Object(c.a)("td",{style:{textAlign:"center"}},Object(c.a)("code",null,"0")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u5706\u89d2\u5927\u5c0f")),Object(c.a)("tr",null,Object(c.a)("td",null,"fontSize"),Object(c.a)("td",null,Object(c.a)("code",null,"string | number")),Object(c.a)("td",{style:{textAlign:"center"}},Object(c.a)("code",null,"16")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u53f3\u4fa7\u767e\u5206\u6bd4\u5b57\u4f53\u5927\u5c0f")),Object(c.a)("tr",null,Object(c.a)("td",null,"strokeWidth"),Object(c.a)("td",null,Object(c.a)("code",null,"string | number")),Object(c.a)("td",{style:{textAlign:"center"}},Object(c.a)("code",null,"6")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u8fdb\u5ea6\u6761\u7ebf\u7684\u5bbd\u5ea6")),Object(c.a)("tr",null,Object(c.a)("td",null,"color"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",{style:{textAlign:"center"}},Object(c.a)("code",null,'"#09BB07"')),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u8fdb\u5ea6\u6761\u989c\u8272 (\u8bf7\u4f7f\u7528 activeColor)")),Object(c.a)("tr",null,Object(c.a)("td",null,"activeColor"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",{style:{textAlign:"center"}},Object(c.a)("code",null,'"#09BB07"')),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u5df2\u9009\u62e9\u7684\u8fdb\u5ea6\u6761\u7684\u989c\u8272")),Object(c.a)("tr",null,Object(c.a)("td",null,"backgroundColor"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",{style:{textAlign:"center"}},Object(c.a)("code",null,'"#EBEBEB"')),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u672a\u9009\u62e9\u7684\u8fdb\u5ea6\u6761\u7684\u989c\u8272")),Object(c.a)("tr",null,Object(c.a)("td",null,"active"),Object(c.a)("td",null,Object(c.a)("code",null,"boolean")),Object(c.a)("td",{style:{textAlign:"center"}},Object(c.a)("code",null,"false")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u8fdb\u5ea6\u6761\u4ece\u5de6\u5f80\u53f3\u7684\u52a8\u753b")),Object(c.a)("tr",null,Object(c.a)("td",null,"activeMode"),Object(c.a)("td",null,Object(c.a)("code",null,'"backwards" | "forwards"')),Object(c.a)("td",{style:{textAlign:"center"}},Object(c.a)("code",null,"backwards")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"backwards: \u52a8\u753b\u4ece\u5934\u64ad",Object(c.a)("br",null),Object(c.a)("br",null),"forwards: \u52a8\u753b\u4ece\u4e0a\u6b21\u7ed3\u675f\u70b9\u63a5\u7740\u64ad")),Object(c.a)("tr",null,Object(c.a)("td",null,"duration"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}},Object(c.a)("code",null,"30")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u8fdb\u5ea6\u589e\u52a0 1% \u6240\u9700\u6beb\u79d2\u6570")),Object(c.a)("tr",null,Object(c.a)("td",null,"onActiveEnd"),Object(c.a)("td",null,Object(c.a)("code",null,"BaseEventOrigFunction<any>")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u52a8\u753b\u5b8c\u6210\u4e8b\u4ef6")))),Object(c.a)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ProgressProps.percent"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ProgressProps.showInfo"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ProgressProps.borderRadius"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ProgressProps.fontSize"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ProgressProps.strokeWidth"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ProgressProps.color"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ProgressProps.activeColor"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ProgressProps.backgroundColor"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ProgressProps.active"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ProgressProps.activeMode"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ProgressProps.duration"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ProgressProps.onActiveEnd"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(c.a)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Progress"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0},1735:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},1736:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},1737:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function O(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var j=r.a.createContext({}),o=function(e){var t=r.a.useContext(j),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,j=O(e,["components","mdxType","originalType","parentName"]),d=o(a),s=n,p=d["".concat(l,".").concat(s)]||d[s]||i[s]||c;return a?r.a.createElement(p,b(b({ref:t},j),{},{components:a})):r.a.createElement(p,b({ref:t},j))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=d;var b={};for(var O in t)hasOwnProperty.call(t,O)&&(b[O]=t[O]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var j=2;j<c;j++)l[j]=a[j];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1738:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},1739:function(e,t,a){"use strict";var n=a(0),r=a(1740);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1740:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},1741:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1739),l=a(1738),b=a(50),O=a.n(b),j=37,o=39;t.a=function(e){var t=e.lazy,a=e.block,b=e.children,i=e.defaultValue,d=e.values,s=e.groupId,p=e.className,u=Object(c.a)(),m=u.tabGroupChoices,g=u.setTabGroupChoices,N=Object(n.useState)(i),f=N[0],y=N[1];if(null!=s){var v=m[s];null!=v&&v!==f&&d.some((function(e){return e.value===v}))&&y(v)}var h=function(e){y(e),null!=s&&g(s,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},p)},d.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(l.a)("tabs__item",O.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case o:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case j:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return h(t)},onClick:function(){h(t)}},a)}))),t?Object(n.cloneElement)(b.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},1742:function(e,t,a){"use strict";var n=a(1735),r=a(0),c=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);