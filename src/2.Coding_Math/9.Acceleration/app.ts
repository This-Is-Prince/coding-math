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

  // ===========First=============
  /* 
  // Resize Events
  window.addEventListener("resize", () => {
    ctx.setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);
    p = new Particle(100, ctx.canvas.height, 10, -Math.PI / 2);
    accel = new Vector2(0.1, 0.1);
  });

  //  Particle
  let p = new Particle(100, ctx.canvas.height, 10, -Math.PI / 2);
  let accel = new Vector2(0.1, 0.1);

  // Update
  function update() {
    ctx.clearCanvas();

    p.accelerate(accel);
    p.update();

    ctx.beginPath();
    ctx.arc(p.position.x, p.position.y, 10, 0, Math.PI * 2, false);
    ctx.fill();

    window.requestAnimationFrame(update);
  }
  update(); */

  // ===========Second=============
  // Resize
  window.addEventListener("resize", () => {
    ctx.setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);
    createParticles();
  });

  // Particles
  let particles: Particle[] = [];
  const totalParticles = 100;
  const gravity = new Vector2(0, 0.1);

  function createParticles() {
    const tempArr: Particle[] = [];
    for (let i = 0; i < totalParticles; i++) {
      tempArr.push(
        new Particle(
          ctx.canvas.width / 2,
          ctx.canvas.height / 3,
          Math.random() * 5 + 2,
          Math.random() * Math.PI * 2,
          gravity
        )
      );
    }
    particles = tempArr;
  }
  createParticles();

  // Update
  function update() {
    ctx.clearCanvas();
    particles.forEach((particle) => {
      //   particle.accelerate(gravity);
      particle.update();
      ctx.beginPath();
      ctx.arc(
        particle.position.x,
        particle.position.y,
        5,
        0,
        Math.PI * 2,
        false
      );
      ctx.fill();
    });
    window.requestAnimationFrame(update);
  }
  update();
});
