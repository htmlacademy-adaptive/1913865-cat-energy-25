let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

if (window.matchMedia("(min-width: 768px)").matches) {
  navMain.classList.remove('main-nav--closed')
} else {
  navMain.classList.add('main-nav--closed')
};

window.addEventListener('resize', function() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    navMain.classList.remove('main-nav--closed')
  }
});

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--closed')
});
