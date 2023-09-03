const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = [];
const list = document.getElementById('ingredients');
ingredients.forEach((element) => {
  const item = document.createElement('li');
  item.textContent = element.toString();
  item.classList.add('item');
  items.push(item);
});

list.append(...items);

// Array as a simple type (not an object).
// No array methods
//
// for (let i = 0; i < 6; i += 1) {
//  items[i] = document.createElement('li');
//  items[i].textContent = ingredients[i].toString();
//  items[i].classList.add('item');
//  list.append(items[i]);
// }

console.log(items);
