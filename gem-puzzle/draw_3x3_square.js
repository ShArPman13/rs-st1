export function drawSquare(x, y, number) {
  const canvasField = document.querySelector('.canvas');
  const ctx = canvasField.getContext('2d');
  if (number === 0) {
    ctx.fillStyle = 'rgba(100, 100, 100, 0)';
  } else {
    ctx.fillStyle = 'rgba(100, 100, 100, 0.7)';
  }
  ctx.fillRect(6 + x, 6 + y, (canvasField.width - 30) / 3, (canvasField.height - 30) / 3);
  if (number < 10 && number !== 0) {
    if (canvasField.width === 300) {
      ctx.font = '45px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText(number, x + 26, y + 55);
    } else if (canvasField.width === 500) {
      ctx.font = '55px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText(number, x + 48, y + 85);
    } else {
      ctx.font = '60px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText(number, x + 58, y + 95);
    }
  } else if (number >= 10) {
    if (canvasField.width === 300) {
      ctx.font = '45px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText(number, x + 13, y + 55);
    } else if (canvasField.width === 500) {
      ctx.font = '55px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText(number, x + 27, y + 85);
    } else {
      ctx.font = '60px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText(number, x + 37, y + 95);
    }
  }
}

export function draw3AllSquares(position, number) {
  const canvasField = document.querySelector('.canvas');
  const ctx = canvasField.getContext('2d');
  switch (position) {
    case 0: drawSquare(0, 0, number); break;
    case 1: drawSquare((((canvasField.width - 30) / 3) + 9), 0, number); break;
    case 2: drawSquare(((canvasField.width - 30) / 3) * 2 + 18, 0, number); break;
    case 3: drawSquare(0, ((canvasField.width - 30) / 3) + 9, number); break;
    case 4: drawSquare(
      (((canvasField.width - 30) / 3) + 9),
      (((canvasField.width - 30) / 3) + 9),
      number,
    ); break;
    case 5: drawSquare(
      ((canvasField.width - 30) / 3) * 2 + 18,
      ((canvasField.width - 30) / 3) + 9,
      number,
    ); break;
    case 6: drawSquare(
      0,
      ((canvasField.width - 30) / 3) * 2 + 18,

      number,
    ); break;
    case 7: drawSquare(
      ((canvasField.width - 30) / 3) + 9,
      ((canvasField.width - 30) / 3) * 2 + 18,
      number,
    ); break;
    case 8: drawSquare(
      ((canvasField.width - 30) / 3) * 2 + 18,
      ((canvasField.width - 30) / 3) * 2 + 18,
      number,
    ); break;
    default: break;
  }
}
