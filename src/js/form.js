import iziToast from 'izitoast';
import imageUrlError from '../img/footer/error.svg';
import { loadFromLS, saveToLS } from './local-storage.js';
import { submitForm } from './ajax-request.js';

export const form = () => {
  const refs = {
    contactForm: document.querySelector('.footer-form'),
    email: document.getElementById('user-email'),
    comments: document.getElementById('user-comment'),
    backdropEl: document.querySelector('.footer-backdrop'),
    modalEl: document.querySelector('.modal'),
    closeModalBtnEl: document.querySelector('.close-btn'),
    modalTitleEl: document.querySelector('.modal-title'),
    modalMessageEl: document.querySelector('.modal-message'),
  };

  const storageKey = 'feedback-form-state';
  const savedFormData = loadFromLS(storageKey);
  const formData = {
    email: '',
    comments: '',
  };

  if (savedFormData) {
    formData.email = savedFormData.email;
    formData.comments = savedFormData.comments;
  }

  refs.email.value = formData.email;
  refs.comments.value = formData.comments;

  refs.contactForm.addEventListener('input', e => {
    formData[e.target.name] = e.target.value.trim();
    saveToLS(storageKey, formData);
  });

  refs.contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = refs.email.value;
    const comments = refs.comments.value;

    if (!email || !comments) {
      iziToast.error({
        title: 'Error!',
        titleSize: '16',
        titleColor: '#fafafa',
        message: 'Please fill in both fields',
        messageSize: '16',
        messageColor: '#fafafa',
        backgroundColor: 'var(--button-text)',
        theme: 'dark',
        position: 'center',
        closeOnEscape: true,
        closeOnClick: true,
        iconUrl: imageUrlError,
      });
      return;
    }

    const dataLoad = {
      email: email,
      comment: comments,
    };

    try {
      const data = await submitForm(dataLoad);
      if (data.error) {
        iziToast.error({
          title: 'Error!',
          titleSize: '16',
          titleColor: '#fafafa',
          message: `${data.error}`,
          messageSize: '16',
          messageColor: '#fafafa',
          backgroundColor: 'var(--button-text)',
          theme: 'dark',
          position: 'bottomCenter',
          closeOnEscape: true,
          closeOnClick: true,
          iconUrl: imageUrlError,
        });
      } else {
        localStorage.removeItem(storageKey); // Очищення форми
        refs.contactForm.reset();
      }

      refs.modalTitleEl.textContent = data.title;
      refs.modalMessageEl.textContent = data.message;
      openModalWindow();
    } catch (error) {
      console.log(error.message);
      iziToast.error({
        title: 'Error!',
        titleSize: '16',
        titleColor: '#fafafa',
        message: `${error.message}`,
        messageSize: '16',
        messageColor: '#fafafa',
        backgroundColor: 'var(--button-text)',
        theme: 'dark',
        position: 'bottomCenter',
        closeOnEscape: true,
        closeOnClick: true,
        iconUrl: imageUrlError,
      });
    }
  });

  function openModalWindow() {
    refs.backdropEl.classList.add('is-open-footer');
    if (!document.body.classList.contains('scroll-off')) {
      document.body.classList.add('scroll-off');
    }
  }

  function closeModalWindow() {
    refs.backdropEl.classList.remove('is-open-footer');
    if (document.body.classList.contains('scroll-off')) {
      document.body.classList.remove('scroll-off');
    }
  }

  refs.closeModalBtnEl.addEventListener('click', closeModalWindow);

  document.addEventListener('keydown', e => {
    if (
      e.key === 'Escape' &&
      refs.backdropEl.classList.contains('is-open-footer')
    ) {
      closeModalWindow();
    }
  });

  document.addEventListener('click', e => {
    const click = e.composedPath().includes(refs.modalEl);
    if (!click) {
      closeModalWindow();
    }
  });
};
