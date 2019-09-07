let btn = document.getElementById("fullscreen");
const fullScreen = document.querySelector('.hamburger-menu');

const activeclass = 'hamburger-menu--active';

btn.addEventListener('click', function() {
  fullScreen.classList.add(activeclass);
});

let x = document.getElementById("open");
const closeFullScreen = document.querySelector('.hamburger-menu');

const deactiveclass = 'hamburger-menu--active';

x.addEventListener('click', function() {
  closeFullScreen.classList.remove(deactiveclass);
});