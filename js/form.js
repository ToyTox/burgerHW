const myForm = document.getElementById('myForm');
const send = document.getElementById('send');

send.addEventListener('click', function(e){
  e.preventDefault();

  if (validateForm(myForm)) {
    const data = {
      name: myForm.elements.name.value,
      phone: myForm.elements.phone.value
    };
    // console.log(data);

    const xhr = XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(JSON.stringify(data));
    xhr.addEventListener('load', () =>{
      if(xhr.response.status) {
        alert('Ваш заказ принят');
      }
    });
  }
});

function validateForm(form) {
  let valid = true;

  if(!validateField(form.elements.name)) {
    valid = false;
  }
  
  if(!validateField(form.elements.phone)) {
    valid = false;
  }

  return valid;
}

function validateField(field) {
  return field.checkValidity();
}