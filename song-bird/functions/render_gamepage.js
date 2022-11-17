import birdsData from '../constants/birds';
import birdsLang from '../constants/birdsLang';
import { body, homeNavButton, main } from '../constants/dom/constants_dom';
// mainWrapper, homePopup,
import gamePageLang from '../constants/gamePageLang';
import setLocalStorage from './LS/setLocalStorage';
import { playAudioRightAnswer, playAudioWrongAnswer } from './play_sounds';
import renderPlayer from './render-audio-player';
import renderResultPage from './renderResultPage';
import renderBirdRightCard from './render_birdRightCard';
import getRandomNum from './usefull/getRandomNum';

function renderGamePage(__parts, __audioSrc, gameLevel, __randomNum, __score, language, observer) {
  let lang = language;
  observer.subscribe((lg) => {
    lang = lg;
  });
  let level = gameLevel;
  let gameWrapper = document.createElement('div');
  gameWrapper.classList.add('wrapper-game');
  const ulBirdTypes = document.createElement('ul');
  ulBirdTypes.classList.add('ul__bird-types');
  gameWrapper.innerHTML = '';
  ulBirdTypes.innerHTML = '';
  const birdTopBtnArray = [];
  const birdLeftBtnArray = [];

  for (let i = 0; i < __parts.length; i += 1) {
    const birdType = document.createElement('li');
    birdType.classList.add('bird-type');
    if (i === gameLevel) { birdType.classList.add('active'); }
    birdType.textContent = gamePageLang[lang][0][i];
    observer.subscribe((lg) => {
      birdType.textContent = gamePageLang[lg][0][i];
    });
    ulBirdTypes.append(birdType);
    birdTopBtnArray.push(birdType);
  }
  gameWrapper.append(ulBirdTypes);

  const randomBirdContainer = document.createElement('div');
  randomBirdContainer.classList.add('random-bird-container');

  const randomBird = document.createElement('div');
  randomBird.classList.add('random-bird');

  const scoreContainer = document.createElement('div');
  scoreContainer.classList.add('score-container');
  const scoreCaption = document.createElement('h5');
  scoreCaption.classList.add('score-caption');
  [, , scoreCaption.textContent] = gamePageLang[lang];
  observer.subscribe((lg) => {
    [, , scoreCaption.textContent] = gamePageLang[lg];
  });
  const scoreValue = document.createElement('span');
  scoreValue.classList.add('score-value');
  scoreValue.innerText = __score;
  scoreContainer.append(scoreCaption, scoreValue);

  const randomBirdImg = document.createElement('div');
  randomBirdImg.classList.add('random-bird-img');
  randomBirdImg.style.backgroundImage = 'url(./images/random-bird.png)';

  const randomBirdPlayerContainer = document.createElement('div');
  randomBirdPlayerContainer.classList.add('random-bird__player-container');

  const bierdToGuess = document.createElement('h3');
  bierdToGuess.classList.add('bierd-to-guess');
  bierdToGuess.innerText = '********';

  const { player, turnOffAudio, togglePlayBtn } = renderPlayer(__audioSrc);

  randomBirdPlayerContainer.append(bierdToGuess, player);

  randomBird.append(randomBirdImg, randomBirdPlayerContainer);

  randomBirdContainer.append(randomBird, scoreContainer);
  gameWrapper.append(randomBirdContainer);

  const chooseBird = document.createElement('div');
  chooseBird.classList.add('choose-bird');
  const chooseBirdLeft = document.createElement('ul');

  for (let i = 0; i < __parts.length; i += 1) {
    const liBird = document.createElement('li');
    liBird.classList.add('li-bird');
    liBird.textContent = birdsLang[lang][gameLevel][i].name;
    observer.subscribe((lg) => {
      liBird.textContent = birdsLang[lg][gameLevel][i].name;
    });
    chooseBirdLeft.append(liBird);
    birdLeftBtnArray.push(liBird);
  }

  const chooseBirdRight = document.createElement('div');
  chooseBirdLeft.classList.add('choose-bird__left');
  chooseBirdRight.classList.add('choose-bird__right');
  [, chooseBirdRight.textContent] = gamePageLang[lang];
  observer.subscribe((lg) => {
    [, chooseBirdRight.textContent] = gamePageLang[lg];
  });
  chooseBird.append(chooseBirdLeft, chooseBirdRight);
  gameWrapper.append(chooseBird);

  const nextLevelButton = document.createElement('button');
  nextLevelButton.classList.add('next-level-button');
  [, , , nextLevelButton.textContent] = gamePageLang[lang];
  observer.subscribe((lg) => {
    [, , , nextLevelButton.textContent] = gamePageLang[lg];
  });
  gameWrapper.append(nextLevelButton);

  let turnOff;

  let click = 0;
  let yourScore = __score;

  birdLeftBtnArray.forEach((el, index) => {
    el.addEventListener('click', () => {
      if (!el.classList.contains('pressed')) { click += 1; }

      if (index === __randomNum) {
        if (!el.classList.contains('pressed-truth')) {
          turnOffAudio();
          togglePlayBtn();
          playAudioRightAnswer();
          yourScore += (6 - click);
          scoreValue.textContent = yourScore;
          click = 0;
          randomBirdImg.style.backgroundImage = `url(${birdsLang[lang][gameLevel][index].image})`;
        }
        el.classList.add('pressed-truth');
        bierdToGuess.textContent = birdsLang[lang][gameLevel][index].name;
        observer.subscribe((lg) => {
          bierdToGuess.textContent = birdsLang[lg][gameLevel][index].name;
        });
        nextLevelButton.classList.add('active');
      } else if (!nextLevelButton.classList.contains('active')) { // do not change btnColor after win
        if (!el.classList.contains('pressed')) { playAudioWrongAnswer(); }
        el.classList.add('pressed');
      }

      if (typeof turnOff === 'function') {
        turnOff();
      }
      const {
        player: secondPlayer,
        turnOffAudio: turnOffPlayer,
      } = renderPlayer(birdsLang[lang][gameLevel][index].audio);

      turnOff = turnOffPlayer;
      let imgDescriptionContainer = renderBirdRightCard(
        birdsLang[lang][gameLevel][index].image,
        birdsLang[lang][gameLevel][index].description,
        birdsLang[lang][gameLevel][index].name,
        birdsLang[lang][gameLevel][index].species,
      );
      observer.subscribe((lg) => {
        imgDescriptionContainer = renderBirdRightCard(
          birdsLang[lg][gameLevel][index].image,
          birdsLang[lg][gameLevel][index].description,
          birdsLang[lg][gameLevel][index].name,
          birdsLang[lg][gameLevel][index].species,
        );
        chooseBirdRight.innerHTML = '';
        chooseBirdRight.append(imgDescriptionContainer, secondPlayer);
      });
      chooseBirdRight.innerHTML = '';
      chooseBirdRight.append(imgDescriptionContainer, secondPlayer);
    });
  });

  nextLevelButton.addEventListener('click', () => {
    if (level === 5) { // if user have guessed the last bird
      setLocalStorage(lang, yourScore);
      gameWrapper.classList.add('opacity-for-homepopup');
      main.classList.add('result');
      nextLevelButton.style.pointerEvents = 'none';
      setTimeout(() => {
        gameWrapper.remove();
        body.classList.add('noscroll');
        body.append(renderResultPage(yourScore, lang, observer, turnOffAudio, turnOff));
      }, 700);
    } else if (nextLevelButton.classList.contains('active')) { // if user haven't guessed the last bird
      if (typeof turnOff === 'function') {
        turnOff();
      }
      turnOffAudio();
      level += 1;
      const game = document.querySelector('.wrapper-game');
      game.remove();
      const randomNum = getRandomNum();

      gameWrapper = renderGamePage(
        birdsData,
        birdsData[level][randomNum].audio,
        level,
        randomNum,
        yourScore,
        lang,
        observer,
      );
      main.append(gameWrapper.gameWrapper);
    }
  });

  homeNavButton.addEventListener('click', () => {
    if (typeof turnOffAudio === 'function') {
      turnOffAudio();
    }
    if (typeof turnOff === 'function') {
      turnOff();
    }
  });

  return {
    gameWrapper,
    birdTopBtnArray,
    birdLeftBtnArray,
    chooseBirdRight,
    player,
    bierdToGuess,
    scoreValue,
    nextLevelButton,
    turnOffAudio,
    turnOff,
  };
}

export default renderGamePage;
