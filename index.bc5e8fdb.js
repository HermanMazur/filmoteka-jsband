function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a),a.register("bTcpz",(function(t,n){e(t.exports,"backdrop",(function(){return l})),e(t.exports,"onCloseModal",(function(){return p}));var o=a("7me8F"),c=a("btpe3");const s=new(0,o.default),i=document.querySelector(".movies-home"),r=document.querySelector(".modal-conteiner");console.log(i);const l=document.querySelector(".backdrop-movie"),d=document.querySelector(".modal-close-btn.close");console.log(d),i.addEventListener("click",(async function(e){const t=e.target.closest(".movie-card").dataset.movieid;console.log(t);const n=await s.getMovieInfo(t);console.log(n),r.innerHTML=function(e){return`\n   <img class="modal-conteiner-img" src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="card">\n  <div class='card-container'>\n          <h2 class='card-title'>${e.original_title}</h2>\n          <ul class='card-list'>\n            <li class='card-item'>\n              Vote / Votes\n              <p class='card-item-vote'>\n                <span class='card-item-average'>${e.vote_average}</span>/\n                <span class='card-item-count'>${e.vote_count}</span>\n              </p>\n            </li>\n            <li class='card-item'>\n              Popularity\n              <span class='card-item-popularity'>${e.popularity}</span>\n            </li>\n            <li class='card-item'>\n              Original Title\n              <span class='card-item-original-title'>${e.original_title}</span>\n            </li>\n            <li class='card-item'>\n              Genre\n              <p class='card-item-genres'>${e.genres.map((e=>e.name)).slice(0,3).join(", ")}\n                <span class='card-item-genre'></span>\n              </p>\n            </li>\n          </ul>\n          <p class='card-description'>About</p>\n          <p class='card-text'>${e.overview}</p>\n          <div class='card-list-btn'>\n            <button type='button' class='card-btn-watched' data-movieId=${e.id}>add to <br /> Watched</button>\n            <button type='button' class='card-btn-que' data-movieId=${e.id}>add to queue</button>\n          </div>\n        </div>\n      </div>\n  `}(n),l.classList.add("is-open"),l.classList.remove("is-hidden");document.querySelector(".card-btn-watched").addEventListener("click",m);document.querySelector(".card-btn-que").addEventListener("click",g),(0,c.default)(n)})),d.addEventListener("click",p);const u=document.querySelector(".card-btn-watched");function p(){l.classList.remove("is-open"),l.classList.add("is-hidden")}console.log(u);function m(e){const t=e.target,n=e.target.dataset.movieid;console.log(n);const o=localStorage.getItem("watchedMovies"),a=JSON.parse(o)||[];console.log(a),a.includes(n)?(a.splice(a.indexOf(n),1),t.innerText="add to Watched"):(a.push(n),t.innerText="remove from Watched"),localStorage.setItem("watchedMovies",JSON.stringify(a)),console.log(a)}function g(e){const t=e.target,n=e.target.dataset.movieid,o=localStorage.getItem("queuedMovies"),a=JSON.parse(o)||[];a.includes(n)?(a.splice(a.indexOf(n),1),t.innerText="add to Queue"):(a.push(n),t.innerText="remove from Queue"),localStorage.setItem("queuedMovies",JSON.stringify(a)),console.log(a)}})),a("bTcpz");
//# sourceMappingURL=index.bc5e8fdb.js.map
