const textInput = document.querySelector('[data-length="6"]');

function blurHandler(event) {
  event.preventDefault(); // Stop the default action
  const elem = event.target;
  if (textInput.value.length === Number(elem.dataset.length)) {
    textInput.setAttribute('Class', 'valid');
  } else {
    textInput.setAttribute('Class', 'invalid');
  }
}

textInput.addEventListener('blur', blurHandler);
