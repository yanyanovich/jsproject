import { ajaxRequest } from './ajax-request.js';
export const reviews = Swiper => {
  console.log(Swiper);

  ajaxRequest();
};

const reviewsEl = document.querySelector('.js-reviews_container');

// fetch('https://swiperjs.com/swiper-api')
//   .then(res => {
//     return res.json();
//   })
//   .then(data => {
//     console.log(data);
//   });

// розмітка для данних з бекенду
//
// <li>
// <img src="" alt="" />
// <h3></h3>
// <p></p>
// </li>
