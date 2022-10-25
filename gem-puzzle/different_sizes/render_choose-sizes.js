function showSizes() {
  const chooseSize = document.createElement('div');
  chooseSize.classList.add('choose-size');

  const size3 = document.createElement('button');
  size3.classList.add('size');
  size3.innerText = '3x3';
  const size4 = document.createElement('button');
  size4.classList.add('size');
  size4.innerText = '4x4';
  const size5 = document.createElement('button');
  size5.classList.add('size');
  size5.innerText = '5x5';
  const size6 = document.createElement('button');
  size6.classList.add('size');
  size6.innerText = '6x6';
  const size7 = document.createElement('button');
  size7.classList.add('size');
  size7.innerText = '7x7';
  const size8 = document.createElement('button');
  size8.classList.add('size');
  size8.innerText = '8x8';
  chooseSize.append(size3, size4, size5, size6, size7, size8);
  chooseSize.classList.add('hidden');

  return chooseSize;
}

export default showSizes;
