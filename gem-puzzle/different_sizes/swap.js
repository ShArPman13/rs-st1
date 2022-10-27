function swap(coordNum, coordZero, matrix) {
  const matr = matrix;
  const tempCoord = matrix[coordNum.y][coordNum.x];
  matr[coordNum.y][coordNum.x] = matr[coordZero.y][coordZero.x];
  matr[coordZero.y][coordZero.x] = tempCoord;
}

export default swap;
