function parallax(e) {
  const body = document.querySelector('.body');
  const w = window.innerWidth / 2;
  const h = window.innerHeight / 2;
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const depth1 = `${50 - (mouseX - w) * 0.01}% ${50 - (mouseY - h) * 0.01}%`;
  const depth2 = `${50 - (mouseX - w) * 0.01}% ${50 - (mouseY - h) * 0.01}%`;
  const depth3 = `${50 - (mouseX - w) * 0.01}% ${50 - (mouseY - h) * 0.01}%`;
  const x = `${depth3}, ${depth2}, ${depth1}`;
  body.style.backgroundPosition = x;
}

export default parallax;
