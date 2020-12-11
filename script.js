let scrollStatus = 0;
const header = document.querySelector('header');
const upButton = document.querySelector('.upButton');
window.addEventListener('scroll', (e) => {
  if (scrollStatus > window.scrollY) {
    scrollStatus = window.scrollY;
    header.classList.add('sticky');
    upButton.classList.add('show');
  }
  else {
    scrollStatus = window.scrollY;
    header.classList.remove('sticky');
    upButton.classList.remove('show');
  } 


})