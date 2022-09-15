const closebtn = document.querySelector('.close-btn');
const menuBar = document.querySelector('.menu-bar');
const main = document.querySelector('.pop-up');
menuBar.addEventListener('click', () => {
  main.classList.toggle('active');
});

closebtn.addEventListener('click', () => {
  main.classList.toggle('active');
});