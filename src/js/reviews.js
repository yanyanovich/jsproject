import { fetchReviews } from './ajax-request.js';

export const reviews = Swiper => {
  const section = document.querySelector('.reviews');
  if (section) {
    const reviewsEl = section.querySelector('.swiper-wrapper');
    if (!reviewsEl) {
      console.error('Element .swiper-wrapper not found in the DOM');
      return;
    }

    fetchReviews()
      .then(data => {
        const listMarkUp = createListMarkUp(data);
        reviewsEl.insertAdjacentHTML('beforeend', listMarkUp);

        const slider = section.querySelector('.swiper_reviews');
        if (slider) {
          const swiper = new Swiper(slider, {
            slidesPerView: 1,
            autoHeight: true,
            speed: 0,
            navigation: {
              nextEl: section.querySelector('.swiper-button-next'),
              prevEl: section.querySelector('.swiper-button-prev'),
            },
            keyboard: {
              enabled: true,
              onlyInViewport: false,
            },
            allowTouchMove: true,

            breakpoints: {
              768: {
                speed: 600,
                autoHeight: false,
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1440: {
                speed: 600,
                autoHeight: false,
                slidesPerView: 4,
                spaceBetween: 16,
              },
            },
          });
        }
      })
      .catch(err => {
        reviewsEl.innerHTML = '<p class="reviews__notfound">Not found</p>';
      });
  }
  const createLiMarkUp = ({ author, avatar_url, review }) => `
  <li class="swiper-slide">
    <div class="reviews__item__container">
      <div class="reviews__item__photo">
        <img src="${avatar_url}" alt="${author}" />
      </div>
      <h3 class="reviews__item__name">${author}</h3>
      <p class="reviews__item__review">${review}</p>
    </div>
  </li>`;

  const createListMarkUp = arrReviews =>
    arrReviews.map(createLiMarkUp).join('');
};
