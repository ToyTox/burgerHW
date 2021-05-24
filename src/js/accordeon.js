$(function () {
  const btn = [$('.menu-accordeon__item')];
  const activeClass = 'menu-accordeon__item-active';

  btn.forEach((item) => {
    item.click(function (e) {
      e.preventDefault();

      item.removeClass(activeClass);

      $(this).addClass(activeClass);
    });
  });
});
