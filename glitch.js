class Glitch {
  constructor(el) {
    this.el = el;
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    this.update = this.update.bind(this);
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }

  update() {
    const newText = this.el.textContent.split('').map((char) => (Math.random() < 0.5 ? this.randomChar() : char)).join('');
    this.el.textContent = newText;
  }

  start() {
    setInterval(this.update, 50);
  }
}class Glitch {
  // ...
}

class ScanLines {
  constructor(el) {
    this.el = el;
    this.update = this.update.bind(this);
  }

  update() {
    this.el.style.opacity = Math.random() * 0.1;
  }

  start() {
    setInterval(this.update, 150);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const glitchEl = document.querySelector('.glitch');
  const glitch = new Glitch(glitchEl);
  glitch.start();

  const scanLinesEl = document.querySelector('.scan-lines');
  const scanLines = new ScanLines(scanLinesEl);
  scanLines.start();
});
