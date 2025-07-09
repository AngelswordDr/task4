let link = document.querySelector('a');

link.addEventListener('click', (event) => {
  event.preventDefault();
  link.textContent = prompt('Введите измененный текст.', '');
})