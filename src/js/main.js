document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const display = document.querySelector('.maincontent');
  // const currentSection = document.querySelector('section.active');
  // const next = currentSection.nextElementSibling;
  // const prev = currentSection.previousElementSibling;
  
  let sectionIndex;

  sections.forEach((section, i) => {
    if (section.classList.contains('active')) {
      sectionIndex = i;
      console.log(sectionIndex);
    }
  });

  const performTransitionForward = index => {
    const position = `${(index + 1) * -100}%`;
    
    sections[sectionIndex].classList.remove('active');
    sections[sectionIndex + 1].classList.add('active');

    display.style.cssText = `transform: translateY(${position})`;

    sectionIndex++;
  }

  const performTransitionBackward = index => {
    const position = `${(index - 1) * -100}%`;
    
    sections[sectionIndex].classList.remove('active');
    sections[sectionIndex - 1].classList.add('active');

    display.style.cssText = `transform: translateY(${position})`;

    sectionIndex--;
  }

  document.addEventListener('wheel', e => {
    const delta = e.deltaY;
    
    if(delta > 0) {
      // console.log();
      performTransitionForward(sectionIndex);
    }

    if(delta < 0) {
      // console.log();
      performTransitionBackward(sectionIndex)
    }
  });
});