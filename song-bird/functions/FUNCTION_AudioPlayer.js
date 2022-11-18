import getTimeCodeFromNum from './usefull/getTimeCodeFromNum';

function audioPlayer(__audioSrc) {
  const player = document.createElement('div');
  player.classList.add('player');

  const playerControls = document.createElement('div');
  playerControls.classList.add('player__controls', 'controls');

  const playButton = document.createElement('button');
  playButton.classList.add('controls__play', 'player-icon');

  const timeline = document.createElement('div');
  timeline.classList.add('player__timeline', 'timeline');

  const progressLine = document.createElement('div');
  progressLine.classList.add('timeline__progress', 'progress');
  const progressPoint = document.createElement('div');
  progressPoint.classList.add('progress__play-point');
  const timelineTime = document.createElement('div');
  timelineTime.classList.add('timeline__time', 'time');
  const currentTime = document.createElement('div');
  currentTime.classList.add('time__current');
  currentTime.innerText = '0:00';
  const lengthTime = document.createElement('div');
  lengthTime.classList.add('time__length');
  lengthTime.innerText = '0:00';
  timelineTime.append(currentTime, lengthTime);

  progressLine.append(progressPoint);
  timeline.append(progressLine, timelineTime);

  const volumeContainer = document.createElement('div');
  volumeContainer.classList.add('volume-container');

  const volumeButton = document.createElement('button');
  volumeButton.classList.add('volume', 'player-icon');

  const volumeSlider = document.createElement('div');
  volumeSlider.classList.add('volume-slider');
  const volumePercentage = document.createElement('div');
  volumePercentage.classList.add('volume-percentage');
  volumeSlider.append(volumePercentage);
  volumeContainer.append(volumeButton, volumeSlider);
  playerControls.append(volumeContainer, playButton);

  player.append(playerControls, timeline);

  // ---------------------------------------------------------------AUDIO---------------------------

  let isPlay = false;

  const audio = new Audio(__audioSrc);

  let globalTimeToSeek = 0;
  let globalVolume = 0.3;

  audio.addEventListener('loadedmetadata', () => {
    lengthTime.innerText = (getTimeCodeFromNum(audio.duration));
  });

  function togglePlayBtn() {
    if (!isPlay) {
      playButton.classList.remove('pause');
    } else {
      playButton.classList.add('pause');
    }
  }

  function playAudio() {
    let intervalProgressLine;
    audio.src = __audioSrc;
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

  function turnOffAudio() {
    audio.pause();
    isPlay = false;
    togglePlayBtn();
  }

  // ---------------------------------------------------------------AUDIO---------------------------
  return { player, turnOffAudio, togglePlayBtn };
}

export default audioPlayer;
