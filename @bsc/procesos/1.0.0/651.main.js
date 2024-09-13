/*! For license information please see 651.main.js.LICENSE.txt */
(self.webpackChunkprocesos=self.webpackChunkprocesos||[]).push([[651],{1651:function(e){e.exports=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(e,r,o){return n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a},n.apply(null,arguments)}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=Object.hasOwnProperty,i=Object.setPrototypeOf,l=Object.isFrozen,c=Object.getPrototypeOf,u=Object.getOwnPropertyDescriptor,s=Object.freeze,m=Object.seal,p=Object.create,f="undefined"!=typeof Reflect&&Reflect,d=f.apply,h=f.construct;d||(d=function(e,t,n){return e.apply(t,n)}),s||(s=function(e){return e}),m||(m=function(e){return e}),h||(h=function(e,t){return n(e,r(t))});var g,y=C(Array.prototype.forEach),b=C(Array.prototype.pop),_=C(Array.prototype.push),v=C(String.prototype.toLowerCase),T=C(String.prototype.toString),N=C(String.prototype.match),E=C(String.prototype.replace),A=C(String.prototype.indexOf),S=C(String.prototype.trim),w=C(RegExp.prototype.test),k=(g=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return h(g,t)});function x(e){return"number"==typeof e&&isNaN(e)}function C(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return d(e,t,r)}}function O(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:v,i&&i(e,null);for(var o=t.length;o--;){var a=t[o];if("string"==typeof a){var c=n(a);c!==a&&(l(t)||(t[o]=c),a=c)}e[a]=!0}return e}function L(e){var t,n=p(null);for(t in e)!0===d(a,e,[t])&&(n[t]=e[t]);return n}function R(e,t){for(;null!==e;){var n=u(e,t);if(n){if(n.get)return C(n.get);if("function"==typeof n.value)return C(n.value)}e=c(e)}return function(e){return console.warn("fallback value for",e),null}}var D=s(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),M=s(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),I=s(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),F=s(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),U=s(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),H=s(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),z=s(["#text"]),P=s(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),B=s(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),j=s(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),G=s(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),W=m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),q=m(/<%[\w\W]*|[\w\W]*%>/gm),Y=m(/\${[\w\W]*}/gm),$=m(/^data-[\-\w.\u00B7-\uFFFF]/),K=m(/^aria-[\-\w]+$/),V=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),X=m(/^(?:\w+script|data):/i),Z=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),J=m(/^html$/i),Q=m(/^[a-z][.\w]*(-[.\w]+)+$/i),ee=function(){return"undefined"==typeof window?null:window};return function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee(),o=function(e){return t(e)};if(o.version="2.5.4",o.removed=[],!n||!n.document||9!==n.document.nodeType)return o.isSupported=!1,o;var a=n.document,i=n.document,l=n.DocumentFragment,c=n.HTMLTemplateElement,u=n.Node,m=n.Element,p=n.NodeFilter,f=n.NamedNodeMap,d=void 0===f?n.NamedNodeMap||n.MozNamedAttrMap:f,h=n.HTMLFormElement,g=n.DOMParser,C=n.trustedTypes,te=m.prototype,ne=R(te,"cloneNode"),re=R(te,"nextSibling"),oe=R(te,"childNodes"),ae=R(te,"parentNode");if("function"==typeof c){var ie=i.createElement("template");ie.content&&ie.content.ownerDocument&&(i=ie.content.ownerDocument)}var le=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}}(C,a),ce=le?le.createHTML(""):"",ue=i,se=ue.implementation,me=ue.createNodeIterator,pe=ue.createDocumentFragment,fe=ue.getElementsByTagName,de=a.importNode,he={};try{he=L(i).documentMode?i.documentMode:{}}catch(e){}var ge={};o.isSupported="function"==typeof ae&&se&&void 0!==se.createHTMLDocument&&9!==he;var ye,be,_e=W,ve=q,Te=Y,Ne=$,Ee=K,Ae=X,Se=Z,we=Q,ke=V,xe=null,Ce=O({},[].concat(r(D),r(M),r(I),r(U),r(z))),Oe=null,Le=O({},[].concat(r(P),r(B),r(j),r(G))),Re=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),De=null,Me=null,Ie=!0,Fe=!0,Ue=!1,He=!0,ze=!1,Pe=!0,Be=!1,je=!1,Ge=!1,We=!1,qe=!1,Ye=!1,$e=!0,Ke=!1,Ve=!0,Xe=!1,Ze={},Je=null,Qe=O({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),et=null,tt=O({},["audio","video","img","source","image","track"]),nt=null,rt=O({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ot="http://www.w3.org/1998/Math/MathML",at="http://www.w3.org/2000/svg",it="http://www.w3.org/1999/xhtml",lt=it,ct=!1,ut=null,st=O({},[ot,at,it],T),mt=["application/xhtml+xml","text/html"],pt=null,ft=i.createElement("form"),dt=function(e){return e instanceof RegExp||e instanceof Function},ht=function(t){pt&&pt===t||(t&&"object"===e(t)||(t={}),t=L(t),ye=ye=-1===mt.indexOf(t.PARSER_MEDIA_TYPE)?"text/html":t.PARSER_MEDIA_TYPE,be="application/xhtml+xml"===ye?T:v,xe="ALLOWED_TAGS"in t?O({},t.ALLOWED_TAGS,be):Ce,Oe="ALLOWED_ATTR"in t?O({},t.ALLOWED_ATTR,be):Le,ut="ALLOWED_NAMESPACES"in t?O({},t.ALLOWED_NAMESPACES,T):st,nt="ADD_URI_SAFE_ATTR"in t?O(L(rt),t.ADD_URI_SAFE_ATTR,be):rt,et="ADD_DATA_URI_TAGS"in t?O(L(tt),t.ADD_DATA_URI_TAGS,be):tt,Je="FORBID_CONTENTS"in t?O({},t.FORBID_CONTENTS,be):Qe,De="FORBID_TAGS"in t?O({},t.FORBID_TAGS,be):{},Me="FORBID_ATTR"in t?O({},t.FORBID_ATTR,be):{},Ze="USE_PROFILES"in t&&t.USE_PROFILES,Ie=!1!==t.ALLOW_ARIA_ATTR,Fe=!1!==t.ALLOW_DATA_ATTR,Ue=t.ALLOW_UNKNOWN_PROTOCOLS||!1,He=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,ze=t.SAFE_FOR_TEMPLATES||!1,Pe=!1!==t.SAFE_FOR_XML,Be=t.WHOLE_DOCUMENT||!1,We=t.RETURN_DOM||!1,qe=t.RETURN_DOM_FRAGMENT||!1,Ye=t.RETURN_TRUSTED_TYPE||!1,Ge=t.FORCE_BODY||!1,$e=!1!==t.SANITIZE_DOM,Ke=t.SANITIZE_NAMED_PROPS||!1,Ve=!1!==t.KEEP_CONTENT,Xe=t.IN_PLACE||!1,ke=t.ALLOWED_URI_REGEXP||ke,lt=t.NAMESPACE||it,Re=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&dt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Re.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&dt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Re.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Re.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ze&&(Fe=!1),qe&&(We=!0),Ze&&(xe=O({},r(z)),Oe=[],!0===Ze.html&&(O(xe,D),O(Oe,P)),!0===Ze.svg&&(O(xe,M),O(Oe,B),O(Oe,G)),!0===Ze.svgFilters&&(O(xe,I),O(Oe,B),O(Oe,G)),!0===Ze.mathMl&&(O(xe,U),O(Oe,j),O(Oe,G))),t.ADD_TAGS&&(xe===Ce&&(xe=L(xe)),O(xe,t.ADD_TAGS,be)),t.ADD_ATTR&&(Oe===Le&&(Oe=L(Oe)),O(Oe,t.ADD_ATTR,be)),t.ADD_URI_SAFE_ATTR&&O(nt,t.ADD_URI_SAFE_ATTR,be),t.FORBID_CONTENTS&&(Je===Qe&&(Je=L(Je)),O(Je,t.FORBID_CONTENTS,be)),Ve&&(xe["#text"]=!0),Be&&O(xe,["html","head","body"]),xe.table&&(O(xe,["tbody"]),delete De.tbody),s&&s(t),pt=t)},gt=O({},["mi","mo","mn","ms","mtext"]),yt=O({},["foreignobject","annotation-xml"]),bt=O({},["title","style","font","a","script"]),_t=O({},M);O(_t,I),O(_t,F);var vt=O({},U);O(vt,H);var Tt=function(e){_(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ce}catch(t){e.remove()}}},Nt=function(e,t){try{_(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){_(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Oe[e])if(We||qe)try{Tt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Et=function(e){var t,n;if(Ge)e="<remove></remove>"+e;else{var r=N(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===ye&&lt===it&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=le?le.createHTML(e):e;if(lt===it)try{t=(new g).parseFromString(o,ye)}catch(e){}if(!t||!t.documentElement){t=se.createDocument(lt,"template",null);try{t.documentElement.innerHTML=ct?ce:o}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),lt===it?fe.call(t,Be?"html":"body")[0]:Be?t.documentElement:a},At=function(e){return me.call(e.ownerDocument||e,e,p.SHOW_ELEMENT|p.SHOW_COMMENT|p.SHOW_TEXT|p.SHOW_PROCESSING_INSTRUCTION|p.SHOW_CDATA_SECTION,null,!1)},St=function(e){return e instanceof h&&(void 0!==e.__depth&&"number"!=typeof e.__depth||void 0!==e.__removalCount&&"number"!=typeof e.__removalCount||"string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof d)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},wt=function(t){return"object"===e(u)?t instanceof u:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},kt=function(e,t,n){ge[e]&&y(ge[e],(function(e){e.call(o,t,n,pt)}))},xt=function(e){var t;if(kt("beforeSanitizeElements",e,null),St(e))return Tt(e),!0;if(w(/[\u0080-\uFFFF]/,e.nodeName))return Tt(e),!0;var n=be(e.nodeName);if(kt("uponSanitizeElement",e,{tagName:n,allowedTags:xe}),e.hasChildNodes()&&!wt(e.firstElementChild)&&(!wt(e.content)||!wt(e.content.firstElementChild))&&w(/<[/\w]/g,e.innerHTML)&&w(/<[/\w]/g,e.textContent))return Tt(e),!0;if("select"===n&&w(/<template/i,e.innerHTML))return Tt(e),!0;if(7===e.nodeType)return Tt(e),!0;if(Pe&&8===e.nodeType&&w(/<[/\w]/g,e.data))return Tt(e),!0;if(!xe[n]||De[n]){if(!De[n]&&Ot(n)){if(Re.tagNameCheck instanceof RegExp&&w(Re.tagNameCheck,n))return!1;if(Re.tagNameCheck instanceof Function&&Re.tagNameCheck(n))return!1}if(Ve&&!Je[n]){var r=ae(e)||e.parentNode,a=oe(e)||e.childNodes;if(a&&r)for(var i=a.length-1;i>=0;--i){var l=ne(a[i],!0);l.__removalCount=(e.__removalCount||0)+1,r.insertBefore(l,re(e))}}return Tt(e),!0}return e instanceof m&&!function(e){var t=ae(e);t&&t.tagName||(t={namespaceURI:lt,tagName:"template"});var n=v(e.tagName),r=v(t.tagName);return!!ut[e.namespaceURI]&&(e.namespaceURI===at?t.namespaceURI===it?"svg"===n:t.namespaceURI===ot?"svg"===n&&("annotation-xml"===r||gt[r]):Boolean(_t[n]):e.namespaceURI===ot?t.namespaceURI===it?"math"===n:t.namespaceURI===at?"math"===n&&yt[r]:Boolean(vt[n]):e.namespaceURI===it?!(t.namespaceURI===at&&!yt[r])&&!(t.namespaceURI===ot&&!gt[r])&&!vt[n]&&(bt[n]||!_t[n]):!("application/xhtml+xml"!==ye||!ut[e.namespaceURI]))}(e)?(Tt(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!w(/<\/no(script|embed|frames)/i,e.innerHTML)?(ze&&3===e.nodeType&&(t=e.textContent,t=E(t,_e," "),t=E(t,ve," "),t=E(t,Te," "),e.textContent!==t&&(_(o.removed,{element:e.cloneNode()}),e.textContent=t)),kt("afterSanitizeElements",e,null),!1):(Tt(e),!0)},Ct=function(e,t,n){if($e&&("id"===t||"name"===t)&&(n in i||n in ft||"__depth"===n||"__removalCount"===n))return!1;if(Fe&&!Me[t]&&w(Ne,t));else if(Ie&&w(Ee,t));else if(!Oe[t]||Me[t]){if(!(Ot(e)&&(Re.tagNameCheck instanceof RegExp&&w(Re.tagNameCheck,e)||Re.tagNameCheck instanceof Function&&Re.tagNameCheck(e))&&(Re.attributeNameCheck instanceof RegExp&&w(Re.attributeNameCheck,t)||Re.attributeNameCheck instanceof Function&&Re.attributeNameCheck(t))||"is"===t&&Re.allowCustomizedBuiltInElements&&(Re.tagNameCheck instanceof RegExp&&w(Re.tagNameCheck,n)||Re.tagNameCheck instanceof Function&&Re.tagNameCheck(n))))return!1}else if(nt[t]);else if(w(ke,E(n,Se,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==A(n,"data:")||!et[e])if(Ue&&!w(Ae,E(n,Se,"")));else if(n)return!1;return!0},Ot=function(e){return"annotation-xml"!==e&&N(e,we)},Lt=function(t){var n,r,a,i;kt("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Oe};for(i=l.length;i--;){var u=n=l[i],s=u.name,m=u.namespaceURI;if(r="value"===s?n.value:S(n.value),a=be(s),c.attrName=a,c.attrValue=r,c.keepAttr=!0,c.forceKeepAttr=void 0,kt("uponSanitizeAttribute",t,c),r=c.attrValue,!c.forceKeepAttr&&(Nt(s,t),c.keepAttr))if(He||!w(/\/>/i,r))if(Pe&&w(/((--!?|])>)|<\/(style|title)/i,r))Nt(s,t);else{ze&&(r=E(r,_e," "),r=E(r,ve," "),r=E(r,Te," "));var p=be(t.nodeName);if(Ct(p,a,r)){if(!Ke||"id"!==a&&"name"!==a||(Nt(s,t),r="user-content-"+r),le&&"object"===e(C)&&"function"==typeof C.getAttributeType)if(m);else switch(C.getAttributeType(p,a)){case"TrustedHTML":r=le.createHTML(r);break;case"TrustedScriptURL":r=le.createScriptURL(r)}try{m?t.setAttributeNS(m,s,r):t.setAttribute(s,r),St(t)?Tt(t):b(o.removed)}catch(e){}}}else Nt(s,t)}kt("afterSanitizeAttributes",t,null)}},Rt=function e(t){var n,r=At(t);for(kt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)if(kt("uponSanitizeShadowNode",n,null),!xt(n)){var o=ae(n);1===n.nodeType&&(o&&o.__depth?n.__depth=(n.__removalCount||0)+o.__depth+1:n.__depth=1),(n.__depth>=255||x(n.__depth))&&Tt(n),n.content instanceof l&&(n.content.__depth=n.__depth,e(n.content)),Lt(n)}kt("afterSanitizeShadowDOM",t,null)};return o.sanitize=function(t){var r,i,c,s,m,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ct=!t)&&(t="\x3c!--\x3e"),"string"!=typeof t&&!wt(t)){if("function"!=typeof t.toString)throw k("toString is not a function");if("string"!=typeof(t=t.toString()))throw k("dirty is not a string, aborting")}if(!o.isSupported){if("object"===e(n.toStaticHTML)||"function"==typeof n.toStaticHTML){if("string"==typeof t)return n.toStaticHTML(t);if(wt(t))return n.toStaticHTML(t.outerHTML)}return t}if(je||ht(p),o.removed=[],"string"==typeof t&&(Xe=!1),Xe){if(t.nodeName){var f=be(t.nodeName);if(!xe[f]||De[f])throw k("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof u)1===(i=(r=Et("\x3c!----\x3e")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===i.nodeName||"HTML"===i.nodeName?r=i:r.appendChild(i);else{if(!We&&!ze&&!Be&&-1===t.indexOf("<"))return le&&Ye?le.createHTML(t):t;if(!(r=Et(t)))return We?null:Ye?ce:""}r&&Ge&&Tt(r.firstChild);for(var d=At(Xe?t:r);c=d.nextNode();)if((3!==c.nodeType||c!==s)&&!xt(c)){var h=ae(c);1===c.nodeType&&(h&&h.__depth?c.__depth=(c.__removalCount||0)+h.__depth+1:c.__depth=1),(c.__depth>=255||x(c.__depth))&&Tt(c),c.content instanceof l&&(c.content.__depth=c.__depth,Rt(c.content)),Lt(c),s=c}if(s=null,Xe)return t;if(We){if(qe)for(m=pe.call(r.ownerDocument);r.firstChild;)m.appendChild(r.firstChild);else m=r;return(Oe.shadowroot||Oe.shadowrootmod)&&(m=de.call(a,m,!0)),m}var g=Be?r.outerHTML:r.innerHTML;return Be&&xe["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&w(J,r.ownerDocument.doctype.name)&&(g="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+g),ze&&(g=E(g,_e," "),g=E(g,ve," "),g=E(g,Te," ")),le&&Ye?le.createHTML(g):g},o.setConfig=function(e){ht(e),je=!0},o.clearConfig=function(){pt=null,je=!1},o.isValidAttribute=function(e,t,n){pt||ht({});var r=be(e),o=be(t);return Ct(r,o,n)},o.addHook=function(e,t){"function"==typeof t&&(ge[e]=ge[e]||[],_(ge[e],t))},o.removeHook=function(e){if(ge[e])return b(ge[e])},o.removeHooks=function(e){ge[e]&&(ge[e]=[])},o.removeAllHooks=function(){ge={}},o}()}()}}]);
//# sourceMappingURL=651.main.js.map?V=1.0.0