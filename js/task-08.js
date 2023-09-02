const loginForm = document.querySelector('.login-form');

// handler - submit
function handlerSubmit(event) {
  event.preventDefault(); // Stop the default action
  const form = event.target;
  const {
    elements: { email, password },
  } = form;
  if (email.value === '' && password.value === '') {
    alert('Email, Password - empty string');
  } else if (email.value === '') {
    alert('Email - empty string');
  } else if (password.value === '') {
    alert('Password - empty string');
  } else {
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    form.reset();
  }
  // console.log(form);
}

loginForm.addEventListener('submit', handlerSubmit);
