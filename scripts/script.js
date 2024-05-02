const canvas = document.getElementById("tela");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillRect(0, 0, 55, 50);

const gravitationalForce = 0.7;

const p1 = new Player({
  width: 50,
  height: 100,
  position: {
    x: 50,
    y: 0,
  },
  velocity: {
    x: 4,
    y: 0,
  },
  color: "#f00",
  direction: {
    rigth: false,
    left: false,
  },
  playerField: {
    start: 0,
    end: canvas.width / 2,
    color: "#500",
  },
  frontDirection:{
    left: false,
    rigth: true
  }
});
const p2 = new Player({
  width: 50,
  height: 100,
  position: {
    x: canvas.width - 100,
    y: 0,
  },
  velocity: {
    x: 4,
    y: 0,
  },
  color: "#00f",
  direction: {
    rigth: false,
    left: false,
  },
  playerField: {
    start: canvas.width / 2,
    end: canvas.width,
    color: "#005",
  },
  frontDirection:{
    left: true,
    rigth: false
  }
});

const ball = new Ball({
  radius: 20,
  position:{
    x: canvas.width/2,
    y:  canvas.height-400
  },
  velocity:{
    x:3,
    y:0
  },
  color: '#fff'
})

function game() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  p1.update();
  p1.draw();
  p2.update();
  p2.draw();
  ball.update();
  ball.draw()

  ctx.fillStyle = "#fff"
  ctx.fillRect(canvas.width/2-5,canvas.height-120,10,120)
  requestAnimationFrame(game);
}
game();

// Keyboard controls

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "a":
      p1.direction.left = true;
      break;
    case "d":
      p1.direction.rigth = true;
      break;

    case "ArrowLeft":
      p2.direction.left = true;
      break;
    case "ArrowRight":
      p2.direction.rigth = true;
      break;
  }

  if (event.key == "w" && p1.position.y + p1.height >= canvas.height) {
    p1.velocity.y = -20;
  }
  if (event.key == "ArrowUp" && p2.position.y + p2.height >= canvas.height) {
    p2.velocity.y = -20;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "a":
      p1.direction.left = false;
      break;
    case "d":
      p1.direction.rigth = false;
      break;

    case "ArrowLeft":
      p2.direction.left = false;
      break;
    case "ArrowRight":
      p2.direction.rigth = false;
      break;
  }
});
