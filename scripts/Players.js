class Player {
  constructor({
    width,
    height,
    position,
    velocity,
    color,
    direction,
    playerField,
    frontDirection,
  }) {
    this.width = width;
    this.height = height;
    this.position = position;
    this.velocity = velocity;
    this.color = color;
    this.direction = direction;
    this.playerField = playerField;
    this.frontDirection = frontDirection;
  }
  update() {
    this.velocity.y = gravity(this.position.y, this.velocity.y, this.height);
    this.position.y += this.velocity.y;

    if (this.direction.left) this.position.x -= this.velocity.x;
    if (this.direction.rigth) this.position.x += this.velocity.x;

    if (this.position.x < this.playerField.start)
      this.position.x = this.playerField.start;
    if (this.position.x + this.width > this.playerField.end)
      this.position.x = this.playerField.end - this.width;

    if (
      ball.position.x + ball.radius >= this.position.x &&
      ball.position.x - ball.radius <= this.position.x + this.width &&
      ball.position.y + ball.radius >= this.position.y &&
      ball.position.y - ball.radius <= this.position.y + this.height
    ) {

      ball.velocity.x = Math.abs(ball.velocity.x)

      if (this.frontDirection.rigth) {
        ball.position.x = this.position.x + this.width + ball.radius + 10;
      }
      if (this.frontDirection.left) {
        ball.position.x = this.position.x - ball.radius - 10;
        ball.velocity.x *=-1
      }

      ball.position.y = this.position.y - ball.radius - 10;
      ball.velocity.y = -20;
    }
  }
  draw() {
    // fundo
    ctx.fillStyle = this.playerField.color;
    ctx.fillRect(
      this.playerField.start,
      0,
      this.playerField.end - this.playerField.start,
      canvas.height
    );

    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

class Ball {
  constructor({ radius, position, velocity, color }) {
    (this.position = position),
      (this.radius = radius),
      (this.velocity = velocity),
      (this.color = color);
  }
  update() {
    this.velocity.y = gravity(this.position.y, this.velocity.y, this.radius);
    this.position.y += this.velocity.y;

    this.position.x += this.velocity.x;
    if (
      this.position.x - this.radius <= 0 ||
      this.position.x + this.radius >= canvas.width
    )
      this.velocity.x *= -1;
    if (
      this.position.y - this.radius <= 0 ||
      this.position.y + this.radius >= canvas.height
    )
      this.velocity.y *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}

function gravity(positionY, velocityY, height) {
  if (positionY + height + velocityY >= canvas.height) {
    return 0;
  } else {
    return velocityY + gravitationalForce;
  }
}
