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
}

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.glitch');
  const glitch = new Glitch(el);
  glitch.start();
});
