import getTimeCodeFromNum from './usefull/getTimeCodeFromNum';

const prev = {
  btn: document.createElement('button'),
  audio: new Audio(),
};

class AudioPlayer {
  constructor(audioSrc) {
    this.audio.src = audioSrc;
  }

  audio = new Audio();

  globalTimeToSeek = 0;

  globalVolume = 0.3;

  playButton = document.createElement('button');

  progressLine = document.createElement('div');

  currentTime = document.createElement('div');

  volumePercentage = document.createElement('div');

  render() {
    const player = document.createElement('div');
    player.classList.add('player');
    const playerControls = document.createElement('div');
    playerControls.classList.add('player__controls', 'controls');
    this.playButton.classList.add('controls__play', 'player-icon');

    this.playButton.addEventListener('click', () => this.play());

    const timeline = document.createElement('div');
    timeline.classList.add('player__timeline', 'timeline');

    timeline.addEventListener('click', (e) => {
      const timelineWidth = window.getComputedStyle(timeline).width;
      const timeToSeek = (e.offsetX / parseInt(timelineWidth, 10)) * this.audio.duration;
      this.audio.currentTime = timeToSeek;
      this.globalTimeToSeek = timeToSeek;
    });

    this.progressLine.classList.add('timeline__progress', 'progress');
    const progressPoint = document.createElement('div');
    progressPoint.classList.add('progress__play-point');
    const timelineTime = document.createElement('div');
    timelineTime.classList.add('timeline__time', 'time');
    this.currentTime.classList.add('time__current');
    this.currentTime.textContent = '0:00';
    const lengthTime = document.createElement('div');
    lengthTime.classList.add('time__length');

    this.audio.addEventListener('loadedmetadata', () => {
      lengthTime.innerText = (getTimeCodeFromNum(this.audio.duration));
    });
    this.audio.addEventListener('ended', () => {
      this.globalTimeToSeek = 0;
      this.audio.currentTime = this.globalTimeToSeek;
      this.isPlay = false;
      this.togglePlayBtn();
    });

    timelineTime.append(this.currentTime, lengthTime);
    this.progressLine.append(progressPoint);
    timeline.append(this.progressLine, timelineTime);

    const volumeContainer = document.createElement('div');
    volumeContainer.classList.add('volume-container');
    const volumeButton = document.createElement('button');
    volumeButton.classList.add('volume', 'player-icon');

    volumeButton.addEventListener('click', () => {
      this.audio.muted = !this.audio.muted;
      if (this.audio.muted) {
        volumeButton.classList.add('mute');
      } else {
        volumeButton.classList.remove('mute');
      }
    });

    const volumeSlider = document.createElement('div');
    volumeSlider.classList.add('volume-slider');

    volumeSlider.addEventListener('click', (e) => {
      const sliderHeight = window.getComputedStyle(volumeSlider).height;
      const newVolume = (e.offsetY) / parseInt(sliderHeight, 10);
      this.audio.volume = newVolume;
      this.globalVolume = newVolume;
      this.volumePercentage.style.height = `${newVolume * 100}%`;
    });

    this.volumePercentage.classList.add('volume-percentage');
    volumeSlider.append(this.volumePercentage);
    volumeContainer.append(volumeButton, volumeSlider);
    playerControls.append(volumeContainer, this.playButton);
    player.append(playerControls, timeline);

    return player;
  }

  play() {
    let intervalProgressLine;
    this.audio.volume = this.globalVolume;
    if (this.audio.paused) {
      prev.audio.pause();
      prev.audio = this.audio;
      prev.btn.classList.remove('pause');
      prev.btn = this.playButton;

      this.audio.play();
      this.audio.currentTime = this.globalTimeToSeek;
      this.isPlay = true;
      intervalProgressLine = setInterval(() => {
        this.progressLine.style.width = `${(this.audio.currentTime / this.audio.duration) * 100}%`;
        this.currentTime.textContent = getTimeCodeFromNum(this.audio.currentTime);
        this.globalTimeToSeek = this.audio.currentTime;
      }, 100);
    } else {
      this.audio.pause();
      this.isPlay = false;
      clearInterval(intervalProgressLine);
      this.audio.currentTime = this.globalTimeToSeek;
    }
    this.togglePlayBtn();
  }

  togglePlayBtn() {
    if (this.audio.paused) {
      this.playButton.classList.remove('pause');
    } else {
      this.playButton.classList.add('pause');
    }
  }

  turnOff() {
    this.audio.pause();
    this.isPlay = false;
    this.togglePlayBtn();
  }
}

export default AudioPlayer;
