const min="0",max="100",range=document.querySelector(".rangebar__controls"),rangeButtonBefore=document.querySelector(".rangebar__button-before"),rangeButtonAfter=document.querySelector(".rangebar__button-after"),targetSlideLeft=document.querySelector(".slider__slide-left"),targetSlideRight=document.querySelector(".slider__slide-right");targetSlideLeft.style.width="50%",targetSlideRight.style.width="50%",window.matchMedia("(max-width: 767px)").matches&&(range.disabled=!0,targetSlideLeft.style.width="100%",targetSlideRight.style.width="0%",range.value="42"),window.addEventListener("resize",(function(){window.matchMedia("(min-width: 768px)").matches?(range.disabled=!1,range.style.setProperty("--left-offset","0%"),targetSlideLeft.style.width="50%",targetSlideRight.style.width="50%"):(range.disabled=!0,range.value="42",range.style.setProperty("--left-offset","0%"),targetSlideLeft.style.width="100%",targetSlideRight.style.width="0%")})),rangeButtonBefore.addEventListener("click",(e=>{window.matchMedia("(min-width: 768px)").matches?(range.value="0",targetSlideLeft.style.width="100%",targetSlideRight.style.width="0%"):(range.style.setProperty("--left-offset","0%"),targetSlideLeft.style.width="100%",targetSlideRight.style.width="0%")})),rangeButtonAfter.addEventListener("click",(e=>{window.matchMedia("(min-width: 768px)").matches?(range.value=max,targetSlideLeft.style.width="0%",targetSlideRight.style.width="100%"):(range.style.setProperty("--left-offset","58%"),targetSlideLeft.style.width="0%",targetSlideRight.style.width="100%")})),range.addEventListener("input",(e=>{targetSlideLeft.style.width=String(max-range.value)+"%",targetSlideRight.style.width=String(range.value)+"%"}));