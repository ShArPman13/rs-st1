import birdsLang from '../constants/birdsLang';
import { body, main, mainContainer } from '../constants/dom/constants_dom';
import gamePageLang from '../constants/gamePageLang';
import renderGamePage from './render_gamepage';
import getRandomNum from './usefull/getRandomNum';
import observable from './usefull/observer';

function renderResultPage(score, language, observer) {
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
    main.classList.remove('result');
    resultWrapper.remove();
    body.classList.remove('game');
    mainContainer.style.display = 'flex';
    mainContainer.classList.remove('hidden');
  });

  return resultWrapper;
}

export default renderResultPage;
