const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const item = [];
item[0] = document.createElement('li');
item[0].textContent = ingredients[0].toString();
item[0].classList.add('item');

item[1] = document.createElement('li');
item[1].textContent = ingredients[1].toString();
item[1].classList.add('item');

item[2] = document.createElement('li');
item[2].textContent = ingredients[2].toString();
item[2].classList.add('item');

item[3] = document.createElement('li');
item[3].textContent = ingredients[3].toString();
item[3].classList.add('item');

item[4] = document.createElement('li');
item[4].textContent = ingredients[4].toString();
item[4].classList.add('item');

item[5] = document.createElement('li');
item[5].textContent = ingredients[5].toString();
item[5].classList.add('item');

console.log(item);

const list = document.getElementById('ingredients');
list.append(item[0], item[1], item[2], item[3], item[4], item[5]);
