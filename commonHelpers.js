import{S as l,A as f,N as w,P as y,K as h,E as m,C as v,a as g}from"./assets/vendor-9eacdfbd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const S=o=>{console.log(o)},q=()=>{console.log("burger-js-file")},_=()=>{const o=document.querySelectorAll(".faq");o.length>0&&o.forEach(t=>{const s=t.querySelectorAll(".item-js");s.forEach((i,e)=>{const r=i.querySelector(".question-js"),n=i.querySelector(".answer-js");r.addEventListener("click",()=>{const c=n.style.height===`${n.scrollHeight}px`;s.forEach((a,u)=>{const d=a.querySelector(".answer-js"),p=a.querySelector(".item-js svg");d.style.height=u===e&&!c?`${d.scrollHeight}px`:"0px",p.style.transform=u===e&&!c?"rotate(180deg)":"rotate(0deg)"})})})})},b=()=>{console.log("form-js-file")},E=()=>{console.log("modal-js-file")},j=o=>{const t=document.querySelector(".projects");if(t){const s=t.querySelector(".projects-js-list");new o(s,{speed:600,navigation:{nextEl:t.querySelector(".swiper-button-next"),prevEl:t.querySelector(".swiper-button-prev")},keyboard:{enabled:!0,onlyInViewport:!1},allowTouchMove:!0})}},M=async()=>{const o=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!o.ok)throw new Error(o.status);return await o.json()},L=o=>{const t=document.querySelector(".reviews");if(t){const e=t.querySelector(".swiper-wrapper");if(!e){console.error("Element .swiper-wrapper not found in the DOM");return}M().then(r=>{const n=i(r);e.insertAdjacentHTML("beforeend",n);const c=t.querySelector(".swiper_reviews");c&&new o(c,{slidesPerView:1,autoHeight:!0,speed:0,navigation:{nextEl:t.querySelector(".swiper-button-next"),prevEl:t.querySelector(".swiper-button-prev")},keyboard:{enabled:!0,onlyInViewport:!1},allowTouchMove:!0,breakpoints:{768:{speed:600,autoHeight:!1,slidesPerView:2,spaceBetween:16},1440:{speed:600,autoHeight:!1,slidesPerView:4,spaceBetween:16}}})}).catch(r=>{e.innerHTML='<p class="reviews__notfound">Not found</p>'})}const s=({author:e,avatar_url:r,review:n})=>`
  <li class="swiper-slide">
    <div class="reviews__item__container">
      <div class="reviews__item__photo">
        <img src="${r}" alt="${e}" />
      </div>
      <h3 class="reviews__item__name">${e}</h3>
      <p class="reviews__item__review">${n}</p>
    </div>
  </li>`,i=e=>e.map(s).join("")},O=o=>{const t=document.querySelectorAll(".marquee__slider");t.length>0&&t.forEach(s=>{new o(s,{slidesPerView:"auto",spaceBetween:30,speed:12e3,allowTouchMove:!1,loop:!0,touchStartPreventDefault:!1,autoplay:{delay:0,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{768:{spaceBetween:45}}})})};document.addEventListener("DOMContentLoaded",o=>{l.use([f,w,y,h,m,v]),g.init({duration:1200,once:!0,offset:window.innerHeight/30}),S(l),q(),_(),b(),E(),j(l),L(l),O(l)});
//# sourceMappingURL=commonHelpers.js.map
