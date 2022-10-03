import '../styles/normalize.scss';
import '../styles/style.scss';
import '../donate/styles/donate.scss';

const body = document.querySelector('body');
const dark = document.querySelector('.dark');

const burger = document.querySelector('.header__burger');
const navList = document.querySelector('.nav__list');
const burgerLogo = document.querySelector('.burger__logo');



burger.addEventListener('click', (e) => { //burger logic

  dark.classList.toggle('open');
  burger.classList.toggle('open');
  burger.firstElementChild.classList.toggle('open');
  navList.classList.add('open');
  body.classList.toggle('overflow-hidden');

  if (!burgerLogo.classList.contains('open')) {
    setTimeout(() => {
      burgerLogo.classList.add('open')
    }, 300)

  } else {
    burgerLogo.classList.remove('open')
    setTimeout(() => {
      navList.classList.remove('open');
    }, 300)
  }

  burgerLogo.classList.remove('open')
})

body.addEventListener('click', (e) => {//close by pressing Dark
  if (e.target.classList.contains('dark')) {
    burgerLogo.classList.remove('open')
    setTimeout(() => {
      navList.classList.remove('open');
    }, 300)
    burger.classList.remove('open');
    burger.firstElementChild.classList.remove('open');
    dark.classList.remove('open');
  }
})

