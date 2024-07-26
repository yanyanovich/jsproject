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