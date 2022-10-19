import './styles/normalize.scss';
import './styles/styles.scss';

function showHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const headerButtonsRaw = document.createElement('div');
  headerButtonsRaw.classList.add('header__buttons-raw', 'buttons-raw');

  const buttonNewGame = document.createElement('button');
  buttonNewGame.classList.add('buttons-raw__button-new-game', 'button');
  buttonNewGame.innerText = 'New game';
  const buttonStopGame = document.createElement('button');
  buttonStopGame.classList.add('buttons-raw__button-stop-game', 'button');
  buttonStopGame.innerText = 'Stop';
  const buttonSaveGame = document.createElement('button');
  buttonSaveGame.classList.add('buttons-raw__button-save-game', 'button');
  buttonSaveGame.innerText = 'Save game';
  const buttonLoadGame = document.createElement('button');
  buttonLoadGame.classList.add('buttons-raw__button-load-game', 'button');
  buttonLoadGame.innerText = 'Load game';
  const buttonShowResult = document.createElement('button');
  buttonShowResult.classList.add('buttons-raw__button-results', 'button');
  buttonShowResult.innerText = 'Show results';

  headerButtonsRaw.append(buttonNewGame);
  headerButtonsRaw.append(buttonStopGame);
  headerButtonsRaw.append(buttonSaveGame);
  headerButtonsRaw.append(buttonLoadGame);
  headerButtonsRaw.append(buttonShowResult);

  const headerTimesRaw = document.createElement('div');
  headerTimesRaw.classList.add('header__times-raw', 'times-raw');

  const spanBlockMoves = document.createElement('span');
  spanBlockMoves.classList.add('times-raw__span-title');
  spanBlockMoves.innerText = 'Moves: ';
  const blockMoves = document.createElement('div');
  blockMoves.classList.add('times-raw__moves');
  blockMoves.innerText = '0';
  const spanBlockTime = document.createElement('span');
  spanBlockTime.classList.add('times-raw__span-title');
  spanBlockTime.innerText = 'Time: ';
  const blockTime = document.createElement('div');
  blockTime.classList.add('times-raw__time');
  blockTime.innerText = '00:00';

  headerTimesRaw.append(spanBlockMoves);
  headerTimesRaw.append(blockMoves);
  headerTimesRaw.append(spanBlockTime);
  headerTimesRaw.append(blockTime);

  header.append(headerButtonsRaw);
  header.append(headerTimesRaw);

  return header;
}
document.body.append(showHeader());

const main = document.createElement('main');
main.classList.add('main');
document.body.append(main);

const canvasField = document.createElement('canvas');
canvasField.classList.add('canvas');
canvasField.width = 500;
canvasField.height = 500;
canvasField.innerText = 'Please use modern browser! =)';
main.append(canvasField);

const ctx = canvasField.getContext('2d');

let arr15 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i = 0; i < 10; i += 1) {
  arr15.sort(() => Math.random() - 0.5);
}

function drawSquare(x, y, number) {
  if (number === 0) {
    ctx.fillStyle = 'rgba(100, 100, 100, 0)';
  } else {
    ctx.fillStyle = 'rgba(100, 100, 100, 0.5)';
  }
  ctx.fillRect(6 + x, 6 + y, 117.5, 117.5);
  if (number < 10 && number !== 0) {
    ctx.font = '60px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(number, x + 48, y + 85);
  } else if (number >= 10) {
    ctx.font = '60px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(number, x + 27, y + 85);
  }
}

function drawAllSquares(position, number) {
  switch (position) {
    case 1: drawSquare(123.5, 0, number); break;
    case 2: drawSquare(247, 0, number); break;
    case 3: drawSquare(370.5, 0, number); break;
    case 4: drawSquare(0, 123.5, number); break;
    case 5: drawSquare(123.5, 123.5, number); break;
    case 6: drawSquare(247, 123.5, number); break;
    case 7: drawSquare(370.5, 123.5, number); break;
    case 8: drawSquare(0, 247, number); break;
    case 9: drawSquare(123.5, 247, number); break;
    case 10: drawSquare(247, 247, number); break;
    case 11: drawSquare(370.5, 247, number); break;
    case 12: drawSquare(0, 370.5, number); break;
    case 13: drawSquare(123.5, 370.5, number); break;
    case 14: drawSquare(247, 370.5, number); break;
    case 15: drawSquare(370.5, 370.5, number); break;
    default: drawSquare(0, 0, number);
  }
}

for (let i = 0; i <= 15; i += 1) {
  drawAllSquares(i, arr15[i]);
}

function whichSquare(offsetX) {
  let square;
  if (offsetX < 123.5) {
    square = 1;
  } if (offsetX >= 123.5 && offsetX < 247) {
    square = 2;
  } if (offsetX >= 247 && offsetX < 370.5) {
    square = 3;
  } if (offsetX >= 370.5) {
    square = 4;
  }
  return square;
}

