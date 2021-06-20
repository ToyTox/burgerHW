document.addEventListener('DOMContentLoaded', () => {
  const rootSlider = document.getElementById('sliderRoot');
  const maxWidth = document.getElementById('sliderRoot').offsetWidth;
  const leftArrow = document.querySelector('#left');
  const rightArrow = document.querySelector('#right');
  let sliderStep = 0;
  let widthSlide = document.querySelector('.slider__content-item').clientWidth;

  leftArrow.addEventListener('click', () => {
    if (sliderStep === 0) {
      sliderStep = maxWidth;
    }

    sliderStep -= widthSlide;
    rootSlider.style.transform = `translate(-${sliderStep}px)`;
  });

  rightArrow.addEventListener('click', () => {
    sliderStep += widthSlide;

    if (sliderStep === maxWidth) {
      sliderStep = 0;
    }

    rootSlider.style.transform = `translate(-${sliderStep}px)`;
  });
});
