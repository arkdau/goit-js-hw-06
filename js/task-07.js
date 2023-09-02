const inputSlider = document.getElementById('font-size-control');
const span = document.getElementById('text');
inputSlider.addEventListener('input', () => {
  span.setAttribute('Style', `font-size: ${inputSlider.value}px;`);
  console.log(span);
});
