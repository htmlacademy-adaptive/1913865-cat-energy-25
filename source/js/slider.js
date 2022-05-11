const min = "0";
const max = "100";

const range = document.querySelector('.rangebar__controls');
const rangeButtonBefore = document.querySelector('.rangebar__button-before');
const rangeButtonAfter = document.querySelector('.rangebar__button-after');
const targetSlideLeft = document.querySelector('.slider__slide-left');
const targetSlideRight = document.querySelector('.slider__slide-right');

targetSlideLeft.style.width = "50%";
targetSlideRight.style.width = "50%";

if (window.matchMedia("(max-width: 767px)").matches) {
  //Устанавливаем свойства для мобильной версии
  range.disabled = true;
  targetSlideLeft.style.width = "100%";
  targetSlideRight.style.width = "0%";
}

window.addEventListener('resize', function() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    //Обнуляем свойства мобильной версии при resize
    range.disabled = false;
    range.style.setProperty('--left-offset', "0%");
    targetSlideLeft.style.width = "50%";
    targetSlideRight.style.width = "50%";
  } else {
    range.disabled = true;
    range.value = "50";
    range.style.setProperty('--left-offset', "0%");
    targetSlideLeft.style.width = "100%";
    targetSlideRight.style.width = "0%";
  }
});

rangeButtonBefore.addEventListener('click', (event) => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    range.value = min;
    targetSlideLeft.style.width = max + "%";
    targetSlideRight.style.width = min + "%";
  } else {
    //Свойтсво для мобильной верссии. Смещение в крайнее левое положение
    range.style.setProperty('--left-offset', "0%");
    targetSlideLeft.style.width = "100%";
    targetSlideRight.style.width = "0%";
  }
});

rangeButtonAfter.addEventListener('click', (event) => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    range.value = max;
    targetSlideLeft.style.width = min + "%";
    targetSlideRight.style.width = max + "%";
  } else {
    //Свойтсво для мобильной верссии. Смещение в крайнее правое положение
    range.style.setProperty('--left-offset', "50%");
    targetSlideLeft.style.width = "0%";
    targetSlideRight.style.width = "100%";
  }
});

range.addEventListener('input', (event) => {
  targetSlideLeft.style.width = String(max - range.value) + "%";
  targetSlideRight.style.width = String(range.value) + "%";

  //Закомментировать две строки выше, раскомментировать две строки ниже, для изменения работы слайдера
  // targetSlideLeft.style.width = String(range.value) + "%";
  // targetSlideRight.style.width = String(max - range.value) + "%";
});
