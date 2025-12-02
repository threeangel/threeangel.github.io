// js/Player.js
export default class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 40;
    this.velX = 0;
    this.velY = 0;
    this.speed = 3; // ✅ Уменьшена скорость для плавности
    this.jumpPower = -12;
    this.onGround = false;
    this.color = '#3498db';
  }

  update(input) {
    // Плавное ускорение/замедление
    if (input.keys.has('a') || input.keys.has('ArrowLeft')) {
      this.velX = Math.max(this.velX - 0.5, -this.speed);
    } else if (input.keys.has('d') || input.keys.has('ArrowRight')) {
      this.velX = Math.min(this.velX + 0.5, this.speed);
    } else {
      // Затухание скорости при отпускании клавиш
      this.velX *= 0.8;
      if (Math.abs(this.velX) < 0.1) this.velX = 0;
    }

    if ((input.keys.has(' ') || input.keys.has('ArrowUp') || input.keys.has('w')) && this.onGround) {
      this.velY = this.jumpPower;
      this.onGround = false;
    }

    this.x += this.velX;
  }
}