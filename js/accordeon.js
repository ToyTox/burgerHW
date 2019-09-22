$(function() {
  
  const btn = $('.menu-accordeon__item');
  const activeClass = '.menu-accordeon__item-active';

  btn.click(function(e) {
    e.preventDefault();
    

    if ($(this).hasClass(activeClass)) {
      $(this).removeClass(activeClass);
    } else {
      
      $(this).addClass(activeClass);
    }
  });
});