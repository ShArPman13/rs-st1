function getMatrix(array) {
  const matrix = [];
  const length = Math.sqrt(array.length);
  for (let j = 0; j < array.length; j += length) {
    const raw = [];
    for (let i = j; i < j + length; i += 1) {
      raw.push(array[i]);
    }
    matrix.push(raw);
  }
  return matrix;
}

export default getMatrix;
