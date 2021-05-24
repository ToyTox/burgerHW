$(function () {
  const btns = [$('.team-accordeon__touch')];

  btns.forEach((item) => {
    item.click(function (e) {
      e.preventDefault();

      item.parent().removeClass('active');

      $(this).parent().addClass('active');
    });
  });
});
