!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequired7c6=a),a.register("5xtVg",(function(n,r){t(n.exports,"backdrop",(function(){return f})),t(n.exports,"onCloseModal",(function(){return y}));var o=a("bpxeT"),i=a("2TvXO"),c=a("1h2Gi"),s=a("4LMMA"),l=new(0,c.default),u=document.querySelector(".movies-home"),d=document.querySelector(".modal-conteiner");console.log(u);var f=document.querySelector(".backdrop-movie"),p=document.querySelector(".modal-close-btn.close");function v(){return(v=e(o)(e(i).mark((function t(n){var r,o,a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.target.closest(".movie-card"),o=r.dataset.movieid,console.log(o),e.next=5,l.getMovieInfo(o);case 5:a=e.sent,console.log(a),d.innerHTML=m(a),g(),document.querySelector(".card-btn-watched").addEventListener("click",b),document.querySelector(".card-btn-que").addEventListener("click",h),(0,s.default)(a);case 14:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function m(e){return'\n   <img class="modal-conteiner-img" src="https://image.tmdb.org/t/p/w500'.concat(e.poster_path,"\" alt=\"card\">\n  <div class='card-container'>\n          <h2 class='card-title'>").concat(e.original_title,"</h2>\n          <ul class='card-list'>\n            <li class='card-item'>\n              Vote / Votes\n              <p class='card-item-vote'>\n                <span class='card-item-average'>").concat(e.vote_average,"</span>/\n                <span class='card-item-count'>").concat(e.vote_count,"</span>\n              </p>\n            </li>\n            <li class='card-item'>\n              Popularity\n              <span class='card-item-popularity'>").concat(e.popularity,"</span>\n            </li>\n            <li class='card-item'>\n              Original Title\n              <span class='card-item-original-title'>").concat(e.original_title,"</span>\n            </li>\n            <li class='card-item'>\n              Genre\n              <p class='card-item-genres'>").concat(e.genres.map((function(e){return e.name})).slice(0,3).join(", "),"\n                <span class='card-item-genre'></span>\n              </p>\n            </li>\n          </ul>\n          <p class='card-description'>About</p>\n          <p class='card-text'>").concat(e.overview,"</p>\n          <div class='card-list-btn'>\n            <button type='button' class='card-btn-watched' data-movieId=").concat(e.id,">add to <br /> Watched</button>\n            <button type='button' class='card-btn-que' data-movieId=").concat(e.id,">add to queue</button>\n          </div>\n        </div>\n      </div>\n  ")}function g(){f.classList.add("is-open"),f.classList.remove("is-hidden")}function y(){f.classList.remove("is-open"),f.classList.add("is-hidden")}console.log(p),u.addEventListener("click",(function(e){return v.apply(this,arguments)})),p.addEventListener("click",y);function b(e){var t=e.target,n=e.target.dataset.movieid;console.log(n);var r=localStorage.getItem("watchedMovies"),o=JSON.parse(r)||[];console.log(o),o.includes(n)?(o.splice(o.indexOf(n),1),t.innerText="add to Watched"):(o.push(n),t.innerText="remove from Watched"),localStorage.setItem("watchedMovies",JSON.stringify(o)),console.log(o)}function h(e){var t=e.target,n=e.target.dataset.movieid,r=localStorage.getItem("queuedMovies"),o=JSON.parse(r)||[];o.includes(n)?(o.splice(o.indexOf(n),1),t.innerText="add to Queue"):(o.push(n),t.innerText="remove from Queue"),localStorage.setItem("queuedMovies",JSON.stringify(o)),console.log(o)}})),a.register("4LMMA",(function(n,r){t(n.exports,"default",(function(){return c}));var o=a("8nrFW"),i=[];function c(t){document.querySelector(".card-btn-watched").addEventListener("click",(function(n){try{i=e(o)(JSON.parse(localStorage.getItem("watched")))}catch(e){i=[]}var r=!0,a=!1,c=void 0;try{for(var s,l=i[Symbol.iterator]();!(r=(s=l.next()).done);r=!0){var u=s.value;if(t.id===u.id){var d=i.filter((function(e){return e.id!==t.id}));return i=e(o)(d),void localStorage.setItem("watched",JSON.stringify(i))}}}catch(e){a=!0,c=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw c}}i.push(t),localStorage.setItem("watched",JSON.stringify(i))}))}})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||i.default(e)||o.default()};var n=c(a("kMC0W")),r=c(a("7AJDX")),o=c(a("8CtQK")),i=c(a("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a("5xtVg")}();
//# sourceMappingURL=index.7f0a1dbf.js.map
