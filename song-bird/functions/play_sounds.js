export function playAudioRightAnswer() {
  const audio = new Audio();
  audio.volume = 0.2;
  audio.src = './sounds/right_answer.wav';
  audio.play();
}

export function playAudioWrongAnswer() {
  const audio = new Audio();
  audio.volume = 0.3;
  audio.src = './sounds/wrong_answer.wav';
  audio.play();
}
