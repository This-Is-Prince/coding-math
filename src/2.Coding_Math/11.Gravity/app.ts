import { CircleFill } from "../Shapes/Circles/CircleFill";
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

  const sun = new Ball(ctx.canvas.width / 2, ctx.canvas.height / 2, 30, 20000);
  const planet = new Ball(
    ctx.canvas.width / 2 + 200,
    ctx.canvas.height / 2,
    5,
    10
  );
  planet.applyVelocity(10, -Math.PI / 2);

  // Update
  function update() {
    ctx.clearCanvas();
    planet.gravitateTo(sun);
    planet.draw(ctx);
    sun.draw(ctx);
    window.requestAnimationFrame(update);
  }
  update();
});

class Ball {
  public shape!: CircleFill;
  public velocity!: Vector2;
  public mass!: number;
  constructor(x: number, y: number, radius: number, mass: number) {
    this.shape = new CircleFill(x, y, radius);
    this.velocity = new Vector2();
    this.mass = mass;
  }

  public accelerate(accel: Vector2) {
    this.velocity.addTo(accel);
  }

  public applyVelocity(speed: number, direction: number) {
    this.velocity.setLength(speed);
    this.velocity.setAngle(direction);
  }

  private update() {
    this.shape.position.x += this.velocity.x;
    this.shape.position.y += this.velocity.y;
  }

  public angleTo(p2: Ball) {
    return Math.atan2(
      p2.shape.position.y - this.shape.position.y,
      p2.shape.position.x - this.shape.position.x
    );
  }

  public distanceTo(p2: Ball) {
    const dx = p2.shape.position.x - this.shape.position.x;
    const dy = p2.shape.position.y - this.shape.position.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  public gravitateTo(p2: Ball) {
    const gravity = new Vector2(0, 0);
    const dist = this.distanceTo(p2);
    gravity.setLength(p2.mass / (dist * dist));
    gravity.setAngle(this.angleTo(p2));
    this.velocity.addTo(gravity);
  }

  public draw(ctx: CanvasRenderingContext2D) {
    this.update();
    this.shape.draw(ctx);
  }
}
