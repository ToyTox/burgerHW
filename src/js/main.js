document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const display = document.querySelector('.maincontent');
  const dots = document.querySelectorAll('.fixed-menu__item');


  let sectionIndex;
  let dotIndex;

  sections.forEach((section, i) => {
    if (section.classList.contains('active')) {
      sectionIndex = i;
      // console.log(sectionIndex);
    }
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      prevIndex = 0;
      dotIndex = i;

      if (dotIndex > prevIndex) {
        performTransitionForward(dotIndex);
        prevIndex = dotIndex;
        console.log(dotIndex);
      } else {
        performTransitionBackward(dotIndex);
        console.log(dotIndex);
      }
    })
  })

  document.addEventListener('keydown', (e) => {
    if (e.code == 'ArrowDown') {
      performTransitionForward(sectionIndex);
    } else if (e.code == 'ArrowUp') {
      performTransitionBackward(sectionIndex);
    }
  })

  // const sectionTransition = (diretion) => {

  //   if (direction == next) {
  //     performTransitionForward(sectionIndex);
  //   } else if (diretion == prev) {
  //     performTransitionBackward(sectionIndex);
  //   }
  // }

  const performTransitionForward = (index) => {
    const position = `${(index + 1) * -100}%`;

    sections[sectionIndex].classList.remove('active');
    sections[sectionIndex + 1].classList.add('active');

    dots[sectionIndex].classList.remove('fixed-menu__item--active');
    dots[sectionIndex + 1].classList.add('fixed-menu__item--active');

    display.style.cssText = `transform: translateY(${position})`;

    sectionIndex++;
  };

  const performTransitionBackward = (index) => {
    const position = `${(index - 1) * -100}%`;

    sections[sectionIndex].classList.remove('active');
    sections[sectionIndex - 1].classList.add('active');

    dots[sectionIndex].classList.remove('fixed-menu__item--active');
    dots[sectionIndex - 1].classList.add('fixed-menu__item--active');

    display.style.cssText = `transform: translateY(${position})`;

    sectionIndex--;
  };

  document.addEventListener('wheel', (e) => {
    const delta = e.deltaY;

    if (delta > 0) {
      // console.log();
      performTransitionForward(sectionIndex);
    }

    if (delta < 0) {
      // console.log();
      performTransitionBackward(sectionIndex);
    }
  });
});
