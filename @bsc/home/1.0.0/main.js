/*! For license information please see main.js.LICENSE.txt */
System.register(["react","react-dom","@bsc/library"],(function(e,t){var r={},n={},o={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(n,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(t){r[t]=e[t]}))},function(e){Object.keys(e).forEach((function(t){n[t]=e[t]}))},function(e){o.Utils404=e.Utils404,o.default=e.default}],execute:function(){e((()=>{var e={513:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,i,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var u in a=Object(arguments[s]))r.call(a,u)&&(l[u]=a[u]);if(t){i=t(a);for(var c=0;c<i.length;c++)n.call(a,i[c])&&(l[i[c]]=a[i[c]])}}return l}},335:(e,t,r)=>{"use strict";r(513);var n=r(726),o=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,r){var n,a={},u=null,c=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,n)&&!s.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:c,props:a,_owner:i.current}}},85:(e,t,r)=>{"use strict";e.exports=r(335)},173:(e,t,r)=>{const n=r(921).y;t.w=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},921:(e,t,r)=>{t.y=function(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,o=0,a=n.length;o!==t&&a>=0;)"/"===n[--a]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var i=n.slice(0,a+1);return r.protocol+"//"+r.host+i};Number.isInteger},248:e=>{"use strict";e.exports=o},726:e=>{"use strict";e.exports=r},867:e=>{"use strict";e.exports=n}},a={};function i(t){var r=a[t];if(void 0!==r)return r.exports;var n=a[t]={exports:{}};return e[t](n,n.exports,i),n.exports}i.y=t,i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="";var l={};return(0,i(173).w)(1),(()=>{"use strict";i.r(l),i.d(l,{bootstrap:()=>be,mount:()=>Ee,unmount:()=>we});var e=i(726),t=i(867);function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var r;if("function"!=typeof(r=t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var r="single-spa-application:".concat(t);return function(){var e=document.getElementById(r);return e||((e=document.createElement("div")).id=r,document.body.appendChild(e)),e}}(t)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name,"'. Expected a function, received ").concat(s(r)));return function(){var e=r(t);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name,"'. Expected HTMLElement, received ").concat(s(e)));return e}}var c=null;try{c=require("react").createContext()}catch(r){}var p={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function d(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function h(e,t){return new Promise((function(r,n){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=y(e,t,(function(){r(this)})),a=u(e,t)(),i=function(e){var t=e.opts,r=e.elementToRender,n=e.domElement,o="function"==typeof t.renderType?t.renderType():t.renderType;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(o)>=0){var a=t.ReactDOM[o](n);return a.render(r),a}return"hydrate"===o?t.ReactDOM.hydrate(r,n):t.ReactDOM.render(r,n),null}({elementToRender:o,domElement:a,opts:e});e.domElements[t.name]=a,e.renderResults[t.name]=i}))}function m(e,t){return new Promise((function(r){e.unmountFinished=r;var n=e.renderResults[t.name];n&&n.unmount?n.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name],delete e.renderResults[t.name]}))}function f(e,t){return new Promise((function(r){e.updateResolves[t.name]||(e.updateResolves[t.name]=[]),e.updateResolves[t.name].push(r);var n=y(e,t,null),o=e.renderResults[t.name];if(o&&o.render)o.render(n);else{var a=u(e,t)();e.ReactDOM.render(n,a)}}))}function y(e,t,r){var o=e.React.createElement(e.rootComponent,t),a=c?e.React.createElement(c.Provider,{value:t},o):o;return(e.errorBoundary||t.errorBoundary||e.errorBoundaryClass||t.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||t.errorBoundaryClass||function(e,t){function r(t){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},r.displayName="SingleSpaReactErrorBoundary(".concat(t.name,")")}return r.prototype=Object.create(e.React.Component.prototype),r.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||t.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},r.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},r}(e,t),a=e.React.createElement(e.errorBoundaryClass,t,a)),e.React.createElement(e.SingleSpaRoot,n(n({},t),{},{mountFinished:r,updateFinished:function(){e.updateResolves[t.name]&&(e.updateResolves[t.name].forEach((function(e){return e()})),delete e.updateResolves[t.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),a)}var v,g=i(248);function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(v||(v={}));const E="popstate";function w(e,t){if(!1===e||null==e)throw new Error(t)}function R(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function O(e,t){return{usr:e.state,key:e.key,idx:t}}function C(e,t,r,n){return void 0===r&&(r=null),b({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?x(t):t,{state:r,key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}function S(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function x(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}var j;function P(e,t,r){void 0===r&&(r="/");let n=W(("string"==typeof t?x(t):t).pathname||"/",r);if(null==n)return null;let o=B(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let r=e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]));return r?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let a=null;for(let e=0;null==a&&e<o.length;++e){let t=A(n);a=I(o[e],t)}return a}function B(e,t,r,n){void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===n&&(n="");let o=(e,o,a)=>{let i={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};i.relativePath.startsWith("/")&&(w(i.relativePath.startsWith(n),'Absolute route path "'+i.relativePath+'" nested under path "'+n+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(n.length));let l=H([n,i.relativePath]),s=r.concat(i);e.children&&e.children.length>0&&(w(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),B(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:N(l,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var r;if(""!==e.path&&null!=(r=e.path)&&r.includes("?"))for(let r of D(e.path))o(e,t,r);else o(e,t)})),t}function D(e){let t=e.split("/");if(0===t.length)return[];let[r,...n]=t,o=r.endsWith("?"),a=r.replace(/\?$/,"");if(0===n.length)return o?[a,""]:[a];let i=D(n.join("/")),l=[];return l.push(...i.map((e=>""===e?a:[a,e].join("/")))),o&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(j||(j={})),new Set(["lazy","caseSensitive","path","id","index","children"]);const U=/^:[\w-]+$/,_=3,k=2,T=1,M=10,L=-2,F=e=>"*"===e;function N(e,t){let r=e.split("/"),n=r.length;return r.some(F)&&(n+=L),t&&(n+=k),r.filter((e=>!F(e))).reduce(((e,t)=>e+(U.test(t)?_:""===t?T:M)),n)}function I(e,t){let{routesMeta:r}=e,n={},o="/",a=[];for(let e=0;e<r.length;++e){let i=r[e],l=e===r.length-1,s="/"===o?t:t.slice(o.length)||"/",u=$({path:i.relativePath,caseSensitive:i.caseSensitive,end:l},s);if(!u)return null;Object.assign(n,u.params);let c=i.route;a.push({params:n,pathname:H([o,u.pathname]),pathnameBase:G(H([o,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(o=H([o,u.pathnameBase]))}return a}function $(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=function(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!0),R("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,r)=>(n.push({paramName:t,isOptional:null!=r}),r?"/?([^\\/]+)?":"/([^\\/]+)")));return e.endsWith("*")?(n.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:n.reduce(((e,t,r)=>{let{paramName:n,isOptional:o}=t;if("*"===n){let e=l[r]||"";i=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[r];return e[n]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:a,pathnameBase:i,pattern:e}}function A(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return R(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function W(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}const H=e=>e.join("/").replace(/\/\/+/g,"/"),G=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");Error;const q=["post","put","patch","delete"],V=(new Set(q),["get",...q]);function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z.apply(this,arguments)}new Set(V),new Set([301,302,303,307,308]),new Set([307,308]),Symbol("deferred");const J=e.createContext(null),Y=e.createContext(null),K=e.createContext(null),Q=e.createContext(null),X=e.createContext({outlet:null,matches:[],isDataRoute:!1}),Z=e.createContext(null);function ee(){return null!=e.useContext(Q)}function te(t,r,n,o){ee()||w(!1);let{navigator:a}=e.useContext(K),{matches:i}=e.useContext(X),l=i[i.length-1],s=l?l.params:{},u=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let c,p=(ee()||w(!1),e.useContext(Q).location);if(r){var d;let e="string"==typeof r?x(r):r;"/"===u||(null==(d=e.pathname)?void 0:d.startsWith(u))||w(!1),c=e}else c=p;let h=c.pathname||"/",m=h;if("/"!==u){let e=u.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(e.length).join("/")}let f=P(t,{pathname:m}),y=function(t,r,n,o){var a;if(void 0===r&&(r=[]),void 0===n&&(n=null),void 0===o&&(o=null),null==t){var i;if(null==(i=n)||!i.errors)return null;t=n.matches}let l=t,s=null==(a=n)?void 0:a.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&(null==s?void 0:s[e.route.id])));e>=0||w(!1),l=l.slice(0,Math.min(l.length,e+1))}let u=!1,c=-1;if(n&&o&&o.v7_partialHydration)for(let e=0;e<l.length;e++){let t=l[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:r}=n,o=t.route.loader&&void 0===e[t.route.id]&&(!r||void 0===r[t.route.id]);if(t.route.lazy||o){u=!0,l=c>=0?l.slice(0,c+1):[l[0]];break}}}return l.reduceRight(((t,o,a)=>{let i,p=!1,d=null,h=null;var m;n&&(i=s&&o.route.id?s[o.route.id]:void 0,d=o.route.errorElement||ne,u&&(c<0&&0===a?(le[m="route-fallback"]||(le[m]=!0),p=!0,h=null):c===a&&(p=!0,h=o.route.hydrateFallbackElement||null)));let f=r.concat(l.slice(0,a+1)),y=()=>{let r;return r=i?d:p?h:o.route.Component?e.createElement(o.route.Component,null):o.route.element?o.route.element:t,e.createElement(ae,{match:o,routeContext:{outlet:t,matches:f,isDataRoute:null!=n},children:r})};return n&&(o.route.ErrorBoundary||o.route.errorElement||0===a)?e.createElement(oe,{location:n.location,revalidation:n.revalidation,component:d,error:i,children:y(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):y()}),null)}(f&&f.map((e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:H([u,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?u:H([u,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),i,n,o);return r&&y?e.createElement(Q.Provider,{value:{location:z({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:v.Pop}},y):y}function re(){let t=function(){var t;let r=e.useContext(Z),n=function(t){let r=e.useContext(Y);return r||w(!1),r}(ie.UseRouteError),o=function(t){let r=function(t){let r=e.useContext(X);return r||w(!1),r}(),n=r.matches[r.matches.length-1];return n.route.id||w(!1),n.route.id}(ie.UseRouteError);return void 0!==r?r:null==(t=n.errors)?void 0:t[o]}(),r=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},r),n?e.createElement("pre",{style:o},n):null,null)}const ne=e.createElement(re,null);class oe extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(X.Provider,{value:this.props.routeContext},e.createElement(Z.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ae(t){let{routeContext:r,match:n,children:o}=t,a=e.useContext(J);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),e.createElement(X.Provider,{value:r},o)}var ie=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ie||{});const le={};function se(e){w(!1)}function ue(t){let{basename:r="/",children:n=null,location:o,navigationType:a=v.Pop,navigator:i,static:l=!1,future:s}=t;ee()&&w(!1);let u=r.replace(/^\/*/,"/"),c=e.useMemo((()=>({basename:u,navigator:i,static:l,future:z({v7_relativeSplatPath:!1},s)})),[u,s,i,l]);"string"==typeof o&&(o=x(o));let{pathname:p="/",search:d="",hash:h="",state:m=null,key:f="default"}=o,y=e.useMemo((()=>{let e=W(p,u);return null==e?null:{location:{pathname:e,search:d,hash:h,state:m,key:f},navigationType:a}}),[u,p,d,h,m,f,a]);return null==y?null:e.createElement(K.Provider,{value:c},e.createElement(Q.Provider,{children:n,value:y}))}function ce(e){let{children:t,location:r}=e;return te(pe(t),r)}function pe(t,r){void 0===r&&(r=[]);let n=[];return e.Children.forEach(t,((t,o)=>{if(!e.isValidElement(t))return;let a=[...r,o];if(t.type===e.Fragment)return void n.push.apply(n,pe(t.props.children,a));t.type!==se&&w(!1),t.props.index&&t.props.children&&w(!1);let i={id:t.props.id||a.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(i.children=pe(t.props.children,a)),n.push(i)})),n}e.startTransition,new Promise((()=>{})),e.Component,new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(r){}new Map;const de=e.startTransition;function he(t){let{basename:r,children:n,future:o,window:a}=t,i=e.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:a,v5Compat:!0})&&(l={}),function(e,t,r,n){void 0===n&&(n={});let{window:o=document.defaultView,v5Compat:a=!1}=n,i=o.history,l=v.Pop,s=null,u=c();function c(){return(i.state||{idx:null}).idx}function p(){l=v.Pop;let e=c(),t=null==e?null:e-u;u=e,s&&s({action:l,location:h.location,delta:t})}function d(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,r="string"==typeof e?e:S(e);return r=r.replace(/ $/,"%20"),w(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}null==u&&(u=0,i.replaceState(b({},i.state,{idx:u}),""));let h={get action(){return l},get location(){return e(o,i)},listen(e){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(E,p),s=e,()=>{o.removeEventListener(E,p),s=null}},createHref:e=>t(o,e),createURL:d,encodeLocation(e){let t=d(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){l=v.Push;let n=C(h.location,e,t);r&&r(n,e),u=c()+1;let p=O(n,u),d=h.createHref(n);try{i.pushState(p,"",d)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;o.location.assign(d)}a&&s&&s({action:l,location:h.location,delta:1})},replace:function(e,t){l=v.Replace;let n=C(h.location,e,t);r&&r(n,e),u=c();let o=O(n,u),p=h.createHref(n);i.replaceState(o,"",p),a&&s&&s({action:l,location:h.location,delta:0})},go:e=>i.go(e)};return h}((function(e,t){let{pathname:r,search:n,hash:o}=e.location;return C("",{pathname:r,search:n,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:S(t)}),null,l)));let s=i.current,[u,c]=e.useState({action:s.action,location:s.location}),{v7_startTransition:p}=o||{},d=e.useCallback((e=>{p&&de?de((()=>c(e))):c(e)}),[c,p]);return e.useLayoutEffect((()=>s.listen(d)),[s,d]),e.createElement(ue,{basename:r,children:n,location:u.location,navigationType:u.action,navigator:s,future:o})}var me,fe,ye;t.flushSync,e.useId,"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,(ye=me||(me={})).UseScrollRestoration="useScrollRestoration",ye.UseSubmit="useSubmit",ye.UseSubmitFetcher="useSubmitFetcher",ye.UseFetcher="useFetcher",ye.useViewTransitionState="useViewTransitionState",function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(fe||(fe={}));var ve=i(85),ge=function(e){if("object"!==o(e))throw new Error("single-spa-react requires a configuration object");var t=n(n({},p),e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!c&&t.React.createContext&&(c=t.React.createContext()),t.SingleSpaRoot=function(e){function t(e){t.displayName="SingleSpaRoot(".concat(e.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},t.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},t.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},t}(t);var r={bootstrap:d.bind(null,t),mount:h.bind(null,t),unmount:m.bind(null,t)};return t.parcelCanUpdate&&(r.update=f.bind(null,t)),r}({React:e.default,ReactDOM:t.default,rootComponent:function(e){return(0,ve.jsx)(he,{children:(0,ve.jsx)(g.default,{path:"home",children:(0,ve.jsx)(ce,{children:(0,ve.jsx)(se,{path:"*",element:(0,ve.jsx)(g.Utils404,{path:"home"})})})})})},errorBoundary:function(e,t,r){return null}}),be=ge.bootstrap,Ee=ge.mount,we=ge.unmount})(),l})())}}}));
//# sourceMappingURL=main.js.map?V=1.0.0