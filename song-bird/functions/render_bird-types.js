import birdsButtons from '../constants/birdsBtn';
// import { gameWrapper } from '../constants/dom/constants_dom';
import renderPlayer from './render-audio-player';

function renderBirdTypes(parts) {
  const gameWrapper = document.createElement('div');
  gameWrapper.classList.add('wrapper-game');
  const ulBirdTypes = document.createElement('ul');
  ulBirdTypes.classList.add('ul__bird-types');
  gameWrapper.innerHTML = '';
  ulBirdTypes.innerHTML = '';
  const birdTopBtnArray = [];
  const birdLeftBtnArray = [];

  for (let i = 0; i < parts.length; i += 1) {
    const birdType = document.createElement('li');
    birdType.classList.add('bird-type');
    if (i === 0) { birdType.classList.add('active'); }
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
  scoreValue.innerText = '0';
  scoreContainer.append(scoreCaption, scoreValue);

  const randomBirdImg = document.createElement('img');
  randomBirdImg.classList.add('random-bird-img');
  randomBirdImg.src = './images/random-bird.png';

  const randomBirdPlayerContainer = document.createElement('div');
  randomBirdPlayerContainer.classList.add('random-bird__player-container');

  const bierdToGuess = document.createElement('h3');
  bierdToGuess.classList.add('bierd-to-guess');
  bierdToGuess.innerText = '********';

  const {
    player, playButton, volumeButton, progressLine,
    progressPoint, timeline, currentTime, lengthTime, volumeSlider,
    volumePercentage,
  } = renderPlayer();

  randomBirdPlayerContainer.append(bierdToGuess, player);

  randomBird.append(randomBirdImg, randomBirdPlayerContainer);

  randomBirdContainer.append(randomBird, scoreContainer);
  gameWrapper.append(randomBirdContainer);

  const chooseBird = document.createElement('div');
  chooseBird.classList.add('choose-bird');
  const chooseBirdLeft = document.createElement('ul');

  for (let i = 0; i < parts.length; i += 1) {
    const liBird = document.createElement('li');
    liBird.classList.add('li-bird');
    liBird.innerText = parts[0][i].name;
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

  return {
    gameWrapper,
    playButton,
    volumeButton,
    progressLine,
    progressPoint,
    birdTopBtnArray,
    birdLeftBtnArray,
    timeline,
    currentTime,
    lengthTime,
    volumeSlider,
    volumePercentage,
  };
}

export default renderBirdTypes;
