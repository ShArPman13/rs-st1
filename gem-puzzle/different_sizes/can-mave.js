function isOkForMove(coordsNumber, coordsZero) {
  if (
    ((coordsNumber.x - 1 === coordsZero.x || coordsNumber.x + 1 === coordsZero.x
    || coordsNumber.x === coordsZero.x)
    && (coordsNumber.y - 1 === coordsZero.y || coordsNumber.y + 1 === coordsZero.y
    || coordsNumber.y === coordsZero.y))

    && (coordsNumber.x === coordsZero.x && coordsNumber.y - 1 === coordsZero.y)
    || (coordsNumber.x === coordsZero.x && coordsNumber.y + 1 === coordsZero.y)
    || (coordsNumber.y === coordsZero.y && coordsNumber.x + 1 === coordsZero.x)
    || (coordsNumber.y === coordsZero.y && coordsNumber.x - 1 === coordsZero.x)) {
    return true;
  }
}

export default isOkForMove;
