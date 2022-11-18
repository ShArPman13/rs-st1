function renderBirdRightCard(birdsLang, lang, gameLevel, index, observer) {
  const topContainer = document.createElement('div');
  topContainer.classList.add('top-container');

  const namesContainer = document.createElement('div');
  namesContainer.classList.add('names-container');
  const name = document.createElement('span');
  name.classList.add('realname');
  name.textContent = birdsLang[lang][gameLevel][index].name;
  const latinName = document.createElement('span');
  latinName.classList.add('latin-realname');
  latinName.textContent = `[${birdsLang[lang][gameLevel][index].species}]`;
  namesContainer.append(name, latinName);
  const imgDescriptionContainer = document.createElement('div');
  imgDescriptionContainer.classList.add('img-description-container');
  const birdImg = document.createElement('div');
  birdImg.classList.add('bird-img');
  birdImg.style.backgroundImage = `url(${birdsLang[lang][gameLevel][index].image})`;
  const birdDescription = document.createElement('div');
  birdDescription.classList.add('bird-description', 'scroll-block');
  birdDescription.innerText = birdsLang[lang][gameLevel][index].description;

  observer.subscribe((lg) => {
    birdDescription.innerText = birdsLang[lg][gameLevel][index].description;
    latinName.textContent = `[${birdsLang[lg][gameLevel][index].species}]`;
    name.textContent = birdsLang[lg][gameLevel][index].name;
  });

  imgDescriptionContainer.append(birdImg, birdDescription);

  topContainer.append(namesContainer, imgDescriptionContainer);

  return topContainer;
}

export default renderBirdRightCard;
