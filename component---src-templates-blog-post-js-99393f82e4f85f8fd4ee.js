(self.webpackChunkbrian_friel=self.webpackChunkbrian_friel||[]).push([[989],{7757:function(e,t,n){e.exports=n(5666)},9047:function(e,t,n){var r={"./deckgo-highlight-code.entry.js":[9548,548]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=9047,e.exports=a},5397:function(e,t,n){"use strict";n.d(t,{H:function(){return A},b:function(){return Se},c:function(){return oe},g:function(){return ie},h:function(){return q},p:function(){return k},r:function(){return Re}});var r=n(5671),a=n(3144);function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var o=n(9611);function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,o.Z)(e,t)}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return i(e)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function d(e,t,n){return d=f()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&(0,o.Z)(a,n.prototype),a},d.apply(null,arguments)}function h(e){var t="function"==typeof Map?new Map:void 0;return h=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return d(e,arguments,c(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),(0,o.Z)(r,e)},h(e)}var p=n(5861),m=n(2982);var g=n(181);function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(s){l=!0,a=s}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(e,t)||(0,g.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=n(7757),v=n.n(y);function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}var w,E,S=!1,L="undefined"!=typeof window?window:{},x=L.document||{head:{}},R={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}},k=function(e){return Promise.resolve(e)},O=function(){try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1}(),j=function(e,t,n,r){n&&n.map((function(n){var r=$(n,3),a=r[0],i=r[1],o=r[2],l=I(e,a),s=P(t,o),u=N(a);R.ael(l,i,s,u),(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return R.rel(l,i,s,u)}))}))},P=function(e,t){return function(n){try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(r){je(r)}}},I=function(e,t){return 4&t?x:8&t?L:e},N=function(e){return 0!=(2&e)},T="{visibility:hidden}.hydrated{visibility:inherit}",C="http://www.w3.org/1999/xlink",M=new WeakMap,H=function(e,t,n){var r=Ne.get(e);O&&n?(r=r||new CSSStyleSheet).replace(t):r=t,Ne.set(e,r)},z=function(e){var t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,a=(t.$tagName$,function(){}),i=function(e,t,n,r){var a=_(t),i=Ne.get(a);if(e=11===e.nodeType?e:x,i)if("string"==typeof i){e=e.head||e;var o,l=M.get(e);l||M.set(e,l=new Set),l.has(a)||((o=x.createElement("style")).innerHTML=i,e.insertBefore(o,e.querySelector("link")),l&&l.add(a))}else e.adoptedStyleSheets.includes(i)||(e.adoptedStyleSheets=[].concat((0,m.Z)(e.adoptedStyleSheets),[i]));return a}(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=i,n.classList.add(i+"-h")),a()},_=function(e,t){return"sc-"+e.$tagName$},Z={},V=function(e){return"object"===(e=typeof e)||"function"===e},q=function(e,t){for(var n=null,r=null,a=!1,i=!1,o=[],l=function t(r){for(var l=0;l<r.length;l++)n=r[l],Array.isArray(n)?t(n):null!=n&&"boolean"!=typeof n&&((a="function"!=typeof e&&!V(n))&&(n=String(n)),a&&i?o[o.length-1].$text$+=n:o.push(a?W(null,n):n),i=a)},s=arguments.length,u=new Array(s>2?s-2:0),c=2;c<s;c++)u[c-2]=arguments[c];if(l(u),t){t.key&&(r=t.key);var f=t.className||t.class;f&&(t.class="object"!=typeof f?f:Object.keys(f).filter((function(e){return f[e]})).join(" "))}if("function"==typeof e)return e(null===t?{}:t,o,B);var d=W(e,null);return d.$attrs$=t,o.length>0&&(d.$children$=o),d.$key$=r,d},W=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null};return n},A={},B={forEach:function(e,t){return e.map(F).forEach(t)},map:function(e,t){return e.map(F).map(t).map(G)}},F=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}},G=function(e){if("function"==typeof e.vtag){var t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),q.apply(void 0,[e.vtag,t].concat((0,m.Z)(e.vchildren||[])))}var n=W(e.vtag,e.vtext);return n.$attrs$=e.vattrs,n.$children$=e.vchildren,n.$key$=e.vkey,n.$name$=e.vname,n},U=function(e,t,n,r,a,i){if(n!==r){var o=Oe(e,t),l=t.toLowerCase();if("class"===t){var s=e.classList,u=J(n),c=J(r);s.remove.apply(s,(0,m.Z)(u.filter((function(e){return e&&!c.includes(e)})))),s.add.apply(s,(0,m.Z)(c.filter((function(e){return e&&!u.includes(e)}))))}else if("style"===t){for(var f in n)r&&null!=r[f]||(f.includes("-")?e.style.removeProperty(f):e.style[f]="");for(var d in r)n&&r[d]===n[d]||(d.includes("-")?e.style.setProperty(d,r[d]):e.style[d]=r[d])}else if("key"===t);else if("ref"===t)r&&r(e);else if(o||"o"!==t[0]||"n"!==t[1]){var h=V(r);if((o||h&&null!==r)&&!a)try{if(e.tagName.includes("-"))e[t]=r;else{var p=null==r?"":r;"list"===t?o=!1:null!=n&&e[t]==p||(e[t]=p)}}catch($){}var g=!1;l!==(l=l.replace(/^xlink\:?/,""))&&(t=l,g=!0),null==r||!1===r?!1===r&&""!==e.getAttribute(t)||(g?e.removeAttributeNS(C,t):e.removeAttribute(t)):(!o||4&i||a)&&!h&&(r=!0===r?"":r,g?e.setAttributeNS(C,t,r):e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):Oe(L,l)?l.slice(2):l[2]+t.slice(3),n&&R.rel(e,t,n,!1),r&&R.ael(e,t,r,!1)}},D=/\s/,J=function(e){return e?e.split(D):[]},Y=function(e,t,n,r){var a=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,i=e&&e.$attrs$||Z,o=t.$attrs$||Z;for(r in i)r in o||U(a,r,i[r],void 0,n,t.$flags$);for(r in o)U(a,r,i[r],o[r],n,t.$flags$)},Q=function e(t,n,r,a){var i,o,l=n.$children$[r],s=0;if(null!==l.$text$)i=l.$elm$=x.createTextNode(l.$text$);else if(i=l.$elm$=x.createElement(l.$tag$),Y(null,l,false),null!=w&&i["s-si"]!==w&&i.classList.add(i["s-si"]=w),l.$children$)for(s=0;s<l.$children$.length;++s)(o=e(t,l,s))&&i.appendChild(o);return i},K=function(e,t,n,r,a,i){var o,l=e;for(l.shadowRoot&&l.tagName===E&&(l=l.shadowRoot);a<=i;++a)r[a]&&(o=Q(null,n,a))&&(r[a].$elm$=o,l.insertBefore(o,t))},X=function(e,t,n,r,a){for(;t<=n;++t)(r=e[t])&&(a=r.$elm$,re(r),a.remove())},ee=function(e,t,n,r){for(var a,i,o=0,l=0,s=0,u=0,c=t.length-1,f=t[0],d=t[c],h=r.length-1,p=r[0],m=r[h];o<=c&&l<=h;)if(null==f)f=t[++o];else if(null==d)d=t[--c];else if(null==p)p=r[++l];else if(null==m)m=r[--h];else if(te(f,p))ne(f,p),f=t[++o],p=r[++l];else if(te(d,m))ne(d,m),d=t[--c],m=r[--h];else if(te(f,m))ne(f,m),e.insertBefore(f.$elm$,d.$elm$.nextSibling),f=t[++o],m=r[--h];else if(te(d,p))ne(d,p),e.insertBefore(d.$elm$,f.$elm$),d=t[--c],p=r[++l];else{for(s=-1,u=o;u<=c;++u)if(t[u]&&null!==t[u].$key$&&t[u].$key$===p.$key$){s=u;break}s>=0?((i=t[s]).$tag$!==p.$tag$?a=Q(t&&t[l],n,s):(ne(i,p),t[s]=void 0,a=i.$elm$),p=r[++l]):(a=Q(t&&t[l],n,l),p=r[++l]),a&&f.$elm$.parentNode.insertBefore(a,f.$elm$)}o>c?K(e,null==r[h+1]?null:r[h+1].$elm$,n,r,l,h):l>h&&X(t,o,c)},te=function(e,t){return e.$tag$===t.$tag$&&e.$key$===t.$key$},ne=function(e,t){var n=t.$elm$=e.$elm$,r=e.$children$,a=t.$children$,i=t.$tag$,o=t.$text$;null===o?("slot"===i||Y(e,t,false),null!==r&&null!==a?ee(n,r,t,a):null!==a?(null!==e.$text$&&(n.textContent=""),K(n,null,t,a,0,a.length-1)):null!==r&&X(r,0,r.length-1)):e.$text$!==o&&(n.data=o)},re=function e(t){t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(e)},ae=function(e,t){var n,r=e.$hostElement$,a=e.$cmpMeta$,i=e.$vnode$||W(null,null),o=(n=t)&&n.$tag$===A?t:q(null,null,t);E=r.tagName,a.$attrsToReflect$&&(o.$attrs$=o.$attrs$||{},a.$attrsToReflect$.map((function(e){var t=$(e,2),n=t[0],a=t[1];return o.$attrs$[a]=r[n]}))),o.$tag$=null,o.$flags$|=4,e.$vnode$=o,o.$elm$=i.$elm$=r.shadowRoot||r,w=r["s-sc"],ne(i,o)},ie=function(e){return xe(e).$hostElement$},oe=function(e,t,n){var r=ie(e);return{emit:function(e){return le(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}}},le=function(e,t,n){var r=R.ce(t,n);return e.dispatchEvent(r),r},se=function(e,t){t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))},ue=function(e,t){if(e.$flags$|=16,!(4&e.$flags$)){se(e,e.$ancestorComponent$);return Ze((function(){return ce(e,t)}))}e.$flags$|=512},ce=function(e,t){var n,r=(e.$cmpMeta$.$tagName$,function(){}),a=e.$lazyInstance$;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((function(e){var t=$(e,2),n=t[0],r=t[1];return me(a,n,r)})),e.$queuedListeners$=null),n=me(a,"componentWillLoad")),r(),ge(n,(function(){return fe(e,a,t)}))},fe=function(){var e=(0,p.Z)(v().mark((function e(t,n,r){var a,i,o,l,s,u;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.$hostElement$,t.$cmpMeta$.$tagName$,i=function(){},o=a["s-rc"],r&&z(t),t.$cmpMeta$.$tagName$,l=function(){},de(t,n),o&&(o.map((function(e){return e()})),a["s-rc"]=void 0),l(),i(),s=a["s-p"],u=function(){return he(t)},0===s.length?u():(Promise.all(s).then(u),t.$flags$|=4,s.length=0);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),de=function(e,t,n){try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,ae(e,t)}catch(r){je(r,e.$hostElement$)}return null},he=function(e){e.$cmpMeta$.$tagName$;var t=e.$hostElement$,n=function(){},r=e.$lazyInstance$,a=e.$ancestorComponent$;64&e.$flags$?(me(r,"componentDidUpdate"),n()):(e.$flags$|=64,$e(t),me(r,"componentDidLoad"),n(),e.$onReadyResolve$(t),a||pe()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&_e((function(){return ue(e,!1)})),e.$flags$&=-517},pe=function(e){$e(x.documentElement),_e((function(){return le(L,"appload",{detail:{namespace:"deckdeckgo-highlight-code"}})}))},me=function(e,t,n){if(e&&e[t])try{return e[t](n)}catch(r){je(r)}},ge=function(e,t){return e&&e.then?e.then(t):t()},$e=function(e){return e.classList.add("hydrated")},ye=function(e,t,n,r){var a,i,o=xe(e),l=o.$hostElement$,s=o.$instanceValues$.get(t),u=o.$flags$,c=o.$lazyInstance$;if(a=n,i=r.$members$[t][0],n=null==a||V(a)?a:4&i?"false"!==a&&(""===a||!!a):1&i?String(a):a,!(8&u&&void 0!==s||n===s)&&(o.$instanceValues$.set(t,n),c)){if(r.$watchers$&&128&u){var f=r.$watchers$[t];f&&f.map((function(e){try{c[e](n,s,t)}catch(r){je(r,l)}}))}2==(18&u)&&ue(o,!1)}},ve=function(e,t,n){if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);var r=Object.entries(t.$members$),a=e.prototype;if(r.map((function(e){var r=$(e,2),i=r[0],o=$(r[1],1)[0];31&o||2&n&&32&o?Object.defineProperty(a,i,{get:function(){return e=i,xe(this).$instanceValues$.get(e);var e},set:function(e){ye(this,i,e,t)},configurable:!0,enumerable:!0}):1&n&&64&o&&Object.defineProperty(a,i,{value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=xe(this);return r.$onInstancePromise$.then((function(){var e;return(e=r.$lazyInstance$)[i].apply(e,t)}))}})})),1&n){var i=new Map;a.attributeChangedCallback=function(e,t,n){var r=this;R.jmp((function(){var t=i.get(e);if(r.hasOwnProperty(t))n=r[t],delete r[t];else if(a.hasOwnProperty(t)&&"number"==typeof r[t]&&r[t]==n)return;r[t]=(null!==n||"boolean"!=typeof r[t])&&n}))},e.observedAttributes=r.filter((function(e){var t=$(e,2);t[0];return 15&t[1][0]})).map((function(e){var n=$(e,2),r=n[0],a=n[1],o=a[1]||r;return i.set(o,r),512&a[0]&&t.$attrsToReflect$.push([r,o]),o}))}}return e},be=function(){var e=(0,p.Z)(v().mark((function e(t,n,r,a,i){var o,l,s,u,c,f,d;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=(32&n.$flags$)){e.next=17;break}if(n.$flags$|=32,!(i=Ie(r)).then){e.next=9;break}return o=function(){},e.next=7,i;case 7:i=e.sent,o();case 9:i.isProxied||(r.$watchers$=i.watchers,ve(i,r,2),i.isProxied=!0),r.$tagName$,l=function(){},n.$flags$|=8;try{new i(n)}catch(t){je(t)}n.$flags$&=-9,n.$flags$|=128,l(),i.style&&(s=i.style,u=_(r),Ne.has(u)||(r.$tagName$,c=function(){},H(u,s,!!(1&r.$flags$)),c()));case 17:f=n.$ancestorComponent$,d=function(){return ue(n,!0)},f&&f["s-rc"]?f["s-rc"].push(d):d();case 20:case"end":return e.stop()}}),e)})));return function(t,n,r,a,i){return e.apply(this,arguments)}}(),we=function(e){if(0==(1&R.$flags$)){var t=xe(e),n=t.$cmpMeta$,r=(n.$tagName$,function(){});if(1&t.$flags$)j(e,t,n.$listeners$);else{t.$flags$|=1;for(var a=e;a=a.parentNode||a.host;)if(a["s-p"]){se(t,t.$ancestorComponent$=a);break}n.$members$&&Object.entries(n.$members$).map((function(t){var n=$(t,2),r=n[0];if(31&$(n[1],1)[0]&&e.hasOwnProperty(r)){var a=e[r];delete e[r],e[r]=a}})),be(e,t,n)}r()}},Ee=function(e){if(0==(1&R.$flags$)){var t=xe(e);t.$rmListeners$&&(t.$rmListeners$.map((function(e){return e()})),t.$rmListeners$=void 0)}},Se=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=function(){},s=[],u=n.exclude||[],c=L.customElements,f=x.head,d=f.querySelector("meta[charset]"),p=x.createElement("style"),m=[],g=!0;Object.assign(R,n),R.$resourcesUrl$=new URL(n.resourcesUrl||"./",x.baseURI).href,e.map((function(e){e[1].map((function(n){var o={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};o.$members$=n[2],o.$listeners$=n[3],o.$attrsToReflect$=[],o.$watchers$={};var f=o.$tagName$,d=function(e){l(s,e);var n=b(s);function s(e){var t;return(0,r.Z)(this,s),e=i(t=n.call(this,e)),ke(e,o),1&o.$flags$&&e.attachShadow({mode:"open"}),t}return(0,a.Z)(s,[{key:"connectedCallback",value:function(){var e=this;t&&(clearTimeout(t),t=null),g?m.push(this):R.jmp((function(){return we(e)}))}},{key:"disconnectedCallback",value:function(){var e=this;R.jmp((function(){return Ee(e)}))}},{key:"componentOnReady",value:function(){return xe(this).$onReadyPromise$}}]),s}(h(HTMLElement));o.$lazyBundleId$=e[0],u.includes(f)||c.get(f)||(s.push(f),c.define(f,ve(d,o,1)))}))})),p.innerHTML=s+T,p.setAttribute("data-styles",""),f.insertBefore(p,d?d.nextSibling:f.firstChild),g=!1,m.length?m.map((function(e){return e.connectedCallback()})):R.jmp((function(){return t=setTimeout(pe,30)})),o()},Le=new WeakMap,xe=function(e){return Le.get(e)},Re=function(e,t){return Le.set(t.$lazyInstance$=e,t)},ke=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e})),n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e})),e["s-p"]=[],e["s-rc"]=[],j(e,n,t.$listeners$),Le.set(e,n)},Oe=function(e,t){return t in e},je=function(e,t){return(0,console.error)(e,t)},Pe=new Map,Ie=function(e,t,r){var a=e.$tagName$.replace(/-/g,"_"),i=e.$lazyBundleId$,o=Pe.get(i);return o?o[a]:n(9047)("./".concat(i,".entry.js")).then((function(e){return Pe.set(i,e),e[a]}),je)},Ne=new Map,Te=[],Ce=[],Me=function(e,t){return function(n){e.push(n),S||(S=!0,t&&4&R.$flags$?_e(ze):R.raf(ze))}},He=function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){je(n)}e.length=0},ze=function e(){He(Te),He(Ce),(S=Te.length>0)&&R.raf(e)},_e=function(e){return k().then(e)},Ze=Me(Ce,!0)},1496:function(e,t,n){"use strict";var r=n(5318);t.Z=void 0;var a,i=r(n(1506)),o=r(n(5354)),l=r(n(7316)),s=r(n(7154)),u=r(n(7294)),c=r(n(5697)),f=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],d=function(e){var t=(0,s.default)({},e),n=t.resolutions,r=t.sizes,a=t.critical;return n&&(t.fixed=n,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},h=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,n=e.fixed,r=m(t||n||[]);return r&&r.src},m=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(h);if(-1!==t)return e[t];var n=e.findIndex((function(e){return void 0===e.media}));if(-1!==n)return e[n]}return e[0]},g=Object.create({}),$=function(e){var t=d(e),n=p(t);return g[n]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,b=v&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},r&&u.default.createElement("source",{type:"image/webp",media:a,srcSet:r,sizes:i}),n&&u.default.createElement("source",{media:a,srcSet:n,sizes:i}))}))}function S(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function L(e){return e.map((function(e){var t=e.src,n=e.media,r=e.tracedSVG;return u.default.createElement("source",{key:t,media:n,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,n=e.media,r=e.base64;return u.default.createElement("source",{key:t,media:n,srcSet:r})}))}function R(e,t){var n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?r:n)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var k=function(e,t){var n=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return n&&(n.observe(e),w.set(e,t)),function(){n.unobserve(e),w.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+u+o+l+n+r+t+i+a+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=u.default.forwardRef((function(e,t){var n=e.src,r=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=u.default.createElement(P,(0,s.default)({ref:t,src:n},i,{ariaHidden:o}));return r.length>1?u.default.createElement("picture",null,a(r),l):l})),P=u.default.forwardRef((function(e,t){var n=e.sizes,r=e.srcSet,a=e.src,i=e.style,o=e.onLoad,c=e.onError,d=e.loading,h=e.draggable,p=e.ariaHidden,m=(0,l.default)(e,f);return u.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:n,srcSet:r,src:a},m,{onLoad:o,onError:c,ref:t,loading:d,draggable:h,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));P.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var I=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=v&&$(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!y&&b&&!n.isCritical&&!n.seenBefore;var r=n.isCritical||v&&(y||!n.useIOSupport);return n.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn,isHydrated:!1},n.imageRef=u.default.createRef(),n.placeholderRef=t.placeholderRef||u.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,i.default)(n)),n.handleRef=n.handleRef.bind((0,i.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:$(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=$(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=d(e),(n=p(t))&&(g[n]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=d(this.props),t=e.title,n=e.alt,r=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,h=e.placeholderClassName,p=e.fluid,g=e.fixed,$=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,b=e.itemProp,w=e.loading,S=e.draggable,R=p||g;if(!R)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,s.default)({opacity:k?1:0,transition:I?"opacity "+y+"ms":"none"},l),T="boolean"==typeof $?"lightgray":$,C={transitionDelay:y+"ms"},M=(0,s.default)({opacity:this.state.imgLoaded?0:1},I&&C,l,f),H={title:t,alt:this.state.isVisible?"":n,style:M,className:h,itemProp:b},z=this.state.isHydrated?m(R):R[0];if(p)return u.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:z.maxWidth?z.maxWidth+"px":null,maxHeight:z.maxHeight?z.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},u.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),T&&u.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&C)}),z.base64&&u.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:H,imageVariants:R,generateSources:x}),z.tracedSVG&&u.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:H,imageVariants:R,generateSources:L}),this.state.isVisible&&u.default.createElement("picture",null,E(R),u.default.createElement(P,{alt:n,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:w,draggable:S})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,s.default)({alt:n,title:t,loading:w},z,{imageVariants:R}))}}));if(g){var _=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},i);return"inherit"===i.display&&delete _.display,u.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},T&&u.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:T,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},I&&C)}),z.base64&&u.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:H,imageVariants:R,generateSources:x}),z.tracedSVG&&u.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:H,imageVariants:R,generateSources:L}),this.state.isVisible&&u.default.createElement("picture",null,E(R),u.default.createElement(P,{alt:n,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:w,draggable:S})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,s.default)({alt:n,title:t,loading:w},z,{imageVariants:R}))}}))}return null},t}(u.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),T=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function C(e){return function(t,n,r){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((a={})[n]=e,a),t,"prop",r)}}I.propTypes={resolutions:N,sizes:T,fixed:C(c.default.oneOfType([N,c.default.arrayOf(N)])),fluid:C(c.default.oneOfType([T,c.default.arrayOf(T)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var M=I;t.Z=M},8270:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(7294),a=n(5444),i=n(6911),o=n(1496),l=n(5713);function s(){var e=(0,a.useStaticQuery)("719542093"),t=e.site.siteMetadata.author;return r.createElement("div",{style:{display:"flex",marginBottom:(0,l.qZ)(2.5)}},r.createElement("div",{style:{width:"100%",maxWidth:"80px"}},r.createElement(o.Z,{fluid:e.avatar.childImageSharp.fluid,style:{borderRadius:"100px"}})),r.createElement("div",{style:{marginLeft:(0,l.qZ)(.5)}},r.createElement("p",{style:{lineHeight:"20px",color:"rgba(0,0,0,0.54)",fontWeight:300,fontSize:"15px",textTransform:"uppercase",letterSpacing:"0.5px",margin:0}},"Written by"),r.createElement("h3",{style:{margin:0,fontSize:"28px",lineHeight:"36px",fontWeight:500}},t),r.createElement("p",null,"Developer Relations at"," ",r.createElement("a",{href:"https://phantom.app",target:"_blank",rel:"noreferrer",className:"blue-link"},"Phantom"))))}var u,c=n(7198),f=n(3751),d=n(5397);function h(e){var t=e.data,n=e.pageContext,o=e.location,u=n.previous,d=n.next,h=t.site.siteMetadata.title,p=t.markdownRemark,m=p.frontmatter.featuredImage.childImageSharp.fluid,g=p.frontmatter.thumbnail;return r.createElement(c.Z,{location:o,title:h},r.createElement(f.Z,{title:p.frontmatter.title,description:p.frontmatter.description||p.excerpt,image:p.frontmatter.featuredImage.src,thumbnail:g}),r.createElement("article",null,r.createElement("header",null,r.createElement(i.Z,{Tag:"section",fluid:m,style:{height:"300px",width:"100%"},backgroundColor:"#040e18"}),r.createElement("h1",{style:{marginTop:(0,l.qZ)(1),marginBottom:0}},p.frontmatter.title),r.createElement("p",{style:Object.assign({},(0,l.bA)(-.2),{display:"block",marginBottom:(0,l.qZ)(.2)})},p.frontmatter.date," | ",p.timeToRead," Min Read"),r.createElement("p",{style:{display:"block",fontStyle:"italic",marginBottom:(0,l.qZ)(1)}},p.frontmatter.description)),r.createElement("section",{dangerouslySetInnerHTML:{__html:p.html}}),r.createElement("hr",{className:"divider",style:{marginBottom:(0,l.qZ)(1)}}),r.createElement("footer",null,r.createElement(s,null))),r.createElement("nav",null,r.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,marginLeft:0}},r.createElement("li",null,u&&r.createElement("div",null,r.createElement(a.Link,{to:u.fields.slug,rel:"prev",className:"no-underline"},r.createElement("h5",{className:"light-subheader"},"Previous Post"),"←"," ",u.frontmatter.title))),r.createElement("li",null,d&&r.createElement("div",null,r.createElement(a.Link,{to:d.fields.slug,rel:"next",className:"no-underline"},r.createElement("h5",{className:"light-subheader"},"Next Post"),d.frontmatter.title," →"))))))}!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"undefined"==typeof window?Promise.resolve():(0,d.p)().then((function(){return(0,d.b)([["deckgo-highlight-code",[[1,"deckgo-highlight-code",{language:[513],highlightLines:[513,"highlight-lines"],lineNumbers:[516,"line-numbers"],terminal:[513],editable:[4],theme:[513],revealProgress:[1025,"reveal-progress"],themeStyle:[32],loaded:[32],highlightRows:[32],load:[64],reveal:[64],hide:[64],revealAll:[64],hideAll:[64],nextHighlight:[64],prevHighlight:[64]},[[5,"prismLanguageLoaded","onLanguageLoaded"],[5,"prismLanguageError","onLanguageError"],[8,"copy","onCopyCleanZeroWidthSpaces"]]]]]],u)}))},5666:function(e){var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(I){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof g?t:g,i=Object.create(a.prototype),o=new O(r||[]);return i._invoke=function(e,t,n){var r=f;return function(a,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===a)throw i;return P()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var l=x(o,n);if(l){if(l===m)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=c(e,t,n);if("normal"===s.type){if(r=n.done?p:d,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(e,n,o),i}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(I){return{type:"throw",arg:I}}}e.wrap=u;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",m={};function g(){}function $(){}function y(){}var v={};s(v,i,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(j([])));w&&w!==n&&r.call(w,i)&&(v=w);var E=y.prototype=g.prototype=Object.create(v);function S(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(a,i,o,l){var s=c(e[a],e,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,o,l)}),(function(e){n("throw",e,o,l)})):t.resolve(f).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,l)}))}l(s.arg)}var a;this._invoke=function(e,r){function i(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(i,i):i()}}function x(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,x(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=c(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,m;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function R(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(R,this),this.reset(!0)}function j(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:P}}function P(){return{value:t,done:!0}}return $.prototype=y,s(E,"constructor",y),s(y,"constructor",$),$.displayName=s(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===$||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},S(L.prototype),s(L.prototype,o,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,a,i){void 0===i&&(i=Promise);var o=new L(u(t,n,r,a),i);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},S(E),s(E,l,"Generator"),s(E,i,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return l.type="throw",l.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],l=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;k(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:j(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},5861:function(e,t,n){"use strict";function r(e,t,n,r,a,i,o){try{var l=e[i](o),s=l.value}catch(u){return void n(u)}l.done?t(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var o=e.apply(t,n);function l(e){r(o,a,i,l,s,"next",e)}function s(e){r(o,a,i,l,s,"throw",e)}l(void 0)}))}}n.d(t,{Z:function(){return a}})},5671:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},3144:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-99393f82e4f85f8fd4ee.js.map