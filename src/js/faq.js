export const faq = () => {
  const accordionSections = document.querySelectorAll('.faq');
  if (accordionSections.length > 0) {
    accordionSections.forEach(accordionSection => {
      const faqItems = accordionSection.querySelectorAll('.item-js');
      faqItems.forEach((faqItem, index) => {
        const header = faqItem.querySelector('.question-js');
        const content = faqItem.querySelector('.answer-js');

        header.addEventListener('click', () => {
          const isOpen = content.style.height === `${content.scrollHeight}px`;

          faqItems.forEach((item, i) => {
            const c = item.querySelector('.answer-js');
            const a = item.querySelector('.item-js svg');

            c.style.height =
              i === index && !isOpen ? `${c.scrollHeight}px` : '0px';
            a.style.transform =
              i === index && !isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
          });
        });
      });
    });
  }
};
