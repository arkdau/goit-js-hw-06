function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');
const input = document.getElementsByTagName('input');

function createBoxes(amount) {
  let markup = '<div style = "width: 30px; height: 30px; background-color: red;"></div>';
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i += 1) {
    markup = `<div class = "Box" style = "width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()};"></div>`;
    boxes.insertAdjacentHTML('beforeend', markup);
    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  const boxesChilds = document.querySelectorAll('.Box');
  boxesChilds.forEach((element) => {
    element.remove();
  });
}

function handlerBtn(event) {
  event.preventDefault(); // Stop the default actionconst
  const elem = event.target;

  if (elem.dataset.create === '') {
    createBoxes(input.item(0).value);
  }

  if (elem.dataset.destroy === '') {
    destroyBoxes();
  }
}

btnCreate.addEventListener('click', handlerBtn);
btnDestroy.addEventListener('click', handlerBtn);
