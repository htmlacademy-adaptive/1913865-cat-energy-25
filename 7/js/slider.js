const min = "0";
const max = "100";

const range = document.querySelector('.rangebar__controls');
const rangeButtonBefore = document.querySelector('.rangebar__button-before');
const rangeButtonAfter = document.querySelector('.rangebar__button-after');
const targetSlideLeft = document.querySelector('.slider__slide-left');
const targetSlideRight = document.querySelector('.slider__slide-right');

targetSlideLeft.style.width = "50%";
targetSlideRight.style.width = "50%";

rangeButtonBefore.addEventListener('click', (event) => {
  range.value = min;
  targetSlideLeft.style.width = max + "%";
  targetSlideRight.style.width = min + "%";
});

rangeButtonAfter.addEventListener('click', (event) => {
  range.value = max;
  targetSlideLeft.style.width = min + "%";
  targetSlideRight.style.width = max + "%";
});

range.addEventListener('input', (event) => {
  targetSlideLeft.style.width = String(max - range.value) + "%";
  targetSlideRight.style.width = String(range.value) + "%";

  //Закомментировать две строки выше, раскомментировать две строки ниже, для изменения работы слайдера
  // targetSlideLeft.style.width = String(range.value) + "%";
  // targetSlideRight.style.width = String(max - range.value) + "%";
});
