import birdsData from '../constants/birds';
import birdsLang from '../constants/birdsLang';
import { body, homeNavButton, main } from '../constants/dom/constants_dom';
import gamePageLang from '../constants/gamePageLang';
import AudioPlayer from './CLASS_AudioPlayer';
import setLocalStorage from './LS/setLocalStorage';
import { playAudioRightAnswer, playAudioWrongAnswer } from './play_sounds';
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

  const player = new AudioPlayer(__audioSrc); // ------------------------------create 1st player

  randomBirdPlayerContainer.append(bierdToGuess, player.render());

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
  let click = 0;

  const chooseBirdRight = document.createElement('div');
  chooseBirdLeft.classList.add('choose-bird__left');
  chooseBirdRight.classList.add('choose-bird__right');
  [, chooseBirdRight.textContent] = gamePageLang[lang];

  observer.subscribe((lg) => {
    // if leftbird has already clicked - we dont use Observer here
    if (chooseBirdRight.childNodes.length === 1) {
      [, chooseBirdRight.textContent] = gamePageLang[lg];
    }
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

  let yourScore = __score;
  let player2;

  birdLeftBtnArray.forEach((el, index) => {
    el.addEventListener('click', () => {
      if (player2) {
        player2.turnOff();
      }
      if (!el.classList.contains('pressed')) { click += 1; }

      if (index === __randomNum) {
        if (!el.classList.contains('pressed-truth')) {
          player.turnOff();
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

      const imgDescriptionContainer = renderBirdRightCard(
        birdsLang,
        lang,
        gameLevel,
        index,
        observer,
      );

      player2 = new AudioPlayer(birdsLang[lang][gameLevel][index].audio); // ------create 2nd player

      chooseBirdRight.innerHTML = '';
      chooseBirdRight.append(imgDescriptionContainer, player2.render());
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
        body.append(renderResultPage(yourScore, lang, observer, player, player2));
      }, 700);
    } else if (nextLevelButton.classList.contains('active')) { // if user haven't guessed the last bird
      // if (typeof turnOff === 'function') {
      //   turnOff();
      // }
      // turnOffAudio();
      player.turnOff();
      player2.turnOff();
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
    // if (typeof turnOffAudio === 'function') {
    //   turnOffAudio();
    // }
    // if (typeof turnOff === 'function') {
    //   turnOff();
    // }
    if (player) player.turnOff();
    if (player2) player2.turnOff();
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
  };
}

export default renderGamePage;
