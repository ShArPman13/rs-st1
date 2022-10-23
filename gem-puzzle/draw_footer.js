function showFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const audioButton = document.createElement('button');
  audioButton.classList.add('volume');
  footer.append(audioButton);

  const size3 = document.createElement('button');
  size3.classList.add('size3', 'button');
  size3.innerText = '3x3';
  footer.append(size3);

  const gitLink = document.createElement('a');
  gitLink.href = 'https://github.com/ShArPman13';
  const gitImg = document.createElement('img');
  gitImg.classList.add('git');
  gitImg.src = './git_white.svg';
  gitImg.url = 'www.mail.ru';
  gitImg.alt = 'git-logo';
  gitLink.append(gitImg);
  footer.append(gitLink);

  const rssLink = document.createElement('a');
  rssLink.href = 'https://rs.school';
  const rssImg = document.createElement('img');
  rssImg.classList.add('rss');
  rssImg.src = './rss_white.svg';
  rssLink.append(rssImg);
  footer.append(rssLink);

  return footer;
}

export default showFooter;
