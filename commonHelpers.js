import{S as c,A as w,N as _,P as h,K as y,E as v,C as b,a as g,b as d}from"./assets/vendor-7b9ec6c0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const q=(o,t)=>{const n=document.querySelector(".about");if(n){const s=n.querySelector(".swiper");new o(s,{slidesPerView:2,autoplay:{delay:1500,disableOnInteraction:!0,pauseOnMouseEnter:!0},spaceBetween:0,loop:!0,mousewheel:!0,keyboard:{enabled:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:n.querySelector(".swiper-button-next")},speed:1e3,grabCursor:!0});const e=n.querySelector(".accordion-container");new t(e,{openOnInit:[0]})}},E=document.querySelector(".header__menu_btn_open"),a=document.querySelector(".header__content"),S=document.querySelector(".header__menu_btn_close"),p=document.querySelector(".header__menu"),L=document.querySelectorAll(".navigation__list_link"),M=Array.from(document.querySelector(".header__navigation_list").children),f=[p.firstElementChild,...M,p.lastElementChild];function O(o){o.key==="Escape"&&l()}function C(){L.forEach(o=>{o.addEventListener("click",t=>{t.preventDefault();const n=o.getAttribute("href").substring(1),s=document.getElementById(n);l(),setTimeout(()=>{s.scrollIntoView({behavior:"smooth"})},350)})})}function m(){const o=document.body;window.innerWidth<768&&(a.classList.contains("header__menu_mob_open")?(o.style.overflow="hidden",f.forEach((t,n)=>{const s=200+n*150;setTimeout(()=>{t.classList.add("mobile__menu_opacity")},s)})):(f.forEach(t=>{t.classList.remove("mobile__menu_opacity")}),o.style.overflow=""))}function P(){window.innerWidth<768?a.classList.toggle("header__menu_mob_open"):a.classList.toggle("header__menu_open"),m(),S.addEventListener("click",l),window.document.addEventListener("keydown",O)}function l(){a.classList.remove("header__menu_mob_open"),m()}const k=()=>{E.addEventListener("click",P),C()},j=o=>{new o(".faq-accordion",{duration:400,showMultiple:!0,elementClass:"faq-accordion-item",triggerClass:"question-wrapper",panelClass:"faq-accordion-panel"})},A=()=>{console.log("form-js-file")},V=()=>{console.log("modal-js-file")},B=o=>{const t=document.querySelector(".projects");if(t){const n=t.querySelector(".projects-js-list");new o(n,{speed:600,navigation:{nextEl:t.querySelector(".swiper-button-next"),prevEl:t.querySelector(".swiper-button-prev")},keyboard:{enabled:!0,onlyInViewport:!1},allowTouchMove:!0})}},I=async()=>{const o=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!o.ok)throw new Error(o.status);return await o.json()},T=o=>{const t=document.querySelector(".reviews");if(t){const e=t.querySelector(".swiper-wrapper");if(!e){console.error("Element .swiper-wrapper not found in the DOM");return}I().then(r=>{const i=s(r);e.insertAdjacentHTML("beforeend",i);const u=t.querySelector(".swiper_reviews");u&&new o(u,{slidesPerView:1,autoHeight:!0,speed:0,navigation:{nextEl:t.querySelector(".swiper-button-next"),prevEl:t.querySelector(".swiper-button-prev")},keyboard:{enabled:!0,onlyInViewport:!1},allowTouchMove:!0,breakpoints:{768:{speed:600,autoHeight:!1,slidesPerView:2,spaceBetween:16},1440:{speed:600,autoHeight:!1,slidesPerView:4,spaceBetween:16}}})}).catch(r=>{e.innerHTML='<p class="reviews__notfound">Not found</p>'})}const n=({author:e,avatar_url:r,review:i})=>`
  <li class="swiper-slide">
    <div class="reviews__item__container">
      <div class="reviews__item__photo">
        <img src="${r}" alt="${e}" />
      </div>
      <h3 class="reviews__item__name">${e}</h3>
      <p class="reviews__item__review">${i}</p>
    </div>
  </li>`,s=e=>e.map(n).join("")},x=o=>{const t=document.querySelectorAll(".marquee__slider");t.length>0&&t.forEach(n=>{new o(n,{slidesPerView:"auto",spaceBetween:30,speed:12e3,allowTouchMove:!1,loop:!0,touchStartPreventDefault:!1,autoplay:{delay:0,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{768:{spaceBetween:45}}})})};document.addEventListener("DOMContentLoaded",o=>{c.use([w,_,h,y,v,b]),g.init({duration:1200,once:!0,offset:window.innerHeight/30}),q(c,d),k(),j(d),A(),V(),B(c),T(c),x(c)});
//# sourceMappingURL=commonHelpers.js.map
