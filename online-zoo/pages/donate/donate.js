import '../styles/normalize.scss';
import '../donate/styles/donate.scss';
import '../styles/style.scss';

const body = document.querySelector('body');
const dark = document.querySelector('.dark');
const burger = document.querySelector('.header__burger');
const navList = document.querySelector('.nav__list');
const burgerLogo = document.querySelector('.burger__logo');


//-----------------------------------------------------------------repeat burger
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
    body.classList.remove('overflow-hidden');
  }
})
//-----------------------------------------------------------------repeat burger

const amountRound = document.querySelectorAll('.amount__round');
const amountPrice = document.querySelectorAll('.amount__price');
const amountInput = document.querySelector('.amount__input');

amountInput.value = 100; //default value

amountRound.forEach((el, index) => {//function of tracking pressing rounds
  el.addEventListener('click', () => {
    amountPrice.forEach(e => {
      e.classList.remove('active');
    })
    amountPrice[index].classList.add('active')
    amountInput.value = amountRound[index].value;
  })
})

amountInput.oninput = () => {//function of tracking input
  amountPrice.forEach(e => {//clear all rounds
    e.classList.remove('active');
  })
  amountRound.forEach(e => {//clear all labels
    e.checked = false
  })

  amountPrice.forEach((e, index) => {
    if (Number(e.innerText) === Number(amountInput.value)) {
      amountPrice.forEach(e => {
        e.classList.remove('active');
      })
      amountPrice[index].classList.add('active');
      amountRound[index].checked = true;
    } else {
    }
  })
};