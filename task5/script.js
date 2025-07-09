let duplicatedText = document.querySelector('p');
let inputText = document.querySelector('input');

inputText.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    console.log(inputText.value);
    duplicatedText.textContent = inputText.value;
  }
})

document.querySelector('button').addEventListener('mousedown', (event) => {
  event.preventDefault();
  if (event.which === 1) {
    inputText.value = '';
  }
})