// const list = document.querySelector('.item');
const list = document.getElementById('categories');

console.log(`Number of categories: ${list.childElementCount}`);
console.log();
console.log(`Category: ${list.querySelectorAll('.item')[0].firstElementChild.innerText}`);
console.log(`Elements: ${list.querySelectorAll('.item')[0].getElementsByTagName('ul').item(0).childElementCount}`);
console.log();
console.log(`Category: ${list.querySelectorAll('.item')[1].firstElementChild.innerText}`);
console.log(`Elements: ${list.querySelectorAll('.item')[1].getElementsByTagName('ul').item(0).childElementCount}`);
console.log();
console.log(`Category: ${list.querySelectorAll('.item')[2].firstElementChild.innerText}`);
console.log(`Elements: ${list.querySelectorAll('.item')[2].getElementsByTagName('ul').item(0).childElementCount}`);
