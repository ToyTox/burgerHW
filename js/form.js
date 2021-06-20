const form = document.getElementById('myForm');
const send = document.getElementById('send');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const data = new FormData();
  data.append('name', document.getElementById('inputName'));
  data.append('phone', document.getElementById('inputPhone'));
  data.append('comment', 'comment');
  data.append('to', 'to@mail.ru');

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
  xhr.onload = function () {
    alert(xhr.response);
  };
  xhr.onerror = function () {
    alert(Ошибка);
  };
  xhr.send(data);
  console.log(data);
});
