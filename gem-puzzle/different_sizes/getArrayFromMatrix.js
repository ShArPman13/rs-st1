function getArrayFromMatrix(matrix) {
  const arr = [];
  for (let j = 0; j < matrix.length; j += 1) {
    for (let i = 0; i < matrix.length; i += 1) {
      arr.push(matrix[j][i]);
    }
  }
  return arr;
}

export default getArrayFromMatrix;
