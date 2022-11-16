function renderChooseBirdLeft(__parts) {
  const birdLeftBtnArray = [];
  const chooseBirdLeft = document.createElement('ul');
  chooseBirdLeft.classList.add('choose-bird__left');
  for (let i = 0; i < __parts.length; i += 1) {
    const liBird = document.createElement('li');
    liBird.classList.add('li-bird');
    liBird.innerText = __parts[i].name;
    chooseBirdLeft.append(liBird);
    birdLeftBtnArray.push(liBird);
  }
  return { chooseBirdLeft, birdLeftBtnArray };
}

export default renderChooseBirdLeft;
