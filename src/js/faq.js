export const faq = () => {
};

document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const arrow = this.querySelector('.accordion-arrow');

            if (content.style.display === 'block') {
                content.style.display = 'none';
                arrow.style.transform = 'rotate(0deg)';
            } else {
                content.style.display = 'block';
                arrow.style.transform = 'rotate(180deg)';
            }

            this.classList.toggle('active');
        });
    });
});

