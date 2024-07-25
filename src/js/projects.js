export const projects = Swiper => {
  const section = document.querySelector('.projects');
  if (section) {
    const slider = section.querySelector('.projects-js-list');

    const swiper = new Swiper(slider, {
      speed: 600,
      navigation: {
        nextEl: section.querySelector('.swiper-button-next'),
        prevEl: section.querySelector('.swiper-button-prev'),
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      allowTouchMove: true,
    });
  }
};
