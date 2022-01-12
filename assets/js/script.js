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


/* =========== SCROLL SECTIONS ACTIVE LINK ============ */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach(element => {
    const sectionHeight = element.offsetHeight;
    const sectionTop = element.offsetTop - 56;
    const sectionId = element.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);


/* =========== SHOW SCROLL UP ============ */
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');

  if (this.scrollY >= 400) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp);

/* =========== SHOW CART ============ */
const cart = document.getElementById('cart');
const cartShop = document.getElementById('cart-shop');
const cartClose = document.querySelector('.cart__close');

if (cartShop) {
  cartShop.addEventListener('click', () => {
    cart.classList.add('show-cart');
  });
}

if (cartClose) {
  cartClose.addEventListener('click', () => {
    cart.classList.remove('show-cart');
  });
}