const countMoves = document.querySelector('.times-raw__moves');
let moves = 0;
canvasField.addEventListener('click', (e) => {
  let clickPos;
  if (e.offsetY < 120.5) {
    const square = whichSquare(e.offsetX);
    switch (square) {
      case 1: clickPos = 0; break;
      case 2: clickPos = 1; break;
      case 3: clickPos = 2; break;
      default: clickPos = 3;
    }
  }
  if (e.offsetY >= 120.5 && e.offsetY < 241) {
    const square = whichSquare(e.offsetX);
    switch (square) {
      case 1: clickPos = 4; break;
      case 2: clickPos = 5; break;
      case 3: clickPos = 6; break;
      default: clickPos = 7;
    }
  }
  if ((e.offsetY >= 241 && e.offsetY < 361.5)) {
    const square = whichSquare(e.offsetX);
    switch (square) {
      case 1: clickPos = 8; break;
      case 2: clickPos = 9; break;
      case 3: clickPos = 10; break;
      default: clickPos = 11;
    }
  }
  if (e.offsetY > 361.5) {
    const square = whichSquare(e.offsetX);
    switch (square) {
      case 1: clickPos = 12; break;
      case 2: clickPos = 13; break;
      case 3: clickPos = 14; break;
      default: clickPos = 15;
    }
  }
  if (arr15[clickPos - 4] === 0) {
    arr15[clickPos - 4] = arr15[clickPos];
    arr15[clickPos] = 0;
    ctx.clearRect(0, 0, canvasField.width, canvasField.height);
    for (let i = 0; i <= 15; i += 1) {
      drawAllSquares(i, arr15[i]);
    }
    moves += 1;
    countMoves.innerText = moves;
  } else if (arr15[clickPos + 4] === 0) {
    arr15[clickPos + 4] = arr15[clickPos];
    arr15[clickPos] = 0;
    ctx.clearRect(0, 0, canvasField.width, canvasField.height);
    for (let i = 0; i <= 15; i += 1) {
      drawAllSquares(i, arr15[i]);
    }
    moves += 1;
    countMoves.innerText = moves;
  } else if (arr15[clickPos - 1] === 0 && whichSquare(e.offsetX) !== 1) {
    arr15[clickPos - 1] = arr15[clickPos];
    arr15[clickPos] = 0;
    ctx.clearRect(0, 0, canvasField.width, canvasField.height);
    for (let i = 0; i <= 15; i += 1) {
      drawAllSquares(i, arr15[i]);
    }
    moves += 1;
    countMoves.innerText = moves;
  } else if (arr15[clickPos + 1] === 0 && whichSquare(e.offsetX) !== 4) {
    arr15[clickPos + 1] = arr15[clickPos];
    arr15[clickPos] = 0;
    ctx.clearRect(0, 0, canvasField.width, canvasField.height);
    for (let i = 0; i <= 15; i += 1) {
      drawAllSquares(i, arr15[i]);
    }
    moves += 1;
    countMoves.innerText = moves;
  }
});

let timeout;
function showTime() {
  let sec = 0;
  let min = 0;

  function tick() {
    sec += 1;
    if (sec >= 60) {
      sec = 0;
      min += 1;
    }
  }

  function timer() {
    const blockTime = document.querySelector('.times-raw__time');
    timeout = setTimeout(() => {
      tick();
      blockTime.textContent = `0${min}:${sec}`;
      timer();
    }, 1000);
  }
  timer();
}
showTime();

const newGameButton = document.querySelector('.buttons-raw__button-new-game');
newGameButton.addEventListener('click', () => {
  const blockTime = document.querySelector('.times-raw__time');
  for (let i = 0; i < 10; i += 1) {
    arr15.sort(() => Math.random() - 0.5);
  }
  ctx.clearRect(0, 0, canvasField.width, canvasField.height);
  for (let i = 0; i <= 15; i += 1) {
    drawAllSquares(i, arr15[i]);
  }

  moves = 0;
  countMoves.innerText = moves;

  clearTimeout(timeout);
  blockTime.textContent = '00:00';
  showTime();
});

// -------------------------------------------------LOCAL STORAGE-----------------------------------
function setLocalStorage() {
  localStorage.setItem('currentState', JSON.stringify(arr15));
}
const saveGameButton = document.querySelector('.buttons-raw__button-save-game');
saveGameButton.addEventListener('click', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('currentState')) {
    arr15 = JSON.parse(localStorage.getItem('currentState'));
  }
  ctx.clearRect(0, 0, canvasField.width, canvasField.height);
  for (let i = 0; i <= 15; i += 1) {
    drawAllSquares(i, arr15[i]);
  }
}
const loadGameButton = document.querySelector('.buttons-raw__button-load-game');
loadGameButton.addEventListener('click', getLocalStorage);
// -------------------------------------------------LOCAL STORAGE-----------------------------------
