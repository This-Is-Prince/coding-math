import { Particle } from "../Particle";
import { Canvas2DContext, Utils } from "../Utils";
import { Vector2 } from "../Vector";

window.addEventListener("load", () => {
  // canvas
  const canvas = Utils.getCanvas("canvas");

  // context
  const ctx = Utils.get2DContext(canvas)
    .setCanvasBackgroundColor("white")
    .setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);

  window.addEventListener("resize", () => {
    ctx.setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);
    createParticle();
  });

  //   ==========first==========
  /*   // Ball
const ball = new Ball(100, 100, 10);
const velocity = new Velocity(0, 0);
velocity.setSpeed(0.2);
//   velocity.setDirection(Math.PI / 6);

update();
function update() {
    ctx.clearCanvas();
    ball.applyVelocity(velocity);
    ball.draw(ctx);
    window.requestAnimationFrame(update);
} */

  //   ==========second==========
  /*   const p = new Particle(100, 100, 3, Math.PI / 6);
update();
function update() {
    ctx.clearCanvas();
    p.update();
    ctx.beginPath();
    ctx.arc(p.position.x, p.position.y, 10, 0, Math.PI * 2, false);
    ctx.fill();
    window.requestAnimationFrame(update);
} */

  //   ==========third==========
  let particles: Particle[] = [];
  const totalParticles = 100;

  function createParticle() {
    const tempArr: Particle[] = [];
    for (let i = 0; i < totalParticles; i++) {
      tempArr.push(
        new Particle(
          ctx.canvas.width / 2,
          ctx.canvas.height / 2,
          Math.random() * 4 + 1,
          Math.random() * Math.PI * 2
        )
      );
    }
    particles = tempArr;
  }
  createParticle();
  function update() {
    ctx.clearCanvas();
    particles.forEach((particle) => {
      particle.update();
      ctx.beginPath();
      ctx.arc(
        particle.position.x,
        particle.position.y,
        10,
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

class Velocity {
  public vec!: Vector2;
  constructor(x: number, y: number) {
    this.vec = new Vector2(x, y);
  }
  public setSpeed(value: number) {
    this.vec.setLength(value);
  }
  public setDirection(angle: number) {
    this.vec.setAngle(angle);
  }
}

class Ball {
  public position!: Vector2;
  public radius!: number;
  constructor(x: number, y: number, radius: number) {
    this.position = new Vector2(x, y);
    if (radius <= 0) {
      throw new Error(`radius of ball can't be negative or zero`);
    }
    this.radius = radius;
  }

  public applyVelocity(velocity: Velocity) {
    this.position.addTo(velocity.vec);
  }

  public draw(ctx: Canvas2DContext) {
    ctx.beginPath();
    ctx.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 2,
      false
    );
    ctx.fill();
  }
}
