export const covers = Swiper => {
  const sliders = document.querySelectorAll('.marquee__slider');
  if (sliders.length > 0) {
    sliders.forEach(slider => {
      const swiper = new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 12000,
        allowTouchMove: false,
        loop: true,
        touchStartPreventDefault: false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        breakpoints: {
          768: {
            spaceBetween: 45,
          },
        },
      });
    });
  }
};
