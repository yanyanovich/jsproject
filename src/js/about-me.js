import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const aboutMe = Swiper => {
  const triggers = document.querySelectorAll('.question-js');
  const answers = document.querySelectorAll('.answer-js');
  answers.forEach(answer => {
    answer.style.maxHeight = answer.scrollHeight + 'px';
  });


  triggers.forEach(trigger => {
    let triggerSiblings = trigger
      .closest('.item-js')
      .querySelectorAll('.question-js');
    let contents = trigger.closest('.item-js').querySelectorAll('.answer-js');
    trigger.addEventListener('click', e => {
      triggerSiblings.forEach(triggerSibling => {
        if (e.target.closest('.question-js') !== triggerSibling) {
          triggerSibling.classList.remove('active');
        }
      });
      contents.forEach(content => {
        if (e.target.closest('.question-js').nextElementSibling !== content) {
          content.style.maxHeight = '0px';
          content.classList.add('hidden');
        } else {
          if (content.classList.contains('hidden')) {
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            content.style.maxHeight = '0px';
          }
          content.classList.toggle('hidden');
        }
      });
      trigger.classList.toggle('active');
      trigger.classList.remove('hover');
    });
  });
};

import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';


// Ініціалізація Swiper
const swiper = new Swiper('.swiper-container', {
  modules: [Navigation, Pagination, Scrollbar],
  spaceBetween: 6,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});