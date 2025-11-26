const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger-icon')
const close = document.querySelector('.close-icon')

menu.addEventListener('click', () => {
  navbar.classList.toggle('active')

  if (navbar.classList.contains('active')) {
    burger.style.display = 'none';
    close.style.display = 'initial';
  } else {
    burger.style.display = 'initial';
    close.style.display = 'none';
  };
});

window.onscroll = () => {
  close.style.display = 'none'
  burger.style.display = 'initial'
  navbar.classList.remove('active')
}