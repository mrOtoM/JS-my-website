'use strict';

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const section1 = document.querySelector('#section--1');

// Page Navbar smooth scrolling - event delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

// Tabbed component
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');
  // Active content of information
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation - nav_link
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibLings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    sibLings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.7));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky nav
const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function () {
  if (this.window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});
