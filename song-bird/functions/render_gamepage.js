import birdsData from '../constants/birds';
import birdsButtons from '../constants/birdsBtn';
import { main } from '../constants/dom/constants_dom';
import { playAudioRightAnswer, playAudioWrongAnswer } from './play_sounds';
import renderPlayer from './render-audio-player';
import renderBirdRightCard from './render_birdRightCard';
import getRandomNum from './usefull/getRandomNum';

function renderGamePage(__parts, __audioSrc, gameLevel, __randomNum, __score) {
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
    birdType.innerText = birdsButtons[i];
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
  scoreCaption.innerText = 'Your Score:';
  const scoreValue = document.createElement('span');
  scoreValue.classList.add('score-value');
  scoreValue.innerText = __score;
  scoreContainer.append(scoreCaption, scoreValue);

  const randomBirdImg = document.createElement('img');
  randomBirdImg.classList.add('random-bird-img');
  randomBirdImg.src = './images/random-bird.png';

  const randomBirdPlayerContainer = document.createElement('div');
  randomBirdPlayerContainer.classList.add('random-bird__player-container');

  const bierdToGuess = document.createElement('h3');
  bierdToGuess.classList.add('bierd-to-guess');
  bierdToGuess.innerText = '********';

  const { player, turnOffAudio } = renderPlayer(__audioSrc);

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
    liBird.innerText = __parts[gameLevel][i].name;
    chooseBirdLeft.append(liBird);
    birdLeftBtnArray.push(liBird);
  }

  const chooseBirdRight = document.createElement('div');
  chooseBirdLeft.classList.add('choose-bird__left');
  chooseBirdRight.classList.add('choose-bird__right');
  chooseBirdRight.innerText = 'Listen and select a bird from the list';
  chooseBird.append(chooseBirdLeft, chooseBirdRight);
  gameWrapper.append(chooseBird);

  const nextLevelButton = document.createElement('button');
  nextLevelButton.classList.add('next-level-button');
  nextLevelButton.innerText = 'Next Level';
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
          playAudioRightAnswer();
          yourScore += (6 - click);
          scoreValue.innerText = yourScore;
          click = 0;
          if (level === 5) { alert(`You Win with score: ${yourScore}`); }
        }
        el.classList.add('pressed-truth');
        bierdToGuess.innerText = birdsData[gameLevel][index].name;
        nextLevelButton.classList.add('active');
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
      } = renderPlayer(birdsData[gameLevel][index].audio);

      turnOff = turnOffPlayer;
      const imgDescriptionContainer = renderBirdRightCard(
        birdsData[gameLevel][index].image,
        birdsData[gameLevel][index].description,
      );
      chooseBirdRight.innerHTML = '';
      chooseBirdRight.append(imgDescriptionContainer, secondPlayer);
    });
  });

  nextLevelButton.addEventListener('click', () => {
    if (nextLevelButton.classList.contains('active')) {
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
      );

      main.append(gameWrapper.gameWrapper);
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
