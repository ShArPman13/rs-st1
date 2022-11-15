function renderResultPage(score) {
  const resultWrapper = document.createElement('div');
  resultWrapper.classList.add('result-wrapper');

  const caption = document.createElement('p');
  caption.classList.add('result-wrapper__caption');

  const scoreWrapper = document.createElement('div');
  scoreWrapper.classList.add('result-wrapper__score-wrapper');

  const spanCaption = document.createElement('span');
  spanCaption.classList.add('score-caption');
  spanCaption.innerText = 'You have finished the game with a score';
  const spanScore = document.createElement('span');
  spanScore.classList.add('score-number');
  spanScore.innerText = `${score} points`;

  scoreWrapper.append(spanCaption, spanScore);

  const gameOver = document.createElement('p');
  gameOver.classList.add('gameover-text');

  const newGameBtn = document.createElement('button');
  newGameBtn.classList.add('newgame-btn');
  newGameBtn.innerText = 'Play again';

  resultWrapper.append(caption, scoreWrapper);

  if (score === 30) {
    resultWrapper.append(gameOver);
  } else {
    resultWrapper.append(newGameBtn);
  }

  return resultWrapper;
}

export default renderResultPage;
