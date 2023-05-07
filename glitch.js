class Glitch {
  constructor(el) {
    this.el = el;
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.update = this.update.bind(this);
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }

  update() {
    const dataText = this.el.getAttribute('data-text');
    let result = '';
    for (let i = 0; i < dataText.length; i++) {
      result += Math.random() < 0.1 ? this.randomChar() : dataText[i];
    }
    this.el.textContent = result;
  }

  start() {
    setInterval(this.update, 100);
  }
}

class ScanLines {
  constructor(el) {
    this.el = el;
    this.update = this.update.bind(this);
  }

  update() {
    this.el.style.opacity = Math.random() * 0.5;
  }

  start() {
    setInterval(this.update, 75);
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
