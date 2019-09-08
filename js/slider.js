const rootSlider = document.getElementById('sliderRoot');

const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');

let sliderStep = 0;
let w = document.documentElement.clientWidth;

leftArrow.addEventListener('click', function(){
  sliderStep -= 920;
  rootSlider.style.transform ="translate(-" + sliderStep + "px)";
});

rightArrow.addEventListener('click', function(){
  sliderStep += 920;
  rootSlider.style.transform ="translate(-" + sliderStep + "px)";
});

function calculateMaxWidth(w, sliderStep){
  return (w + sliderStep);
}
console.log(rootSlider.childNodes)