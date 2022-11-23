import birdsLang from '../constants/birdsLang';
import AudioPlayer from './CLASS_AudioPlayer';

class BirdRightCard {
  constructor(bird, indexArray, indexBird, observer, audioObserver) {
    this.bird = bird;
    this.indexArray = indexArray;
    this.indexBird = indexBird;
    this.observer = observer;
    this.audioObserver = audioObserver;
  }

  render() {
    const topContainerGallery = document.createElement('div');
    topContainerGallery.classList.add('top-container-gallery');

    const namesContainer = document.createElement('div');
    namesContainer.classList.add('names-container');
    const name = document.createElement('span');
    name.classList.add('realname');
    name.textContent = this.bird.name;
    const latinName = document.createElement('span');
    latinName.classList.add('latin-realname');
    latinName.textContent = `[${this.bird.species}]`;
    namesContainer.append(name, latinName);
    const imgDescriptionContainer = document.createElement('div');
    imgDescriptionContainer.classList.add('img-description-container');
    const birdImg = document.createElement('div');
    birdImg.classList.add('bird-img');
    birdImg.style.backgroundImage = `url(${this.bird.image})`;
    const birdDescription = document.createElement('div');
    birdDescription.classList.add('bird-description', 'scroll-block');
    birdDescription.innerText = this.bird.description;

    this.observer.subscribe((lg) => {
      birdDescription.innerText = birdsLang[lg][this.indexArray][this.indexBird].description;
      latinName.textContent = `[${birdsLang[lg][this.indexArray][this.indexBird].species}]`;
      name.textContent = birdsLang[lg][this.indexArray][this.indexBird].name;
    });

    imgDescriptionContainer.append(birdImg, birdDescription);
    const player = new AudioPlayer(this.bird.audio, this.audioObserver);
    topContainerGallery.append(namesContainer, imgDescriptionContainer, player.render());

    this.audioObserver.subscribe(() => {
      player.turnOff();
    });

    return topContainerGallery;
  }
}

export default BirdRightCard;
