function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){o[e]=n},n.parcelRequired7c6=a),a.register("bTcpz",(function(n,t){e(n.exports,"backdrop",(function(){return c})),e(n.exports,"onCloseModal",(function(){return l}));const o=new(0,a("7me8F").default),s=document.querySelector(".movies-home"),i=document.querySelector(".modal-conteiner");console.log(s);const c=document.querySelector(".backdrop-movie"),r=document.querySelector(".modal-close-btn.close");function l(){c.classList.remove("is-open"),c.classList.add("is-hidden")}console.log(r),s.addEventListener("click",(async function(e){const n=e.target.closest(".movie-card").dataset.movieid;console.log(n);const t=await o.getMovieInfo(n);console.log(t),i.innerHTML=function(e){return`\n   <img class="modal-conteiner-img" src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="card">\n  <div class='card-container'>\n          <h2 class='card-title'>${e.original_title}</h2>\n          <ul class='card-list'>\n            <li class='card-item'>\n              Vote / Votes\n              <p class='card-item-vote'>\n                <span class='card-item-average'>${e.vote_average}</span>/\n                <span class='card-item-count'>${e.vote_count}</span>\n              </p>\n            </li>\n            <li class='card-item'>\n              Popularity\n              <span class='card-item-popularity'>${e.popularity}</span>\n            </li>\n            <li class='card-item'>\n              Original Title\n              <span class='card-item-original-title'>${e.original_title}</span>\n            </li>\n            <li class='card-item'>\n              Genre\n              <p class='card-item-genres'>${e.genres.map((e=>e.name)).join(",")}\n                  <span class='card-item-genre'></span>\n              </p>\n            </li>\n          </ul>\n          <p class='card-description'>About</p>\n          <p class='card-text'>${e.overview}</p>\n          <div class='card-list-btn'>\n            <button type='button' class='card-btn-watched'>add to <br /> Watched</button>\n            <button type='button' class='card-btn-que'>add to queue</button>\n          </div>\n        </div>\n      </div>\n  `}(t),c.classList.add("is-open"),c.classList.remove("is-hidden")})),r.addEventListener("click",l)})),a("bTcpz");
//# sourceMappingURL=index.74a83c02.js.map
