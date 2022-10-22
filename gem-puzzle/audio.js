function createMusic(path) {
  const music = new Audio();
  music.src = path;
  music.volume = 0.1;
  music.play();
  return music;
}

export default createMusic;
