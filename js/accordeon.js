// $(function () {
//   const btn = [$('.menu-accordeon__item')];
//   const activeClass = 'menu-accordeon__item-active';

//   btn.forEach((item) => {
//     item.click(function (e) {
//       e.preventDefault();

//       item.removeClass(activeClass);

//       $(this).addClass(activeClass);
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelectorAll('.menu-accordeon__item');
  const activeClass = 'menu-accordeon__item-active';

  btn.forEach((item) => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      btn.forEach((i) => i.classList.remove(activeClass));

      item.classList.remove(activeClass);
      event.currentTarget.classList.add(activeClass);
    });
  });
});
