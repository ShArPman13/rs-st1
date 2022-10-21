import mix from './clevershuffle';
import showHeader from './draw_header';
import './styles/normalize.scss';
import './styles/styles.scss';

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

const arrTrue15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

let arr15 = mix();

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
    case 16: break;
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

function moveSquare(x, y, direction, number) {
  const startX = x;
  const startY = y;
  let positionX = x; // начальная позиция X координаты
  let positionY = y; // начальная позиция Y координаты

  function animation() {
    ctx.beginPath();
    ctx.clearRect(0, 0, 500, 500); // очистка холста
    for (let i = 0; i <= 15; i += 1) {
      if (arr15[i] === number) {
        i += 1;
      }
      drawAllSquares(i, arr15[i]);
    }
    ctx.fillStyle = 'rgba(100, 100, 100, 0.5)';
    ctx.fillRect(positionX + 6, positionY + 6, 117.5, 117.5); // x, y, width, height

    if (number < 10 && number !== 0) {
      ctx.font = '60px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText(number, positionX + 48, positionY + 85);
    } else if (number >= 10) {
      ctx.font = '60px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText(number, positionX + 27, positionY + 85);
    }

    if (direction === 'up') {
      positionY -= 3.5;
    }
    if (direction === 'down') {
      positionY += 3.5;
    }
    if (direction === 'right') {
      positionX += 3.5;
    }
    if (direction === 'left') {
      positionX -= 3.5;
    }
    const requestAnimation = requestAnimationFrame(animation);

    if (positionX > startX + 123.5 || positionX < startX - 123.5) {
      cancelAnimationFrame(requestAnimation);
    }
    if (positionY > startY + 123.5 || positionY < startY - 123.5) {
      cancelAnimationFrame(requestAnimation);
    }
  }

  requestAnimationFrame(animation);
}

function eraseSquare(square, direction, number) {
  console.log(square, direction);
  switch (square) {
    case 1:
      ctx.clearRect(123.5, 0, 124, 124);
      moveSquare(123.5, 0, direction, number); break;
    case 2:
      ctx.clearRect(247, 0, 124, 124);
      moveSquare(247, 0, direction, number); break;
    case 3:
      ctx.clearRect(370.5, 0, 124, 124);
      moveSquare(370.5, 0, direction, number); break;
    case 4:
      ctx.clearRect(0, 123.5, 124, 124);
      moveSquare(0, 123.5, direction, number); break;
    case 5:
      ctx.clearRect(123.5, 123.5, 124, 124);
      moveSquare(123.5, 123.5, direction, number); break;
    case 6:
      ctx.clearRect(247, 123.5, 124, 124);
      moveSquare(247, 123.5, direction, number); break;
    case 7:
      ctx.clearRect(370.5, 123.5, 124, 124);
      moveSquare(370.5, 123.5, direction, number); break;
    case 8:
      ctx.clearRect(0, 247, 124, 124);
      moveSquare(0, 247, direction, number); break;
    case 9:
      ctx.clearRect(123.5, 247, 124, 124);
      moveSquare(123.5, 247, direction, number); break;
    case 10:
      ctx.clearRect(247, 247, 124, 124);
      moveSquare(247, 247, direction, number); break;
    case 11:
      ctx.clearRect(370.5, 247, 124, 124);
      moveSquare(370.5, 247, direction, number); break;
    case 12:
      ctx.clearRect(0, 370.5, 124, 124);
      moveSquare(0, 370.5, direction, number); break;
    case 13:
      ctx.clearRect(123.5, 370.5, 124, 124);
      moveSquare(123.5, 370.5, direction, number); break;
    case 14:
      ctx.clearRect(247, 370.5, 124, 124);
      moveSquare(247, 370.5, direction, number); break;
    case 15: ctx.clearRect(370.5, 370.5, 124, 124);
      moveSquare(370.5, 370.5, direction, number); break;
    default:
      ctx.clearRect(0, 0, 124, 124);
      moveSquare(0, 0, direction, number);
  }
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

  const numberOnSquare = arr15[clickPos];

  if (arr15[clickPos - 4] === 0) {
    arr15[clickPos - 4] = arr15[clickPos];
    arr15[clickPos] = 0;
    eraseSquare(clickPos, 'up', numberOnSquare);
    setTimeout(() => {
      ctx.clearRect(0, 0, canvasField.width, canvasField.height);
      for (let i = 0; i <= 15; i += 1) {
        drawAllSquares(i, arr15[i]);
      }
    }, 200);
    moves += 1;
    countMoves.innerText = moves;
  } else if (arr15[clickPos + 4] === 0) {
    arr15[clickPos + 4] = arr15[clickPos];
    arr15[clickPos] = 0;
    eraseSquare(clickPos, 'down', numberOnSquare);
    setTimeout(() => {
      ctx.clearRect(0, 0, canvasField.width, canvasField.height);
      for (let i = 0; i <= 15; i += 1) {
        drawAllSquares(i, arr15[i], numberOnSquare);
      }
    }, 200);
    moves += 1;
    countMoves.innerText = moves;
  } else if (arr15[clickPos - 1] === 0 && whichSquare(e.offsetX) !== 1) {
    arr15[clickPos - 1] = arr15[clickPos];
    arr15[clickPos] = 0;
    eraseSquare(clickPos, 'left', numberOnSquare);
    setTimeout(() => {
      ctx.clearRect(0, 0, canvasField.width, canvasField.height);
      for (let i = 0; i <= 15; i += 1) {
        drawAllSquares(i, arr15[i]);
      }
    }, 200);
    moves += 1;
    countMoves.innerText = moves;
  } else if (arr15[clickPos + 1] === 0 && whichSquare(e.offsetX) !== 4) {
    arr15[clickPos + 1] = arr15[clickPos];
    arr15[clickPos] = 0;
    eraseSquare(clickPos, 'right', numberOnSquare);
    setTimeout(() => {
      ctx.clearRect(0, 0, canvasField.width, canvasField.height);
      for (let i = 0; i <= 15; i += 1) {
        drawAllSquares(i, arr15[i]);
      }
    }, 200);
    moves += 1;
    countMoves.innerText = moves;
  }
  if (JSON.stringify(arr15) === JSON.stringify(arrTrue15)) {
    setTimeout(() => {
      console.log('win');
    }, 300);
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
  arr15 = mix();
  ctx.clearRect(0, 0, canvasField.width, canvasField.height);
  for (let i = 0; i <= 15; i += 1) {
    drawAllSquares(i, arr15[i]);
  }

  moves = 0;
  countMoves.innerText = moves;

  clearTimeout(timeout);
  blockTime.textContent = '00:0';
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
