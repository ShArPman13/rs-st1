import '../styles/normalize.scss';
import '../styles/style.scss';
import '../donate/styles/donate.scss';

import animals from '../main/animals';


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
    body.classList.remove('overflow-hidden');
  }
})



//for slider in pets
const sliderVisibleContainer = document.querySelector('.section-pets__visible-cards');
const sliderGridContainer = document.querySelectorAll('.section-pets__cards');
const sliderButtonLeft = document.querySelector('.section-pets__button-go-left');
const sliderButtonRight = document.querySelector('.section-pets__button-go-right');

const sliderGridRight = document.querySelector('.slider-right');
const sliderGridLeft = document.querySelector('.slider-left');

function fillOneCard(animal) {

  const fotoContainer = document.createElement('div');
  fotoContainer.classList.add('pet-foto__container');

  const imgFotoContainer = document.createElement('img');
  imgFotoContainer.classList.add('section-pets__foto');
  imgFotoContainer.src = animal.srcPic;
  imgFotoContainer.alt = animal.alt;
  fotoContainer.append(imgFotoContainer);

  const fotoText = document.createElement('p');
  fotoText.classList.add('section-pets__foto-text');
  fotoText.innerHTML = animal.fotoText;
  fotoContainer.append(fotoText);

  const textContainer = document.createElement('div');
  textContainer.classList.add('pets-text__container');

  const petsText = document.createElement('div');
  petsText.classList.add('section-pets__text');

  const animalName = document.createElement('h3');
  animalName.classList.add('section-pets__animal-name');
  animalName.innerText = animal.animalName;
  petsText.append(animalName);

  const nativeText = document.createElement('p');
  nativeText.classList.add('section-pets__native-to');
  nativeText.innerText = animal.nativeToText;
  petsText.append(nativeText);

  const imgFeedIcon = document.createElement('img');
  imgFeedIcon.classList.add('pets-text__icon-feed');
  imgFeedIcon.src = animal.feedSrc;
  imgFeedIcon.alt = animal.altFeed;
  fotoContainer.append(imgFotoContainer);

  textContainer.append(petsText);
  textContainer.append(imgFeedIcon);

  const sliderOneCardContainer = document.createElement('div');
  sliderOneCardContainer.classList.add('section-pets__card')
  sliderOneCardContainer.append(fotoContainer);
  sliderOneCardContainer.append(textContainer);

  return sliderOneCardContainer;
}

const allCards = animals.map(el => fillOneCard(el))

function getScreenSize() {
  switch (true) {
    case window.screen.width >= 997: return 6
    case window.screen.width < 997: return 4
    case window.screen.width <= 630: return 1
    default: return 6
  }
}

// function getCardsNumber() {
//   const screenSize = getScreenSize();
//   let n;
//   switch (screenSize) {
//       case 1280: n = 6; break;
//       case 768: n = 4; break;
//       default: n = 6;
//   }
//   return n;
// }

function getRandomNumArray(cardsAmount) {
  let randomArr = [];
  while (randomArr.length < cardsAmount) {
    const randomNum = Math.floor(Math.random() * 18);
    if (!currentCards.includes(randomNum)) {
      randomArr.push(randomNum);
      randomArr = [...new Set(randomArr)];
    }
  }
  return randomArr;
}

let currentCards = [];
currentCards = getRandomNumArray(getScreenSize());

currentCards.forEach(el => {
  sliderGridContainer[1].append(allCards[el]);
})

sliderButtonRight.addEventListener('click', () => {
  body.style.pointerEvents = 'none';
  sliderGridContainer[2].innerHTML = '';
  currentCards = getRandomNumArray(getScreenSize());
  currentCards.forEach(el => {
    sliderGridContainer[2].append(allCards[el]);
  })

  sliderGridContainer[2].classList.add('right')
  sliderGridContainer[1].classList.add('right')

  sliderGridContainer[1].addEventListener('animationend', () => {
    sliderGridContainer[1].innerHTML = '';
    currentCards.forEach(el => {
      sliderGridContainer[1].append(allCards[el]);
    })
    sliderGridContainer[2].classList.remove('right')
    sliderGridContainer[1].classList.remove('right')
    body.style.pointerEvents = 'auto';
  })
})

sliderButtonLeft.addEventListener('click', () => {
  body.style.pointerEvents = 'none';
  sliderGridContainer[0].innerHTML = '';
  currentCards = getRandomNumArray(getScreenSize());
  currentCards.forEach(el => {
    sliderGridContainer[0].append(allCards[el]);
  })

  sliderGridContainer[0].classList.add('left')
  sliderGridContainer[1].classList.add('left')

  sliderGridContainer[1].addEventListener('animationend', () => {
    sliderGridContainer[1].innerHTML = '';
    currentCards.forEach(el => {
      sliderGridContainer[1].append(allCards[el]);
    })
    sliderGridContainer[0].classList.remove('left')
    sliderGridContainer[1].classList.remove('left')
    body.style.pointerEvents = 'auto';
  })
})




