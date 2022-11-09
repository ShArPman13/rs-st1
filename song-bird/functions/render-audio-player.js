function renderPlayer() {
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
  lengthTime.innerText = '00:00';
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

  return {
    player,
    playButton,
    volumeButton,
    progressLine,
    progressPoint,
    timeline,
    currentTime,
    lengthTime,
    volumeSlider,
    volumePercentage,
  };
}

export default renderPlayer;
