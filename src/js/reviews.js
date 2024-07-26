import { ajaxRequest } from './ajax-request.js';
export const reviews = Swiper => {
  console.log(Swiper);

  ajaxRequest();
};

const reviewsEl = document.querySelector('.swiper_reviews');

fetch('https://portfolio-js.b.goit.study/api/reviews')
  .then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  })
  .then(data => {
    console.log(data);
    const listMarkUp = createListMarkUp(data);
    reviewsEl.insertAdjacentHTML('beforeend', listMarkUp);
  })
  .catch(err => {
    console.error('Service not found');
  });

const createLiMarkUp = ({
  author,
  avatar_url,
  review,
}) => `<img class="js-reviews-photo" src="${avatar_url}" alt="${author}" />
      <h3 class="js-reviews-name">${author}</h3>
      <p class="js-user-review">${review}</p>`;
const createListMarkUp = arrReviews => arrReviews.map(createLiMarkUp).join('');
