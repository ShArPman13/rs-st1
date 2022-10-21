function mix() {
  function fillMatrix(a) {
    const matrix = [];
    let raw = [];
    for (let i = 0; i < 4; i += 1) {
      raw.push(a[i]);
    }
    matrix.push(raw);
    raw = [];
    for (let i = 4; i < 8; i += 1) {
      raw.push(a[i]);
    }
    matrix.push(raw);
    raw = [];
    for (let i = 8; i < 12; i += 1) {
      raw.push(a[i]);
    }
    matrix.push(raw);
    raw = [];
    for (let i = 12; i < 16; i += 1) {
      raw.push(a[i]);
    }
    matrix.push(raw);
    return matrix;
  }

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
  for (let i = 0; i < 100; i += 1) {
    const rundomNum = Math.random();
    const index0 = arr.indexOf(0);
    if (rundomNum < 0.25) {
      if (arr[index0 - 4]) {
        arr[index0] = arr[index0 - 4];
        arr[index0 - 4] = 0;
      }
      fillMatrix(arr);
    } else if (rundomNum >= 0.25 && rundomNum < 0.5) {
      if (arr[index0 + 4]) {
        arr[index0] = arr[index0 + 4];
        arr[index0 + 4] = 0;
      }
      fillMatrix(arr);
    } else if (rundomNum >= 0.5 && rundomNum < 0.75) {
      if (arr[index0 + 1]
        && arr[index0 + 1] !== fillMatrix(arr)[0][0]
        && arr[index0 + 1] !== fillMatrix(arr)[1][0]
        && arr[index0 + 1] !== fillMatrix(arr)[2][0]
        && arr[index0 + 1] !== fillMatrix(arr)[3][0]) {
        arr[index0] = arr[index0 + 1];
        arr[index0 + 1] = 0;
      }
      fillMatrix(arr);
    } else if (rundomNum >= 0.75) {
      if (arr[index0 - 1]
        && arr[index0 - 1] !== fillMatrix(arr)[0][3]
        && arr[index0 - 1] !== fillMatrix(arr)[1][3]
        && arr[index0 - 1] !== fillMatrix(arr)[2][3]
        && arr[index0 - 1] !== fillMatrix(arr)[3][3]) {
        arr[index0] = arr[index0 - 1];
        arr[index0 - 1] = 0;
      }
      fillMatrix(arr);
    }
  }
  return arr;
}

export default mix;
