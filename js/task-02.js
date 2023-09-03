const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const item = [];
const list = document.getElementById('ingredients');

for (let i = 0; i < 6; i += 1) {
  item[i] = document.createElement('li');
  item[i].textContent = ingredients[i].toString();
  item[i].classList.add('item');
  list.append(item[i]);
}

console.log(item);
