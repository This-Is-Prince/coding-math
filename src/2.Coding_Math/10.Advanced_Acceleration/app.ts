import { Particle } from "../Particle";
import { Utils } from "../Utils";
import { Vector2 } from "../Vector";

window.addEventListener("load", () => {
  // canvas
  const canvas = Utils.getCanvas("canvas");

  // context
  const ctx = Utils.get2DContext(canvas)
    .setCanvasBackgroundColor("white")
    .setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);

  // Resize Events
  window.addEventListener("resize", () => {
    ctx.setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);
  });

  // SHIP
  const gravity = new Vector2(0, 0);
  const ship = new Particle(
    ctx.canvas.width / 2,
    ctx.canvas.height / 2,
    0,
    0,
    gravity
  );
  const thrust = new Vector2(0, 0);
  let angle = 0;
  let turningLeft = false;
  let turningRight = false;
  let thrusting = false;

  //   Events
  window.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowUp":
        thrusting = true;
        break;
      case "ArrowLeft":
        turningLeft = true;
        break;
      case "ArrowRight":
        turningRight = true;
        break;
      default:
        break;
    }
  });

  window.addEventListener("keyup", function (event) {
    switch (event.key) {
      case "ArrowUp":
        thrusting = false;
        break;

      case "ArrowLeft":
        turningLeft = false;
        break;
      case "ArrowRight":
        turningRight = false;
        break;
      default:
        break;
    }
  });

  // Update
  function update() {
    ctx.clearCanvas();

    if (turningLeft) {
      angle -= 0.05;
    }
    if (turningRight) {
      angle += 0.05;
    }

    thrust.setAngle(angle);
    if (thrusting) {
      thrust.setLength(0.1);
    } else {
      thrust.setLength(0);
    }

    //animation goes here
    ship.accelerate(thrust);
    ship.update();

    ctx.save();
    ctx.translate(ship.position.x, ship.position.y);
    ctx.rotate(angle);

    ctx.beginPath();
    ctx.moveTo(10, 0);
    ctx.lineTo(-10, -7);
    ctx.lineTo(-10, 7);
    ctx.lineTo(10, 0);
    if (thrusting) {
      ctx.moveTo(-10, 0);
      ctx.lineTo(-18, 0);
    }
    ctx.stroke();
    ctx.restore();

    if (ship.position.x > ctx.canvas.width) {
      ship.position.x = 0;
    }
    if (ship.position.x < 0) {
      ship.position.x = ctx.canvas.width;
    }
    if (ship.position.y > ctx.canvas.height) {
      ship.position.y = 0;
    }
    if (ship.position.y < 0) {
      ship.position.y = ctx.canvas.height;
    }

    window.requestAnimationFrame(update);
  }
  update();
});
