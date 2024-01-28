'use strict';

const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const elems = event.target.elements;
  if (elems.email.value === '' || elems.password.value === '') {
    alert('All form fields must be filled in');
  } else {
    const data = {
      email: elems.email.value,
      password: elems.password.value,
    };
    form.reset();
    console.log(data);
  }
});
