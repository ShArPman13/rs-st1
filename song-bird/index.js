import './styles/normalize.scss';
import './styles/style.scss';
import './styles/game-page-styles.scss';
import './styles/player.scss';
import './styles/game-result-styles.scss';
import parallax from './functions/design_and_styling/parallax';
import {
  body,
  mainContainer,
  main,
  homeNavButton,
  homePopup,
  homePopupBtnCancel,
  homePopupBtnOk,
  mainWrapper,
  mainText,
  langNavButton,
  mainButton,
  playNavButton,
  // playNavLink,
  resultNavButton,
  homePopupText,
  galleryNavButton,
  containerGallery,
} from './constants/dom/constants_dom';
import renderGamePage from './functions/render_gamepage';
import getRandomNum from './functions/usefull/getRandomNum';
import { mainTextEn, mainTextRus } from './constants/main-text';
import birdsLang from './constants/birdsLang';
import observable from './functions/usefull/observer';
import setLocalStorage from './functions/LS/setLocalStorage';
import renderResultPage from './functions/renderResultPage';
// import renderBirdRightCard from './functions/render_birdRightCard';
import BirdRightCard from './functions/CLASS_BirdRightCard';
// import gamePageLang from './constants/gamePageLang';

if (window.screen.width > 1400) { // moving background by mousemove
  document.addEventListener('mousemove', parallax);
}
const randomNum = getRandomNum();
const gameLevel = 0;
const score = 0;

let language = '';

if (localStorage.getItem('lang-Sharp13')) {
  language = localStorage.getItem('lang-Sharp13');
  if (language === 'ru') {
    langNavButton.classList.add('rus');
    mainText.innerHTML = mainTextRus;
    langNavButton.textContent = 'RU';
    mainButton.textContent = 'Играть';
    // playNavLink.textContent = 'Играть';
    resultNavButton.textContent = 'Результаты';
    galleryNavButton.textContent = 'Галерея';
    homePopupText.textContent = 'Ваш прогресс будет утерян!';
    homePopupBtnOk.textContent = 'На главную';
    homePopupBtnCancel.textContent = 'Назад в игру';
  }
} else {
  language = 'en';
  langNavButton.classList.remove('rus');
  mainText.innerHTML = mainTextEn;
  langNavButton.textContent = 'EN';
  mainButton.textContent = 'Play';
  // playNavLink.textContent = 'Play';
  resultNavButton.textContent = 'Results';
  galleryNavButton.textContent = 'Gallery';
  homePopupText.textContent = 'Your game progress will be lost!';
  homePopupBtnOk.textContent = 'Ok';
  homePopupBtnCancel.textContent = 'Cancel';
}

const observer = observable();

body.addEventListener('click', (event) => { // -------------------play_Button click---------------
  if (body.classList.contains('game')) return;
  if (event.target.dataset.action !== 'play') return;

  const { gameWrapper } = renderGamePage(
    birdsLang[language],
    birdsLang[language][gameLevel][randomNum].audio,
    gameLevel,
    randomNum,
    score,
    language,
    observer,
  );
  // -------------------avoid many clicks by users
  playNavButton.style.pointerEvents = 'none';
  mainButton.style.pointerEvents = 'none';
  galleryNavButton.style.pointerEvents = 'none';

  gameWrapper.classList.remove('opacity');
  mainContainer.classList.add('hidden');
  gameWrapper.remove();

  playNavButton.classList.add('game');
  resultNavButton.classList.add('game');
  galleryNavButton.classList.add('game');

  setTimeout(() => {
    mainContainer.style.display = 'none';
    body.classList.add('game');
    main.append(gameWrapper);

    playNavButton.style.pointerEvents = 'auto';
    mainButton.style.pointerEvents = 'auto';
    galleryNavButton.style.pointerEvents = 'auto';
  }, 700);
});

