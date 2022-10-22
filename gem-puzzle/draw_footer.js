function showFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const audioButton = document.createElement('button');
  audioButton.classList.add('volume');
  footer.append(audioButton);

  return footer;
}

export default showFooter;
