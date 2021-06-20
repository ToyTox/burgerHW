document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelectorAll('.team-accordeon__touch');
  const allMembers = document.querySelectorAll('.team-accordeon__desc');
  const accordeonItems = document.querySelectorAll('.team-accordeon__item');

  btn.forEach(function (item, i) {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      allMembers.forEach((i) =>
        i.classList.remove('team-accordeon__desc_expanded'),
      );
      accordeonItems.forEach((i) => i.classList.remove('active'));

      allMembers[i].classList.add('team-accordeon__desc_expanded');
      accordeonItems[i].classList.add('active');
    });
  });
});
