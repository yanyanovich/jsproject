import{S as s,A as a,N as u,P as f,K as d,E as p,C as g}from"./assets/vendor-e5b62995.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const m=r=>{console.log(r)},c=()=>{console.log("ajaxRequest-js-file")},y=()=>{console.log("burger-js-file")},b=()=>{console.log("faq-js-file")},j=()=>{console.log("form-js-file"),c()},v=()=>{console.log("modal-js-file")},q=r=>{const t=document.querySelector(".projects");if(t){const n=t.querySelector(".projects-js-list");new r(n,{speed:600,navigation:{nextEl:t.querySelector(".swiper-button-next"),prevEl:t.querySelector(".swiper-button-prev")},keyboard:{enabled:!0,onlyInViewport:!1},allowTouchMove:!0})}},h=r=>{console.log(r),c()};document.addEventListener("DOMContentLoaded",r=>{s.use([a,u,f,d,p,g]),m(s),c(),y(),b(),j(),v(),q(s),h(s)});
//# sourceMappingURL=commonHelpers.js.map
