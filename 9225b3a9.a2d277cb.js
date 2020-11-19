(window.webpackJsonp=window.webpackJsonp||[]).push([[974],{1038:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(1735),o=t(1736),i=(t(0),t(1737)),a={title:"\u7f16\u8bd1\u914d\u7f6e"},c={unversionedId:"config",id:"config",isDocsHomePage:!1,title:"\u7f16\u8bd1\u914d\u7f6e",description:"\u7f16\u8bd1\u914d\u7f6e\u5b58\u653e\u4e8e\u9879\u76ee\u6839\u76ee\u5f55\u4e0b config \u76ee\u5f55\u4e2d\uff0c\u5305\u542b\u4e09\u4e2a\u6587\u4ef6",source:"@site/docs/config.md",slug:"/config",permalink:"/taro/docs/next/config",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/config.md",version:"current",sidebar:"docs",previous:{title:"\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1",permalink:"/taro/docs/next/miniprogram-plugin"},next:{title:"\u7f16\u8bd1\u914d\u7f6e\u8be6\u60c5",permalink:"/taro/docs/next/config-detail"}},u=[{value:"index.js \u2014\u2014 \u901a\u7528\u914d\u7f6e",id:"indexjs--\u901a\u7528\u914d\u7f6e",children:[]}],p={rightToc:u};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("p",null,"\u7f16\u8bd1\u914d\u7f6e\u5b58\u653e\u4e8e\u9879\u76ee\u6839\u76ee\u5f55\u4e0b ",Object(i.a)("inlineCode",{parentName:"p"},"config")," \u76ee\u5f55\u4e2d\uff0c\u5305\u542b\u4e09\u4e2a\u6587\u4ef6"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"index.js")," \u662f\u901a\u7528\u914d\u7f6e"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"dev.js")," \u662f\u9879\u76ee\u9884\u89c8\u65f6\u7684\u914d\u7f6e"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"prod.js")," \u662f\u9879\u76ee\u6253\u5305\u65f6\u7684\u914d\u7f6e")),Object(i.a)("h2",{id:"indexjs--\u901a\u7528\u914d\u7f6e"},"index.js \u2014\u2014 \u901a\u7528\u914d\u7f6e"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const config = {\n  // \u9879\u76ee\u540d\u79f0\n  projectName: 'Awesome Next',\n  // \u9879\u76ee\u521b\u5efa\u65e5\u671f\n  date: '2020-6-2',\n  // \u8bbe\u8ba1\u7a3f\u5c3a\u5bf8\n  designWidth: 750,\n  // \u8bbe\u8ba1\u7a3f\u5c3a\u5bf8\u6362\u7b97\u89c4\u5219\n  deviceRatio: {\n    640: 2.34 / 2,\n    750: 1,\n    828: 1.81 / 2\n  },\n  // \u9879\u76ee\u6e90\u7801\u76ee\u5f55\n  sourceRoot: 'src',\n  // \u9879\u76ee\u4ea7\u51fa\u76ee\u5f55\n  outputRoot: 'dist',\n  // \u7f16\u8bd1\u63d2\u4ef6\u914d\u7f6e\n  plugins: [],\n  // \u5168\u5c40\u53d8\u91cf\u8bbe\u7f6e\n  defineConstants: {},\n  // \u6587\u4ef6 copy \u914d\u7f6e\n  copy: {\n    patterns: [\n    ],\n    options: {\n    }\n  },\n  // \u6846\u67b6\uff0creact\uff0cnerv\uff0cvue, vue3 \u7b49\n  framework: 'react',\n  // \u5c0f\u7a0b\u5e8f\u7aef\u4e13\u7528\u914d\u7f6e\n  mini: {\n    postcss: {\n      autoprefixer: {\n        enable: true\n      },\n      // \u5c0f\u7a0b\u5e8f\u7aef\u6837\u5f0f\u5f15\u7528\u672c\u5730\u8d44\u6e90\u5185\u8054\u914d\u7f6e\n      url: {\n        enable: true,\n        config: {\n          limit: 10240\n        }\n      }\n    },\n    // \u81ea\u5b9a\u4e49 Webpack \u914d\u7f6e\n    webpackChain: {},\n  },\n  // H5 \u7aef\u4e13\u7528\u914d\u7f6e\n  h5: {\n    publicPath: '/',\n    staticDirectory: 'static',\n    postcss: {\n      autoprefixer: {\n        enable: true\n      }\n    },\n    // \u81ea\u5b9a\u4e49 Webpack \u914d\u7f6e\n    webpackChain: {},\n    devServer: {}\n  }\n};\n\nmodule.exports = function(merge) {\n  if (process.env.NODE_ENV === 'development') {\n    return merge({}, config, require('./dev'));\n  }\n  return merge({}, config, require('./prod'));\n};\n")))}l.isMDXComponent=!0},1735:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},1736:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,"a",(function(){return r}))},1737:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(t),d=r,m=f["".concat(a,".").concat(d)]||f[d]||s[d]||i;return t?o.a.createElement(m,c(c({ref:n},p),{},{components:t})):o.a.createElement(m,c({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);