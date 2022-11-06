import './styles/normalize.scss';
import './styles/style.scss';

import birdsData from './constants/birds';

import parallax from './functions/design_and_styling/parallax';
import {
  body, mainNavButton, mainContainer, playNavButton,
} from './constants/dom/constants_dom';

if (window.screen.width > 1400) { // moving back-ground by mousemove
  document.addEventListener('mousemove', parallax);
}

playNavButton.addEventListener('click', () => {
  mainContainer.classList.add('hidden');
  setTimeout(() => {
    mainContainer.style.display = 'none';
    body.classList.add('game');
  }, 700);
});

mainNavButton.addEventListener('click', () => {
  body.classList.remove('game');
  setTimeout(() => {
    mainContainer.classList.remove('hidden');
    mainContainer.style.display = 'flex';
  }, 700);
});
