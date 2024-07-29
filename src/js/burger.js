const headerBtnOpen = document.querySelector('.header__menu_btn_open');
const headerContent = document.querySelector('.header__content');
const headerBtnClose = document.querySelector('.header__menu_btn_close');
const menuContainer = document.querySelector('.header__menu');
const headerLinks = document.querySelectorAll('.navigation__list_link');

const navList = Array.from(
  document.querySelector('.header__navigation_list').children
);

const headerElements = [
  menuContainer.firstElementChild,
  ...navList,
  menuContainer.lastElementChild,
];

function handleButtonClose(e) {
  if (e.key === 'Escape') {
    closeMobileMenu();
  }
}
function scrollToSection() {
  const footerId = document.querySelector('#footer');
  const orderBtn = document.querySelector('.header__action_btn');
  if (orderBtn) {
    orderBtn.addEventListener('click', e => {
      e.preventDefault();
      if (headerContent.classList.contains('header__menu_mob_open')) {
        closeMobileMenu();
        setTimeout(() => {
          footerId.scrollIntoView({ behavior: 'smooth' });
        }, 350);
      } else {
        footerId.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  headerLinks.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const targetId = el.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      closeMobileMenu();
      setTimeout(() => {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    });
  });
}
function hiddenContent() {
  const body = document.body;
  if (window.innerWidth < 768) {
    if (headerContent.classList.contains('header__menu_mob_open')) {
      body.style.overflow = 'hidden';
      headerElements.forEach((child, index) => {
        const delay = 200 + index * 150;
        setTimeout(() => {
          child.classList.add('mobile__menu_opacity');
        }, delay);
      });
    } else {
      headerElements.forEach(child => {
        child.classList.remove('mobile__menu_opacity');
      });
      body.style.overflow = '';
    }
  }
}

function showMobileMenu() {
  window.innerWidth < 768
    ? headerContent.classList.add('header__menu_mob_open')
    : headerContent.classList.toggle('header__menu_open');

  hiddenContent();
  headerBtnClose.addEventListener('click', closeMobileMenu);
  window.document.addEventListener('keydown', handleButtonClose);
}
function closeMobileMenu() {
  headerContent?.classList.remove('header__menu_mob_open');
  headerContent?.classList.remove('header__menu_open');
  hiddenContent();
}

export const burger = () => {
  headerBtnOpen.addEventListener('click', showMobileMenu);
  scrollToSection();
};
