function renderBirdRightCard(img, description) {
  const imgDescriptionContainer = document.createElement('div');
  imgDescriptionContainer.classList.add('img-description-container');

  const birdImg = document.createElement('div');
  birdImg.classList.add('bird-img');
  birdImg.style.backgroundImage = `url(${img})`;
  const birdDescription = document.createElement('div');
  birdDescription.classList.add('bird-description');
  birdDescription.innerText = description;

  imgDescriptionContainer.append(birdImg, birdDescription);

  return imgDescriptionContainer;
}

export default renderBirdRightCard;
