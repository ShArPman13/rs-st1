function findCoordinatesByNumber(number, matrix) {
  for (let y = 0; y < matrix.length; y += 1) {
    for (let x = 0; x < matrix[y].length; x += 1) {
      if (matrix[y][x] === number) {
        return { x, y };
      }
    }
  }
}

export default findCoordinatesByNumber;
