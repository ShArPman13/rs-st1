import './styles/normalize.scss';
import './styles/style.scss';
import './styles/game-page-styles.scss';
import './styles/player.scss';
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
  playNavLink,
} from './constants/dom/constants_dom';
import renderGamePage from './functions/render_gamepage';
import getRandomNum from './functions/usefull/getRandomNum';
import { mainTextEn, mainTextRus } from './constants/main-text';
import birdsLang from './constants/birdsLang';

if (window.screen.width > 1400) { // moving back-ground by mousemove
  document.addEventListener('mousemove', parallax);
}
const randomNum = getRandomNum();
const gameLevel = 0;
const score = 0;
let language = 'en';

body.addEventListener('click', (event) => { // -------------------play_Button click---------------
  const { gameWrapper } = renderGamePage(
    birdsLang[language],
    birdsLang[language][gameLevel][randomNum].audio,
    gameLevel,
    randomNum,
    score,
    language,
  );
  if (body.classList.contains('game')) return;
  if (event.target.dataset.action !== 'play') { return; }
  gameWrapper.classList.remove('opacity');
  mainContainer.classList.add('hidden');
  gameWrapper.remove();
  setTimeout(() => {
    mainContainer.style.display = 'none';
    body.classList.add('game');
    main.append(gameWrapper);
  }, 700);
});

homeNavButton.addEventListener('click', () => { // -------------------home_Button click---------------
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
    });
  }
});

langNavButton.addEventListener('click', () => {
  langNavButton.classList.toggle('rus');
  if (langNavButton.classList.contains('rus')) {
    language = 'ru';
    mainText.innerHTML = mainTextRus;
    langNavButton.innerText = 'RU';
    mainButton.innerText = 'Играть';
    playNavLink.innerText = 'Играть';
  } else {
    language = 'en';
    mainText.innerHTML = mainTextEn;
    langNavButton.innerText = 'EN';
    mainButton.innerText = 'Play';
    playNavLink.innerText = 'Play';
  }
});
