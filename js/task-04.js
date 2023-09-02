let counterValue = 0;

const span = document.getElementById('value');

function SpanCont(value) {
  span.innerText = value;
}

function clickHandler(event) {
  event.preventDefault(); // Stop the default action
  const elem = event.target;
  // You can access the data attributes via the dataset property:
  if (elem.dataset.action === 'decrement') {
    counterValue -= 1;
    // console.log(elem.dataset.action);
  }
  if (elem.dataset.action === 'increment') {
    counterValue += 1;
    // console.log(elem.dataset.action);
  }
  console.log(counterValue);
  SpanCont(counterValue);
}

const btnDec = document.querySelector('[data-action=decrement]');
btnDec.addEventListener('click', clickHandler);

const btnInc = document.querySelector('[data-action=increment]');
btnInc.addEventListener('click', clickHandler);
