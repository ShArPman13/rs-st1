import '../styles/normalize.scss';
import '../styles/style.scss';
import '../donate/styles/donate.scss';
import animals from '../main/animals';
import testimonials from '../main/testimonials';


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

//...................................................................................................for slider in pets
const sliderGridContainer = document.querySelectorAll('.section-pets__cards');
const sliderButtonLeft = document.querySelector('.section-pets__button-go-left');
const sliderButtonRight = document.querySelector('.section-pets__button-go-right');

function fillOneCard(animal) { //create one pet card

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

const allCards = animals.map(el => fillOneCard(el)) //create array of all 18 pet cards

function getScreenSize() {
  switch (true) {
    case window.screen.width < 997: return 4
    case window.screen.width <= 630: return 1
    default: return 6
  }
}

function getRandomNumArray(cardsAmount) { //generate array of random nubers for cards
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
currentCards = getRandomNumArray(getScreenSize()); //get array of numbers for current cards

currentCards.forEach(el => { // fill central GRID by pet cards
  sliderGridContainer[1].append(allCards[el]);
})


function moveRight() {// click right
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
}
sliderButtonRight.addEventListener('click', moveRight)

function moveLeft() {//click left
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
}
sliderButtonLeft.addEventListener('click', moveLeft)

//---------------------touch-slide------------------------
const containerCardsArrow = document.querySelector('.section-pets__cards-arrows');

let startTouch = 0;
let endTouch = 0;


containerCardsArrow.addEventListener("touchstart", (e) => {
  if (window.screen.width < 631) {
    startTouch = e;
  }
})

containerCardsArrow.addEventListener("touchmove", (e) => {
  if (window.screen.width < 631) {
    e.preventDefault();
    body.style.overflowY = 'hidden';
    containerCardsArrow.style.pointerEvents = 'none';
    endTouch = e;
  }
});

containerCardsArrow.addEventListener("touchend", () => {
  if (window.screen.width < 631) {
    containerCardsArrow.style.pointerEvents = 'auto';
    let diffX = endTouch.touches[0].pageX - startTouch.touches[0].pageX;
    let diffY = endTouch.touches[0].pageY - startTouch.touches[0].pageY;
    let dir;
    if (Math.abs(diffX) > Math.abs(diffY)) {
      dir = diffX < 0 ? moveLeft() : moveRight();
      body.style.overflowY = null;
    } else {
      body.style.overflowY = null;
    }
  }
});

//...................................................................................................for slider Testimonials
const containerForOffset = document.querySelector('.container-for-offset')

function fillOneTestimnial(oneTestimonial) {

  const peopleTalkCardOuter = document.createElement('div');
  peopleTalkCardOuter.classList.add('people-talk__card-outer');
  const peopleTalkCardInner = document.createElement('div');
  peopleTalkCardInner.classList.add('people-talk__card-inner');
  peopleTalkCardOuter.append(peopleTalkCardInner);

  const peopleTalkHeadContainer = document.createElement('div');
  peopleTalkHeadContainer.classList.add('people-talk__head-container');

  const avatar = document.createElement('img');
  avatar.classList.add('people-talk__man');
  avatar.src = oneTestimonial.srcAvatar;
  avatar.alt = oneTestimonial.alt;

  const headText = document.createElement('div');
  headText.classList.add('people-talk__head-text');

  const headTextName = document.createElement('p');
  headTextName.classList.add('people-talk__name');
  headTextName.innerText = oneTestimonial.name;

  const headTextWhen = document.createElement('p');
  headTextWhen.classList.add('people-talk__when');
  headTextWhen.innerText = oneTestimonial.when;

  headText.append(headTextName);
  headText.append(headTextWhen);

  peopleTalkHeadContainer.append(avatar);
  peopleTalkHeadContainer.append(headText);

  const peopleTalkText = document.createElement('div');
  peopleTalkText.classList.add('people-talk__text')
  peopleTalkText.innerHTML = oneTestimonial.text;

  peopleTalkCardInner.append(peopleTalkHeadContainer);
  peopleTalkCardInner.append(peopleTalkText);

  return peopleTalkCardOuter;
}

const allTestimonials = testimonials.map(el => fillOneTestimnial(el));

allTestimonials.forEach(el => {
  containerForOffset.append(el);
})

const inputTypeRange = document.querySelector('.testimonials__scroll-in');

function getOffset(position) {
  if (window.screen.width > 1225) {
    switch (true) {
      case position === 1: return '-298px'
      case position === 2: return '-596px'
      case position === 3: return '-894px'
      case position === 4: return '-1192px'
      case position === 5: return '-1490px'
      case position === 6: return '-1788px'
      case position === 7: return '-2086px'
      default: return '0px'
    }
  } else {
    switch (true) {
      case position === 1: return '-323px'
      case position === 2: return '-646px'
      case position === 3: return '-969px'
      case position === 4: return '-1292px'
      case position === 5: return '-1615px'
      case position === 6: return '-1938px'
      case position === 7: return '-2261px'
      default: return '0px'
    }
  }
}

function changeRange() {
  let position = + inputTypeRange.value;
  containerForOffset.style.left = getOffset(position);
}

inputTypeRange.addEventListener("input", changeRange);
//...................................................................................................for PopUp
const testimonial = document.querySelectorAll('.people-talk__card-outer');
const popUp = document.querySelector('.popup__testimonials');
const popUpWrapper = document.querySelector('.wrapper-popup-cross');
const closePop = document.querySelector('.cross-container');

testimonial.forEach((el, index) => {
  el.addEventListener('click', () => {
    if (window.screen.width <= 970) {
      popUp.classList.add('active');
      popUpWrapper.append(fillOneTestimnial(testimonials[index]))
      closePop.classList.add('active');
      setTimeout(() => {
        popUp.classList.add('opacity');
      }, 100);
      body.classList.add('overflow-hidden');
      // body.style.filter = 'blur(2px)';
    }
  })
})
function closePopUp() {
  popUp.classList.remove('opacity');
  setTimeout(() => {
    popUp.classList.remove('active');
  }, 300)
  closePop.classList.remove('active');
  popUpWrapper.lastChild.remove();
  body.classList.remove('overflow-hidden');
}
popUp.addEventListener('click', (e) => {
  if (e.target.classList.contains('people-talk__text') || e.target.classList.contains('people-talk__head-container') ||
    e.target.classList.contains('people-talk__card-inner') || e.target.classList.contains('people-talk__card-outer') ||
    e.target.classList.contains('people-talk__when') || e.target.classList.contains('people-talk__name') ||
    e.target.classList.contains('people-talk__man')) {
    return;
  }
  closePopUp();
});
//...................................................................................................for PopUp
