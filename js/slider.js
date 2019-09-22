const rootSlider = document.getElementById('sliderRoot');

const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');

let sliderStep = 0;
let widthSlider = document.querySelector('.slider__content-list').clientWidth;

leftArrow.addEventListener('click', function(){
  sliderStep -= widthSlider;
  rootSlider.style.transform ="translate(-" + sliderStep + "px)";
});

rightArrow.addEventListener('click', function(){
  sliderStep += widthSlider;
  rootSlider.style.transform ="translate(-" + sliderStep + "px)";
});

// function calculateMaxWidth(w, sliderStep){
//   return (w + sliderStep);
// }
// console.log(rootSlider.childNodes)