class Player {
  constructor({ width, height, position, velocity, color, direction, playerField}) {
    this.width = width;
    this.height = height;
    this.position = position;
    this.velocity = velocity;
    this.color = color;
    this.direction = direction;
    this.playerField = playerField
  }
  update() {
    this.velocity.y = gravity(this.position.y,this.velocity.y,this.height);
    this.position.y += this.velocity.y

    if(this.direction.left) this.position.x -= this.velocity.x;
    if(this.direction.rigth)this.position.x  += this.velocity.x;
  }
  draw() {
    // fundo
    ctx.fillStyle = this.playerField.color;
    ctx.fillRect(this.playerField.start,0,this.playerField.end - this.playerField.start, canvas.height);

    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

function gravity(positionY,velocityY,height) {
  if (positionY + height + velocityY >= canvas.height) {
   return 0;
  } else {
    return(velocityY + gravitationalForce);
  }
}
