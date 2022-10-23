function showHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const headerButtonsRaw = document.createElement('div');
  headerButtonsRaw.classList.add('header__buttons-raw', 'buttons-raw');

  const buttonNewGame = document.createElement('button');
  buttonNewGame.classList.add('buttons-raw__button-new-game', 'button');
  buttonNewGame.innerText = 'Hard game';
  const buttonNewGameEasy = document.createElement('button');
  buttonNewGameEasy.classList.add('buttons-raw__button-new-game-easy', 'button');
  buttonNewGameEasy.innerText = 'Easy game';

  const newGamesBlock = document.createElement('div');
  newGamesBlock.classList.add('buttons-raw__new-games-block');

  const buttonStopGame = document.createElement('button');
  buttonStopGame.classList.add('buttons-raw__button-stop-game', 'button');
  buttonStopGame.innerText = 'Stop';

  const saveGamesBlock = document.createElement('div');
  saveGamesBlock.classList.add('buttons-raw__save-games-block');

  const buttonSaveGame = document.createElement('button');
  buttonSaveGame.classList.add('buttons-raw__button-save-game', 'button');
  buttonSaveGame.innerText = 'Save game';
  const buttonLoadGame = document.createElement('button');
  buttonLoadGame.classList.add('buttons-raw__button-load-game', 'button');
  buttonLoadGame.innerText = 'Load game';

  const buttonShowResult = document.createElement('button');
  buttonShowResult.classList.add('buttons-raw__button-results', 'button');
  buttonShowResult.innerText = 'Show results';

  newGamesBlock.append(buttonNewGame);
  newGamesBlock.append(buttonNewGameEasy);
  headerButtonsRaw.append(newGamesBlock);

  headerButtonsRaw.append(buttonStopGame);
  headerButtonsRaw.append(buttonShowResult);

  saveGamesBlock.append(buttonSaveGame);
  saveGamesBlock.append(buttonLoadGame);
  headerButtonsRaw.append(saveGamesBlock);

  const headerTimesRaw = document.createElement('div');
  headerTimesRaw.classList.add('header__times-raw', 'times-raw');

  const spanBlockMoves = document.createElement('span');
  spanBlockMoves.classList.add('times-raw__span-title');
  spanBlockMoves.innerText = 'Moves: ';
  const blockMoves = document.createElement('div');
  blockMoves.classList.add('times-raw__moves');
  blockMoves.innerText = '0';
  spanBlockMoves.append(blockMoves);

  const spanBlockTime = document.createElement('span');
  spanBlockTime.classList.add('times-raw__span-title');
  spanBlockTime.innerText = 'Time: ';
  const blockTime = document.createElement('div');
  blockTime.classList.add('times-raw__time');
  blockTime.innerText = '00:00';
  spanBlockTime.append(blockTime);

  headerTimesRaw.append(spanBlockMoves);
  // headerTimesRaw.append(blockMoves);
  headerTimesRaw.append(spanBlockTime);
  // headerTimesRaw.append(blockTime);

  header.append(headerButtonsRaw);
  header.append(headerTimesRaw);

  return header;
}

export default showHeader;
