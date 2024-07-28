export const faq = Accordion => {
  const faqAccordion = new Accordion('.faq-accordion', {
    duration: 400,
    showMultiple: true,
    elementClass: 'faq-accordion-item',
    triggerClass: 'question-wrapper',
    panelClass: 'faq-accordion-panel',
  });
};
