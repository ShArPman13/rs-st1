import './styles/normalize.scss';
import './styles/style.scss';
import './styles/game-page-styles.scss';
import './styles/player.scss';

import birdsData from './constants/birds';

import parallax from './functions/design_and_styling/parallax';
import {
  body, mainNavButton, mainContainer, main,
} from './constants/dom/constants_dom';
import renderGamePage from './functions/render_gamepage';
import renderBirdRightCard from './functions/render_birdRightCard';
import renderPlayer from './functions/render-audio-player';
import { playAudioRightAnswer, playAudioWrongAnswer } from './functions/play_sounds';

if (window.screen.width > 1400) { // moving back-ground by mousemove
  document.addEventListener('mousemove', parallax);
}

let turnOff;

function getRandomNum() {
  const randomNum = Math.floor(Math.random() * 6);
  return randomNum;
}

const randomNum = getRandomNum();

const {
  gameWrapper,
  birdLeftBtnArray,
  birdTopBtnArray,
  chooseBirdRight,
  bierdToGuess,
  scoreValue,
} = renderGamePage(birdsData, birdsData[0][randomNum].audio);

body.addEventListener('click', (event) => { // -------------------play_Button click---------------
  if (event.target.dataset.action !== 'play') { return; }
  gameWrapper.classList.remove('opacity');
  mainContainer.classList.add('hidden');
  setTimeout(() => {
    mainContainer.style.display = 'none';
    body.classList.add('game');
    main.append(gameWrapper);
  }, 700);
});

mainNavButton.addEventListener('click', () => { // -------------------home_Button click---------------
  gameWrapper.classList.add('opacity');
  setTimeout(() => {
    mainContainer.style.display = 'flex';
    body.classList.remove('game');
    gameWrapper.remove();
    mainContainer.classList.remove('hidden');
  }, 700);
});

let click = 0;
let yourScore = 0;

birdLeftBtnArray.forEach((el, index) => {
  el.addEventListener('click', () => {
    click += 1;
    if (index === randomNum) {
      if (!el.classList.contains('pressed-truth')) {
        playAudioRightAnswer();
        yourScore += (6 - click);
        scoreValue.innerText = yourScore;
        click = 0;
      }
      el.classList.add('pressed-truth');
      bierdToGuess.innerText = birdsData[0][index].name;
    } else {
      if (!el.classList.contains('pressed')) { playAudioWrongAnswer(); }
      el.classList.add('pressed');
    }

    if (typeof turnOff === 'function') {
      turnOff();
    }
    const {
      player: secondPlayer,
      turnOffAudio: turnOffPlayer,
    } = renderPlayer(birdsData[0][index].audio);

    turnOff = turnOffPlayer;
    const imgDescriptionContainer = renderBirdRightCard(
      birdsData[0][index].image,
      birdsData[0][index].description,
    );

    chooseBirdRight.innerHTML = '';
    chooseBirdRight.append(imgDescriptionContainer, secondPlayer);
  });
});
