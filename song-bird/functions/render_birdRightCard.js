function renderBirdRightCard(img, description, n, latN) {
  const topContainer = document.createElement('div');
  topContainer.classList.add('top-container');

  const namesContainer = document.createElement('div');
  namesContainer.classList.add('names-container');
  const name = document.createElement('span');
  name.classList.add('realname');
  name.innerText = n;
  const latinName = document.createElement('span');
  latinName.classList.add('latin-realname');
  latinName.innerText = `[${latN}]`;
  namesContainer.append(name, latinName);

  const imgDescriptionContainer = document.createElement('div');
  imgDescriptionContainer.classList.add('img-description-container');

  const birdImg = document.createElement('div');
  birdImg.classList.add('bird-img');
  birdImg.style.backgroundImage = `url(${img})`;
  const birdDescription = document.createElement('div');
  birdDescription.classList.add('bird-description');
  birdDescription.innerText = description;

  imgDescriptionContainer.append(birdImg, birdDescription);

  topContainer.append(namesContainer, imgDescriptionContainer);
  return topContainer;
}

export default renderBirdRightCard;
