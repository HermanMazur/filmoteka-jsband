var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("bTcpz"),d=o("7bYU0");const a=document.querySelector(".modal");function i(e){return e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!1}r.backdrop.addEventListener("click",(function(e){e.preventDefault(),(0,r.onCloseModal)()})),a.addEventListener("click",i),document.addEventListener("keydown",(function(e){if("Escape"!==e.key)return;e.preventDefault(),(0,r.onCloseModal)()}));const l=document.querySelector(".our__team-modal");d.refs.modal.addEventListener("click",d.closeTeamModal),l.addEventListener("click",i),document.addEventListener("keydown",(function(e){if("Escape"!==e.key)return;e.preventDefault(),(0,d.teamModalClassEdit)()}));
//# sourceMappingURL=index.8887b8ce.js.map
