function renderField(array) {
  const gameField = document.createElement('div');
  gameField.classList.add('game-field');
  if (window.screen.width > 1400) {
    gameField.style.width = '600px';
    gameField.style.height = '600px';
  } else if (window.screen.width > 600 && window.screen.width < 1400) {
    gameField.style.width = '500px';
    gameField.style.height = '500px';
  } else {
    gameField.style.width = '300px';
    gameField.style.height = '300px';
  }

  array.forEach((_element, i) => {
    const square = document.createElement('button');
    square.setAttribute('data-matrix-id', i);
    square.classList.add('square');
    square.textContent = i;
    square.style.width = `${100 / Math.sqrt(array.length)}%`;
    square.style.height = `${100 / Math.sqrt(array.length)}%`;
    gameField.append(square);
  });
  return gameField;
}

export default renderField;
