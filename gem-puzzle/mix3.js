function mixForAnyMatrix(difficulty, array) {
  const arr = array;
  const rawLength = Math.sqrt(arr.length);
  function fillAnyMatrix(a) {
    const matrix = [];
    for (let j = 0; j < a.length; j += rawLength) {
      const raw = [];
      for (let k = j; k < j + rawLength; k += 1) {
        raw.push(a[k]);
      }
      matrix.push(raw);
    }
    return matrix;
  }

  for (let i = 0; i < difficulty; i += 1) {
    const rundomNum = Math.random();
    const index0 = arr.indexOf(0);
    if (rundomNum < 0.25) {
      if (arr[index0 - rawLength]) {
        arr[index0] = arr[index0 - rawLength];
        arr[index0 - rawLength] = 0;
      }
      fillAnyMatrix(arr);
    } else if (rundomNum >= 0.25 && rundomNum < 0.5) {
      if (arr[index0 + rawLength]) {
        arr[index0] = arr[index0 + rawLength];
        arr[index0 + rawLength] = 0;
      }
      fillAnyMatrix(arr);
    } else if (rundomNum >= 0.5 && rundomNum < 0.75) {
      if (arr[index0 + 1]
          && arr[index0 + 1] !== fillAnyMatrix(arr)[0][0]
          && arr[index0 + 1] !== fillAnyMatrix(arr)[1][0]
          && arr[index0 + 1] !== fillAnyMatrix(arr)[2][0]
      ) {
        arr[index0] = arr[index0 + 1];
        arr[index0 + 1] = 0;
      }
      fillAnyMatrix(arr);
    } else if (rundomNum >= 0.75) {
      if (arr[index0 - 1]
          && arr[index0 - 1] !== fillAnyMatrix(arr)[0][3]
          && arr[index0 - 1] !== fillAnyMatrix(arr)[1][3]
          && arr[index0 - 1] !== fillAnyMatrix(arr)[2][3]
      ) {
        arr[index0] = arr[index0 - 1];
        arr[index0 - 1] = 0;
      }
      fillAnyMatrix(arr);
    }
  }
  return arr;
}

export default mixForAnyMatrix;
