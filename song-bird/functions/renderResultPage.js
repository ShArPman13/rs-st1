import birdsLang from '../constants/birdsLang';
import {
  body, main, mainContainer, playNavButton, resultNavButton,
} from '../constants/dom/constants_dom';
import gamePageLang from '../constants/gamePageLang';
import renderGamePage from './render_gamepage';
import getRandomNum from './usefull/getRandomNum';

function renderResultPage(score, language, observer) {
  const backBtn = document.createElement('button');
  if (localStorage.getItem('score-Sharp13') === 'null'
  || !localStorage.getItem('score-Sharp13')) {
    const resultWrapper = document.createElement('div');
    resultWrapper.classList.add('result-wrapper');
    backBtn.classList.add('newgame-btn');
    if (language === 'ru') {
      resultWrapper.textContent = 'Вы еще не прошли игру!';
      backBtn.textContent = 'Назад';
    } else {
      resultWrapper.textContent = 'You haven\'t finished the game yet!';
      backBtn.textContent = 'Back';
    }
    resultWrapper.append(backBtn);

    backBtn.addEventListener('click', () => {
      body.classList.remove('noscroll');
      main.classList.remove('result');
      resultWrapper.remove();
      body.classList.remove('game');
      mainContainer.style.display = 'flex';
      mainContainer.classList.remove('hidden');
    });

    return resultWrapper;
  }

  const resultWrapper = document.createElement('div');
  resultWrapper.classList.add('result-wrapper');

  const caption = document.createElement('p');
  caption.classList.add('result-wrapper__caption');

  const scoreWrapper = document.createElement('div');
  scoreWrapper.classList.add('result-wrapper__score-wrapper');

  const spanCaption = document.createElement('span');
  spanCaption.classList.add('score-caption');
  [, , , , spanCaption.innerText] = gamePageLang[language];
  const spanScore = document.createElement('span');
  spanScore.classList.add('score-number');
  spanScore.innerText = `${score} ${gamePageLang[language][5]}`;

  scoreWrapper.append(spanCaption, spanScore);

  const gameOver = document.createElement('p');
  gameOver.classList.add('gameover-text');
  [, , , , , , gameOver.textContent] = gamePageLang[language];

  const newGameBtn = document.createElement('button');
  newGameBtn.classList.add('newgame-btn');
  [, , , , , , , newGameBtn.innerText] = gamePageLang[language];

  const backHomeBtn = document.createElement('button');
  backHomeBtn.classList.add('newgame-btn');
  [, , , , , , , , backHomeBtn.innerText] = gamePageLang[language];

  resultWrapper.append(caption, scoreWrapper);

  if (score === 30) {
    resultWrapper.append(gameOver, backHomeBtn);
  } else {
    resultWrapper.append(newGameBtn, backHomeBtn);
  }

  newGameBtn.addEventListener('click', () => {
    playNavButton.classList.add('game');
    resultNavButton.classList.add('game');
    body.classList.remove('noscroll');
    main.classList.remove('result');
    resultWrapper.remove();
    const randomNum = getRandomNum();
    const { gameWrapper } = renderGamePage(
      birdsLang[language],
      birdsLang[language][0][randomNum].audio,
      0,
      randomNum,
      0,
      language,
      observer,
    );
    gameWrapper.classList.remove('opacity');

    setTimeout(() => {
      mainContainer.style.display = 'none';
      body.classList.add('game');
      main.append(gameWrapper);
    }, 100);
  });

  backHomeBtn.addEventListener('click', () => {
    body.classList.remove('noscroll');
    main.classList.remove('result');
    resultWrapper.remove();
    body.classList.remove('game');
    mainContainer.style.display = 'flex';
    mainContainer.classList.remove('hidden');
    playNavButton.classList.remove('game');
    resultNavButton.classList.remove('game');
  });

  return resultWrapper;
}

export default renderResultPage;