homeNavButton.addEventListener('click', () => { // -------------------home_Button click---------------
  if (galleryNavButton.classList.contains('pressed')) { // close results if open
    galleryNavButton.classList.remove('pressed');
    mainContainer.style.display = 'flex';
    body.classList.remove('game');
    containerGallery.innerHTML = '';
    playNavButton.classList.remove('game');
    resultNavButton.classList.remove('game');
    galleryNavButton.classList.remove('game');
  }

  const gameWrapperToDelete = document.querySelector('.wrapper-game');
  if (gameWrapperToDelete) { // we're on the game page
    mainWrapper.classList.add('opacity-for-homepopup');
    setTimeout(() => {
      homePopup.classList.remove('hidden');
    }, 700);

    homePopupBtnCancel.addEventListener('click', () => {
      mainWrapper.classList.remove('opacity-for-homepopup');
      homePopup.classList.add('hidden');
    });

    homePopupBtnOk.addEventListener('click', () => {
      homePopup.classList.add('hidden');
      mainWrapper.classList.remove('opacity-for-homepopup');
      mainContainer.style.display = 'flex';
      body.classList.remove('game');
      gameWrapperToDelete.remove();
      mainContainer.classList.remove('hidden');

      playNavButton.classList.remove('game');
      resultNavButton.classList.remove('game');
      galleryNavButton.classList.remove('game');
    });
  }
});

langNavButton.addEventListener('click', () => { // -------------------language_Button click---------------
  const scoreInLS = localStorage.getItem('score-Sharp13');
  langNavButton.classList.toggle('rus');
  if (langNavButton.classList.contains('rus')) {
    language = 'ru';
    setLocalStorage(language, scoreInLS);
    observer.update(language);
    mainText.innerHTML = mainTextRus;
    langNavButton.textContent = 'RU';
    mainButton.textContent = 'Играть';
    // playNavLink.textContent = 'Играть';
    resultNavButton.textContent = 'Результаты';
    galleryNavButton.textContent = 'Галерея';
    homePopupText.textContent = 'Ваш прогресс будет утерян!';
    homePopupBtnOk.textContent = 'На главную';
    homePopupBtnCancel.textContent = 'Назад в игру';
  } else {
    language = 'en';
    setLocalStorage(language, scoreInLS);
    observer.update(language);
    mainText.innerHTML = mainTextEn;
    langNavButton.textContent = 'EN';
    mainButton.textContent = 'Play';
    // playNavLink.textContent = 'Play';
    resultNavButton.textContent = 'Results';
    galleryNavButton.textContent = 'Gallery';
    homePopupText.textContent = 'Your game progress will be lost!';
    homePopupBtnOk.textContent = 'Ok';
    homePopupBtnCancel.textContent = 'Cancel';
  }
});

resultNavButton.addEventListener('click', () => { // -------------------results_Button click---------------
  const scoreInLS = localStorage.getItem('score-Sharp13');
  const langInLS = localStorage.getItem('lang-Sharp13');
  if (!body.classList.contains('game')) {
    if (scoreInLS) {
      body.classList.add('noscroll');
      body.append(renderResultPage(scoreInLS, langInLS, observer));
    } else {
      body.classList.add('noscroll');
      body.append(renderResultPage(scoreInLS, langInLS, observer));
    }
  }
});

galleryNavButton.addEventListener('click', () => { // -------------------gallery_Button click---------------
  galleryNavButton.classList.toggle('pressed');

  if (galleryNavButton.classList.contains('pressed')) {
    playNavButton.classList.add('game');
    resultNavButton.classList.add('game');
    galleryNavButton.classList.add('game');
    body.classList.add('game');
    mainContainer.style.display = 'none';

    birdsLang[language].forEach((array, indexArray) => {
      array.forEach((bird, indexBird) => {
        const birdCard = new BirdRightCard(bird, indexArray, indexBird, observer);
        containerGallery.append(birdCard.render());
      });
    });

    main.append(containerGallery);
  } else {
    mainContainer.style.display = 'flex';
    body.classList.remove('game');
    containerGallery.innerHTML = '';
  }
});
