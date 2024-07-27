import Swiper from 'swiper';
import {
  Autoplay,
  Navigation,
  Pagination,
  Keyboard,
  EffectFade,
  Controller,
} from 'swiper/modules';

import { aboutMe } from './js/about-me.js';
import { burger } from './js/burger.js';
import { faq } from './js/faq.js';
import { form } from './js/form.js';
import { modal } from './js/modal.js';
import { projects } from './js/projects.js';
import { reviews } from './js/reviews.js';
document.addEventListener('DOMContentLoaded', event => {
  Swiper.use([
    Autoplay,
    Navigation,
    Pagination,
    Keyboard,
    EffectFade,
    Controller,
  ]);
  aboutMe(Swiper);
  burger();
  faq();
  form();
  modal();
  projects(Swiper);
  reviews(Swiper);
});
