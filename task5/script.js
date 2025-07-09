let duplicatedText = document.querySelector('p');
let inputText = document.querySelector('input');

inputText.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    duplicatedText.textContent = inputText.value;
    console.log(duplicatedText);
  }
  console.log(event);
})

document.querySelector('button').addEventListener('mousedown', (event) => {
  event.preventDefault();
  if (event.which === 1) {
    console.log(inputText.value);
    inputText.value = '';
  }
})