export function setNodeStyle(node, x, y) {
  const squareNode = node;
  const shiftPos = 100;
  if (node) {
    squareNode.style.transform = `translate3D(${x * shiftPos}%, ${y * shiftPos}%, 0)`;
    if (node.getAttribute('data-matrix-id') === '0') {
      squareNode.style.display = 'none';
    }
  }
}

export function setPositionItems(matrix) {
  const itemNodes = Array.from(document.querySelectorAll('.square'));
  for (let y = 0; y < matrix.length; y += 1) {
    for (let x = 0; x < matrix[y].length; x += 1) {
      const value = matrix[y][x];
      const node = itemNodes[value];
      setNodeStyle(node, x, y);
    }
  }
}
