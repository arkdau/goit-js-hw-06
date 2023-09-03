// const list = document.querySelector('.item');
const list = document.getElementById('categories');

const numCategories = list.childElementCount;
console.log('Number of categories: ', numCategories);
console.log();

list.querySelectorAll('.item').forEach((element) => {
  const strCategory = element.firstElementChild.innerText;
  const numChildElement = element.getElementsByTagName('ul').item(0).childElementCount;
  console.log('Category: ', strCategory);
  console.log('Elements: ', numChildElement);
  console.log();
});
