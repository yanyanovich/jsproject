export const aboutMe = (Swiper, Accordion) => {
  const section = document.querySelector('.about');
  if (section) {
    const slider = section.querySelector('.swiper');
    const swiper = new Swiper(slider, {
      slidesPerView: 2,
      autoplay: {
        delay: 1500,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      },
      spaceBetween: 0,
      loop: true,
      mousewheel: true,
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
        },

        1440: {
          slidesPerView: 6,
        },
      },
      navigation: {
        nextEl: section.querySelector('.swiper-button-next'),
      },
      speed: 1000,
      grabCursor: true,
    });
    const acordeon = section.querySelector('.accordion-container');
    new Accordion(acordeon, {
      openOnInit: [0],
    });
  }
};
