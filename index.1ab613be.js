!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("5TAx9",(function(t,r){var n,a,i,l;n=t.exports,a="default",i=function(){return d},Object.defineProperty(n,a,{get:i,set:l,enumerable:!0,configurable:!0});var u=o("8nrFW"),c=document.querySelector("#root");console.log(c);var s=[];function d(t){document.querySelector(".card-btn-watched").addEventListener("click",(function(r){try{s=e(u)(JSON.parse(localStorage.getItem("watched")))}catch(e){s=[]}var n=!0,o=!1,a=void 0;try{for(var i,l=s[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var c=i.value;if(t.id===c.id){var d=s.filter((function(e){return e.id!==t.id}));return s=e(u)(d),void localStorage.setItem("watched",JSON.stringify(s))}}}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}s.push(t),localStorage.setItem("watched",JSON.stringify(s))}))}console.log(c),console.log(JSON.parse(localStorage.getItem("watched"))),function(){var e=JSON.parse(localStorage.getItem("watched"));console.log(e);var t=e.map((function(e){return console.log(e),'<div class="movie-card" data-movieId='.concat(e.id,'>\n                 <img class="movie-img" src="https://image.tmdb.org/t/p/w500').concat(e.poster_path,'" alt="card">\n            \n                 <div class="movie-info">\n                     <h2 class="movie-title">').concat(e.original_title,'</h2>\n                    <h3 class="span-title">').concat(e.genres.map((function(e){return e.name})).slice(0,3).join(", ")," | ").concat(e.release_date.slice(0,4),"</h3>\n                     </div>\n                 </div>")})).join("");console.log(c),c.insertAdjacentHTML("beforeend",t)}()})),o.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r.default(e)||n.default(e)||i.default(e)||a.default()};var r=l(o("kMC0W")),n=l(o("7AJDX")),a=l(o("8CtQK")),i=l(o("auk6i"));function l(e){return e&&e.__esModule?e:{default:e}}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o("5TAx9")}();
//# sourceMappingURL=index.1ab613be.js.map