import{S as l,A as f,N as w,P as y,K as h,E as g,C as m,a as v}from"./assets/vendor-9eacdfbd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const S=r=>{console.log(r)},q=()=>{console.log("burger-js-file")},_=()=>{const r=document.querySelectorAll(".faq");r.length>0&&r.forEach(t=>{const s=t.querySelectorAll(".item-js");s.forEach((i,e)=>{const o=i.querySelector(".question-js"),n=i.querySelector(".answer-js");o.addEventListener("click",()=>{const c=n.style.height===`${n.scrollHeight}px`;s.forEach((a,u)=>{const d=a.querySelector(".answer-js"),p=a.querySelector(".item-js svg");d.style.height=u===e&&!c?`${d.scrollHeight}px`:"0px",p.style.transform=u===e&&!c?"rotate(180deg)":"rotate(0deg)"})})})})},b=()=>{console.log("form-js-file")},E=()=>{console.log("modal-js-file")},j=r=>{const t=document.querySelector(".projects");if(t){const s=t.querySelector(".projects-js-list");new r(s,{speed:600,navigation:{nextEl:t.querySelector(".swiper-button-next"),prevEl:t.querySelector(".swiper-button-prev")},keyboard:{enabled:!0,onlyInViewport:!1},allowTouchMove:!0})}},M=async()=>{const r=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!r.ok)throw new Error(r.status);return await r.json()},L=r=>{const t=document.querySelector(".reviews");if(t){const e=t.querySelector(".swiper-wrapper");if(!e){console.error("Element .swiper-wrapper not found in the DOM");return}M().then(o=>{console.log(o);const n=i(o);e.insertAdjacentHTML("beforeend",n);const c=t.querySelector(".swiper_reviews");c&&new r(c,{slidesPerView:1,autoHeight:!0,speed:0,navigation:{nextEl:t.querySelector(".swiper-button-next"),prevEl:t.querySelector(".swiper-button-prev")},keyboard:{enabled:!0,onlyInViewport:!1},allowTouchMove:!0,breakpoints:{768:{speed:600,autoHeight:!1,slidesPerView:2,spaceBetween:16},1440:{speed:600,autoHeight:!1,slidesPerView:4,spaceBetween:16}}})}).catch(o=>{e.innerHTML='<p class="reviews__notfound">Not found</p>'})}const s=({author:e,avatar_url:o,review:n})=>`
  <li class="swiper-slide">
    <div class="reviews__item__container">
      <div class="reviews__item__photo">
        <img src="${o}" alt="${e}" />
      </div>
      <h3 class="reviews__item__name">${e}</h3>
      <p class="reviews__item__review">${n}</p>
    </div>
  </li>`,i=e=>e.map(s).join("")},O=r=>{const t=document.querySelectorAll(".marquee__slider");t.length>0&&t.forEach(s=>{new r(s,{slidesPerView:"auto",spaceBetween:30,speed:12e3,allowTouchMove:!1,loop:!0,touchStartPreventDefault:!1,autoplay:{delay:0,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{768:{spaceBetween:45}}})})};document.addEventListener("DOMContentLoaded",r=>{l.use([f,w,y,h,g,m]),v.init({duration:1200,once:!0,offset:window.innerHeight/30}),S(l),q(),_(),b(),E(),j(l),L(l),O(l)});
//# sourceMappingURL=commonHelpers.js.map
