(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1735:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},1736:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},1737:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||a;return n?o.a.createElement(m,i(i({ref:t},s),{},{components:n})):o.a.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1735),o=n(1736),a=(n(0),n(1737)),c={title:"\u5c0f\u7a0b\u5e8f\u539f\u751f\u4f5c\u7528\u57df\u83b7\u53d6"},i={unversionedId:"relations",id:"relations",isDocsHomePage:!1,title:"\u5c0f\u7a0b\u5e8f\u539f\u751f\u4f5c\u7528\u57df\u83b7\u53d6",description:"\u5728 Taro \u7684\u9875\u9762\u548c\u7ec4\u4ef6\u7c7b\u4e2d\uff0cthis \u6307\u5411\u7684\u662f Taro \u9875\u9762\u6216\u7ec4\u4ef6\u7684\u5b9e\u4f8b\uff0c\u4f8b\u5982",source:"@site/docs/relations.md",slug:"/relations",permalink:"/taro/docs/next/relations",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/relations.md",version:"current"},p=[],s={rightToc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("p",null,"\u5728 Taro \u7684\u9875\u9762\u548c\u7ec4\u4ef6\u7c7b\u4e2d\uff0c",Object(a.a)("inlineCode",{parentName:"p"},"this")," \u6307\u5411\u7684\u662f Taro \u9875\u9762\u6216\u7ec4\u4ef6\u7684\u5b9e\u4f8b\uff0c\u4f8b\u5982"),Object(a.a)("pre",null,Object(a.a)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\nimport { View } from '@tarojs/components'\n\nexport default class Menu extends Component {\n  static defaultProps = {\n    data: []\n  }\n\n  constructor(props) {\n    super(props)\n    this.state = {\n      checked: props.checked\n    }\n  }\n\n  componentWillMount () {\n    console.log(this) // this -> \u7ec4\u4ef6 Menu \u7684\u5b9e\u4f8b\n  }\n\n  render () {\n    return <View />\n  }\n}\n")),Object(a.a)("p",null,"\u4f46\u662f\u4e00\u822c\u6211\u4eec\u9700\u8981\u83b7\u53d6 Taro \u7684\u9875\u9762\u548c\u7ec4\u4ef6\u6240\u5bf9\u5e94\u7684\u5c0f\u7a0b\u5e8f\u539f\u751f\u9875\u9762\u548c\u7ec4\u4ef6\u7684\u5b9e\u4f8b\uff0c\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",Object(a.a)("inlineCode",{parentName:"p"},"this.$scope")," \u5c31\u80fd\u8bbf\u95ee\u5230\u5b83\u4eec\u3002"),Object(a.a)("p",null,"\u6240\u4ee5\u5f53\u8c03\u7528\u4e00\u4e9b API \u9700\u8981\u4f20\u5165\u5c0f\u7a0b\u5e8f\u7684\u9875\u9762\u6216\u8005\u7ec4\u4ef6\u5b9e\u4f8b\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f20\u5165 ",Object(a.a)("inlineCode",{parentName:"p"},"this.$scope"),"\uff0c\u4f8b\u5982 ",Object(a.a)("inlineCode",{parentName:"p"},"Taro.createCanvasContext(canvasId, this)")," \u8fd9\u4e2a API\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5c31\u662f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5b9e\u4f8b ",Object(a.a)("inlineCode",{parentName:"p"},"this"),"\uff0c\u5728 Taro \u4e2d\u5c31\u53ef\u4ee5\u5982\u4e0b\u4f7f\u7528"),Object(a.a)("pre",null,Object(a.a)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"Taro.createCanvasContext(canvasId, this.$scope)\n")))}u.isMDXComponent=!0}}]);