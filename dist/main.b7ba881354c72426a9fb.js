(()=>{var i,a,d,u,n,r,o={81962:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var r=n(85893),t=n(82932),o=n(31929),i=(n(67294),n(80150)),a=n(73727),s=n(68207),l=n(48408),c=n(62858),d=n(82925);const u=e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.zt,{store:s.h,action:s.N,children:(0,r.jsx)(o.default,{locale:d.Z,children:(0,r.jsxs)(a.VK,{children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(c.default,{children:e.children})]})})})})},62858:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>function(e){return(0,r.jsx)("section",{className:o.mainOuter,children:(0,r.jsxs)("section",{className:o.flexContainer,children:[(0,r.jsx)(i.default,{}),(0,r.jsx)("section",{className:o.mainContainerInner,children:(0,r.jsx)(a.rs,{children:e.children})})]})})}});var r=n(85893);n(67294);const o={mainOuter:"index-mainOuter-1EGlv",flexContainer:"index-flexContainer-15x7Z",mainContainerInner:"index-mainContainerInner-2vAHt"};var i=n(2551),a=n(5977)},2551:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});n(54214);var r=n(12386),o=n(85893);n(67294);const i={sideBarOuter:"index-sideBarOuter-3KzGe"};var a=n(5977),t=n(59271),n=n(33065);const s=[{key:"/",icon:t.Z,menuName:"Home"},{key:"/dashboard",icon:n.Z,menuName:"dashboard"}];const l=function(e){const t=(0,a.k6)();return(0,o.jsx)("aside",{className:i.sideBarOuter,children:(0,o.jsx)(r.default,{onClick:e=>{t.push(e.key)},defaultSelectedKeys:["/"],children:s.map(e=>(0,o.jsx)(r.default.Item,{icon:(0,o.jsx)(e.icon,{}),children:e.menuName},e.key))})})}},48408:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>function(){const[e,t]=(0,i.useState)("en_US");return(0,i.useEffect)(()=>{var e;e=(e=(0,l.getCurrentLocalByHash)())||"en_US",t(e)},[]),(0,r.jsx)("header",{className:a.tobBar,children:(0,r.jsxs)("div",{className:a.headerInner,children:[(0,r.jsx)("img",{src:s,alt:"shein logo",className:a.logoStyle,onClick:()=>{location.href="/"}}),(0,r.jsxs)(o.default,{className:a.localSelectStyle,value:e,onChange:e=>{t(e)},children:[(0,r.jsx)(c,{value:"en_US",children:"ENGLISH"}),(0,r.jsx)(c,{value:"zh_CN",children:"简体中文"}),(0,r.jsx)(c,{value:"zh_TW",children:"繁体中文"})]})]})})}});var r=n(85893),o=(n(35797),n(64749)),i=n(67294);const a={tobBar:"index-tobBar-3lkwP",headerInner:"index-headerInner-uU1cR",logoStyle:"index-logoStyle-26Hiz",localSelectStyle:"index-localSelectStyle-3ckmJ"},s=n.p+"images/logo_ed3be53a51dc743fe57e32f5d60688e2.png";var l=n(64759);const{Option:c}=o.default},34212:(e,t,n)=>{"use strict";n.r(t),n.d(t,{HOME_STATE_NS:()=>r,HOME_ACTION_NS:()=>o});const r="home",o="home"},49617:(e,t,n)=>{"use strict";n.r(t);var r=n(85893),t=(n(67294),n(73935)),o=n(5977),i=n(27207),a=n(81962);t.render((0,r.jsx)(()=>(0,r.jsx)(a.default,{children:i.default.map(e=>(0,r.jsx)(o.AW,{exact:e.exact,path:e.path,component:e.component},e.key))}),{}),document.getElementById("root"))},27207:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var t=n(63999),a=n(85893),s=n(67294);function r(e){console.log("son1 rendered");const t=(0,s.useMemo)(()=>e.money,[e.money]);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{children:["s1 money: ",t]}),(0,a.jsxs)("p",{children:["total money: ",(console.log("total function is called"),t+1e3)]}),(0,a.jsxs)("p",{children:["switch: ",e.switch]})]})}const l=(0,s.memo)(r);function c(e){return(0,a.jsxs)("div",{children:["s2 money: ",e.money]})}function o(){const[e,t]=(0,s.useState)(0),[n,r]=(0,s.useState)(0),[o,i]=(0,s.useState)("close");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{onClick:()=>t(e+100),children:"s1 +100"}),(0,a.jsx)("button",{onClick:()=>"close"===o?i("open"):i("close"),children:"s1 Switch"})]}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{onClick:()=>r(n+100),children:"s2 +100"})}),(0,a.jsx)(l,{money:e,switch:o}),(0,a.jsx)(c,{money:n})]})}const i=[{path:"/",component:t.Home,exact:!0,key:"/"},{path:"/home",component:t.Home,exact:!0,key:"/home"},{path:"/dashboard",component:t.Dashboard,exact:!0,key:"dashboard"},{path:"/hooks",component:function(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{children:"Hooks"}),(0,a.jsx)(o,{})]})},exact:!0,key:"hooks"},{path:"*",component:t.NotFound,key:"notFound"}]},63999:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Home:()=>a,NotFound:()=>s,Dashboard:()=>l});var t=n(9405),r=n(89552),t=n(68356),o=n.n(t);function i(e){return o()({loader:()=>n(16679)(`./${e}.tsx`),loading:r.default})}const a=i("pages/Home/index"),s=i("pages/NotFound/index"),l=i("pages/Dashboard/index")},68207:(e,t,n)=>{"use strict";n.d(t,{N:()=>b,h:()=>x});var o,r,i,a,s,l,c,d=n(68949);let u=(r=(t=class{constructor(){var e,t,n,r;t="todoList",r=e=this,(n=o)&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0}),(0,d.ky)(this)}}).prototype,i="todoList",a=[d.LO],s={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return["111","222"]}},c={},Object.keys(s).forEach(function(e){c[e]=s[e]}),c.enumerable=!!c.enumerable,c.configurable=!!c.configurable,("value"in c||c.initializer)&&(c.writable=!0),c=a.slice().reverse().reduce(function(e,t){return t(r,i,e)||e},c),l&&void 0!==c.initializer&&(c.value=c.initializer?c.initializer.call(l):void 0,c.initializer=void 0),void 0===c.initializer&&(Object.defineProperty(r,i,c),c=null),o=c,t);var t=n(9669),h=n.n(t);const p=(e,t,n)=>function(e,t,n={},r={}){let o={headers:{"content-type":" application/json"},method:t,url:e};return"get"===t?o.params=n:o.data=n,h()(Object.assign(o,r)).then(e=>e.data)}(e,t,n);function m(n,r,e,t,o){var i={};return Object.keys(t).forEach(function(e){i[e]=t[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=e.slice().reverse().reduce(function(e,t){return t(n,r,e)||e},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(n,r,i),i=null),i}let f=(m((t=class extends class{constructor(){this.todoList=void 0}}{constructor(){super(),(this.todoList=void 0,d.ky)(this)}addItem(e){this.todoList.push({name:e,key:Math.random()})}deleteItem(t){var e=this.todoList.findIndex(e=>e.key===t);this.todoList.splice(e,1)}reset(){this.todoList=[]}async init(){var e=await p("/api/getToDoList","get");0===e.code&&(this.todoList=e.data)}}).prototype,"addItem",[d.aD],Object.getOwnPropertyDescriptor(t.prototype,"addItem"),t.prototype),m(t.prototype,"deleteItem",[d.aD],Object.getOwnPropertyDescriptor(t.prototype,"deleteItem"),t.prototype),m(t.prototype,"reset",[d.aD],Object.getOwnPropertyDescriptor(t.prototype,"reset"),t.prototype),m(t.prototype,"init",[d.aD],Object.getOwnPropertyDescriptor(t.prototype,"init"),t.prototype),t);t=n(34212),n=n(97539);let x={global:new class{constructor(){(0,d.ky)(this)}}};x=(0,n.registSubStore)(x,t.HOME_STATE_NS,new u);let b={global:new class{constructor(){(0,d.ky)(this)}}};b=(0,n.registSubAction)(b,t.HOME_ACTION_NS,new f)},64759:(e,t,n)=>{"use strict";n.r(t),n.d(t,{getCurrentLocalByHash:()=>r});const r=()=>(e=>{const t=window.location.hash.slice(1);var n;for(n of t.split("&")){var[r,o]=n.split("=");if(r===e)return o}return null})("local")},97539:(e,t,n)=>{"use strict";n.r(t),n.d(t,{registSubStore:()=>r,registSubAction:()=>o});const r=(e,t,n)=>(e[t]=n,e),o=(e,t,n)=>(e[t]=n,e)},16679:(e,t,r)=>{var o={"./components/Container/index.tsx":[81962,9],"./components/Main/index.tsx":[62858,9],"./components/SideBar/index.tsx":[2551,9],"./components/TopBar/index.tsx":[48408,9],"./constant/mobxConstant.tsx":[34212,9],"./index.tsx":[49617,9],"./pages/Dashboard/index.tsx":[67421,9,421],"./pages/Home/index.tsx":[92127,9,626,127],"./pages/NotFound/index.tsx":[12663,9,663],"./routes/index.tsx":[27207,9],"./routes/lazyComponents.tsx":[63999,9],"./utils/hooks.tsx":[26943,7,943],"./utils/local.tsx":[64759,9],"./utils/registStore.tsx":[97539,9],"./withHoc/withStore.tsx":[25227,9,227]};function n(t){if(!r.o(o,t))return Promise.resolve().then(()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=o[t],n=e[0];return Promise.all(e.slice(2).map(r.e)).then(()=>r.t(n,16|e[1]))}n.keys=()=>Object.keys(o),n.id=16679,e.exports=n}},s={};function p(e){if(s[e])return s[e].exports;var t=s[e]={id:e,loaded:!1,exports:{}};return o[e](t,t.exports,p),t.loaded=!0,t.exports}p.m=o,p.x=e=>{},p.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return p.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,p.t=function(t,e){if(1&e&&(t=this(t)),8&e)return t;if("object"==typeof t&&t){if(4&e&&t.__esModule)return t;if(16&e&&"function"==typeof t.then)return t}var n=Object.create(null);p.r(n);var r={};i=i||[null,a({}),a([]),a(a)];for(var o=2&e&&t;"object"==typeof o&&!~i.indexOf(o);o=a(o))Object.getOwnPropertyNames(o).forEach(e=>r[e]=()=>t[e]);return r.default=()=>t,p.d(n,r),n},p.d=(e,t)=>{for(var n in t)p.o(t,n)&&!p.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},p.f={},p.e=n=>Promise.all(Object.keys(p.f).reduce((e,t)=>(p.f[t](n,e),e),[])),p.u=e=>e+"."+{127:"bc5670830bfbc67af734",227:"1e1844db3c538f29fbb8",421:"e90b0b539249f8ba0b41",626:"167796d13d30915d72d4",663:"9e7b78a6867bb655cbb6",943:"b7cc4413e365fd4ab1cb"}[e]+".chunk.js",p.miniCssF=e=>803===e?"803.css":179===e?"main.css":e+".chunk.css",p.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),p.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),d={},u="hm-common-template:",p.l=(r,e,t,n)=>{if(d[r])d[r].push(e);else{var o,i;if(void 0!==t)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var l=a[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==u+t){o=l;break}}o||(i=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,p.nc&&o.setAttribute("nonce",p.nc),o.setAttribute("data-webpack",u+t),o.src=r),d[r]=[e];var e=(e,t)=>{o.onerror=o.onload=null,clearTimeout(c);var n=d[r];if(delete d[r],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach(e=>e(t)),e)return e(t)},c=setTimeout(e.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=e.bind(null,o.onerror),o.onload=e.bind(null,o.onload),i&&document.head.appendChild(o)}},p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),p.p="/",n=o=>new Promise((e,t)=>{var n=p.miniCssF(o),r=p.p+n;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(i=n[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}for(var i,a=document.getElementsByTagName("style"),r=0;r<a.length;r++)if((o=(i=a[r]).getAttribute("data-href"))===e||o===t)return i})(n,r))return e();((r,o,i,a)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";s.onerror=s.onload=e=>{var t,n;s.onerror=s.onload=null,"load"===e.type?i():(t=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.href||o,(e=new Error("Loading CSS chunk "+r+" failed.\n("+n+")")).code="CSS_CHUNK_LOAD_FAILED",e.type=t,e.request=n,s.parentNode.removeChild(s),a(e))},s.href=o,document.head.appendChild(s)})(o,r,e,t)}),r={179:0},p.f.miniCss=(t,e)=>{r[t]?e.push(r[t]):0!==r[t]&&{127:1,626:1,663:1}[t]&&e.push(r[t]=n(t).then(()=>{r[t]=0},e=>{throw delete r[t],e}))},(()=>{var d={179:0},u=[[49617,803]];p.f.j=(n,e)=>{var t,r,o=p.o(d,n)?d[n]:void 0;0!==o&&(o?e.push(o[2]):(t=new Promise((e,t)=>{o=d[n]=[e,t]}),e.push(o[2]=t),t=p.p+p.u(n),r=new Error,p.l(t,e=>{var t;p.o(d,n)&&(0!==(o=d[n])&&(d[n]=void 0),o&&(t=e&&("load"===e.type?"missing":e.type),e=e&&e.target&&e.target.src,r.message="Loading chunk "+n+" failed.\n("+t+": "+e+")",r.name="ChunkLoadError",r.type=t,r.request=e,o[1](r)))},"chunk-"+n,n)))};var h=e=>{},e=(e,t)=>{for(var n,r,[o,i,a,s]=t,l=0,c=[];l<o.length;l++)r=o[l],p.o(d,r)&&d[r]&&c.push(d[r][0]),d[r]=0;for(n in i)p.o(i,n)&&(p.m[n]=i[n]);for(a&&a(p),e&&e(t);c.length;)c.shift()();return s&&u.push.apply(u,s),h()},t=self.webpackChunkhm_common_template=self.webpackChunkhm_common_template||[];function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==d[i]&&(r=!1)}r&&(u.splice(t--,1),e=p(p.s=n[0]))}return 0===u.length&&(p.x(),p.x=e=>{}),e}t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t));var r=p.x;p.x=()=>(p.x=r||(e=>{}),(h=n)())})(),p.x()})();