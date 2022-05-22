let cooperationStyle = document.querySelector('.cooperation');

if (window.matchMedia("(min-width: 1440px)").matches) {
  cooperationStyle.classList.remove('cooperation--dark');
}

window.addEventListener('resize', function() {
  if (window.matchMedia("(min-width: 1440px)").matches) {
    cooperationStyle.classList.remove('cooperation--dark');
  } else {
    cooperationStyle.classList.add('cooperation--dark');
  }
});
