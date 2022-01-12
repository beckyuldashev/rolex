/* =========== SHOW MENU ============ */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* =========== REMOVE MENU MOBILE ============ */
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');

  navMenu.classList.remove('show-menu');
};

navLinks.forEach(item => {
  item.addEventListener('click', linkAction);
});


/* =========== CHANGE BACKGROUND HEADER ============ */
const scrollHeader = () => {
  const header = document.getElementById('header');

  // if (this.scrollY >= 80) {
  //   header.classList.add('scroll-header');
  // } else {
  //   header.classList.remove('scroll-header');
  // }

  this.scrollY >= 80 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
};

window.addEventListener('scroll', scrollHeader);


/* =========== TESTIMONIAL SWIPER JS ============ */
const testimonialSwiper = new Swiper('.testimonial-swiper', {
  loop: 'true',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/* =========== NEW SWIPER JS ============ */
const newSwiper = new Swiper('.new-swiper', {
  loop: 'true',

  breakpoints: {
    576: {
      slidesPerView: 2
    },

    768: {
      slidesPerView: 3
    },

    1024: {
      slidesPerView: 4
    }
  },
});

/* =========== CURRENT DATE (year) ============ */
const date = document.getElementById('date');
const currentYear = new Date().getFullYear();
date.textContent = currentYear;