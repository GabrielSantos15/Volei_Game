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
    x: 3,
    y: 0,
  },
  color: "#f00",
  direction: {
    rigth: false,
    left: false,
  },
  playerField:{
    start : 0,
    end : canvas.width/2,
    color: "#500"
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
    x: 3,
    y: 0,
  },
  color: "#00f",
  direction: {
    rigth: false,
    left: false
  },
  playerField:{
    start : canvas.width/2,
    end : canvas.width,
    color: "#005"
  }

});

function game() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  p1.update();
  p1.draw();
  p2.update();
  p2.draw();
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

    case "w":
      p1.velocity.y = -20;
      break;
    case "ArrowUp":
      p2.velocity.y = -20;
      break;
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
