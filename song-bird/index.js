import './styles/normalize.scss';
import './styles/style.scss';
import './styles/game-page-styles.scss';

import birdsData from './constants/birds';

import parallax from './functions/design_and_styling/parallax';
import {
  body, mainNavButton, mainContainer, main,
} from './constants/dom/constants_dom';
import renderBirdTypes from './functions/render_bird-types';
import getTimeCodeFromNum from './functions/usefull/getTimeCodeFromNum';

if (window.screen.width > 1400) { // moving back-ground by mousemove
  document.addEventListener('mousemove', parallax);
}

const {
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
} = renderBirdTypes(birdsData);

body.addEventListener('click', (event) => {
  if (event.target.dataset.action !== 'play') { return; }
  gameWrapper.classList.remove('opacity');
  mainContainer.classList.add('hidden');
  setTimeout(() => {
    mainContainer.style.display = 'none';
    body.classList.add('game');
    main.append(gameWrapper);
  }, 700);
});

mainNavButton.addEventListener('click', () => {
  gameWrapper.classList.add('opacity');
  setTimeout(() => {
    mainContainer.style.display = 'flex';
    body.classList.remove('game');
    gameWrapper.remove();
    mainContainer.classList.remove('hidden');
  }, 700);
});
// ----------------------------------------------------------------AUDIO---------------------------
let isPlay = false;

function getRandomNum() {
  const randomNum = Math.floor(Math.random() * 6);
  return randomNum;
}
const bird = getRandomNum();
const audio = new Audio(birdsData[0][bird].audio);

let globalTimeToSeek = 0;
let globalVolume = 0.3;

setTimeout(() => {
  lengthTime.innerText = (getTimeCodeFromNum(audio.duration));
}, 200);

function togglePlayBtn() {
  if (!isPlay) {
    playButton.classList.remove('pause');
  } else {
    playButton.classList.add('pause');
  }
}

function playAudio() {
  let intervalProgressLine;
  audio.src = birdsData[0][bird].audio;
  audio.volume = globalVolume;
  if (!isPlay) {
    audio.play();
    audio.currentTime = globalTimeToSeek;
    isPlay = true;
    intervalProgressLine = setInterval(() => {
      progressLine.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
      currentTime.textContent = getTimeCodeFromNum(audio.currentTime);
      globalTimeToSeek = audio.currentTime;
    }, 100);
  } else {
    audio.pause();
    isPlay = false;
    clearInterval(intervalProgressLine);
    audio.currentTime = globalTimeToSeek;
  }
  togglePlayBtn();
}

playButton.addEventListener('click', playAudio);

audio.addEventListener('ended', () => {
  globalTimeToSeek = 0;
  audio.currentTime = globalTimeToSeek;
  isPlay = false;
  togglePlayBtn();
});

timeline.addEventListener('click', (e) => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = (e.offsetX / parseInt(timelineWidth, 10)) * audio.duration;
  audio.currentTime = timeToSeek;
  globalTimeToSeek = timeToSeek;
});

volumeButton.addEventListener('click', () => {
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeButton.classList.add('mute');
  } else {
    volumeButton.classList.remove('mute');
  }
});

volumeSlider.addEventListener('click', (e) => {
  const sliderHeight = window.getComputedStyle(volumeSlider).height;
  const newVolume = (e.offsetY) / parseInt(sliderHeight, 10);
  audio.volume = newVolume;
  globalVolume = newVolume;
  volumePercentage.style.height = `${newVolume * 100}%`;
});
// ----------------------------------------------------------------AUDIO---------------------------
