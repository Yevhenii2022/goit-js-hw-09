function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),a.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),a.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t){var r=l.default(e,t,"get");return i.default(e,r)};var l=s(a("fExtF")),i=s(a("iaRLo"));function s(e){return e&&e.__esModule?e:{default:e}}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t,r){d.default(e,t),t.set(e,r)};var c,d=(c=a("7K24o"))&&c.__esModule?c:{default:c};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e};var p=new WeakMap,h=new WeakMap,m=new WeakMap;var v=e(a("amrNH")).template({1:function(e,t,r,n,a){var o,l,i=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <li class='gallery__item'>\n    <img src='"+i(e.lambda(null!=(o=null!=t?s(t,"urls"):t)?s(o,"small"):o,t))+"' alt='"+i("function"==typeof(l=null!=(l=s(r,"alt_description")||(null!=t?s(t,"alt_description"):t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"alt_description",hash:{},data:a,loc:{start:{line:3,column:35},end:{line:3,column:54}}}):l)+"' class='gallery-img' />\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,r,n,a){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(r,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:5,column:9}}}))?o:""},useData:!0});const g=document.querySelector(".js-search-form"),_=document.querySelector(".js-gallery"),y=document.querySelector(".js-load-more"),w=new class{fetchPhotos(){const t=new URLSearchParams({...e(o)(this,m),page:this.page,query:this.query});return fetch(`${e(o)(this,h)}/search/photos?${t}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}constructor(){e(u)(this,p,{writable:!0,value:"LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc"}),e(u)(this,h,{writable:!0,value:"https://api.unsplash.com"}),e(u)(this,m,{writable:!0,value:{per_page:12,color:"black_and_white",client_id:e(o)(this,p)}}),e(f)(this,"query",null),e(f)(this,"page",1)}};g.addEventListener("submit",(e=>{e.preventDefault();const t=e.target.elements["user-search-query"].value.trim();w.query=t,w.fetchPhotos().then((e=>{if(!e.results.length)throw new Error;_.innerHTML=v(e.results),e.total_pages!==w.page&&y.classList.remove("is-hidden")})).catch((()=>{y.classList.add("is-hidden"),_.textContent="Images not found"}))})),y.addEventListener("click",(()=>{w.page+=1,w.fetchPhotos().then((e=>{w.page===e.total_pages&&y.classList.add("is-hidden"),_.insertAdjacentHTML("beforeend",v(e.results))}))}));
//# sourceMappingURL=mentor-pagination.c3916268.js.map
