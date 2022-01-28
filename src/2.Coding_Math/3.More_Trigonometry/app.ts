import { MathUtils } from "../Math";
import { Point2D } from "../Point2D";
import { CircleFill } from "../Shapes/Circles/CircleFill";
import { Utils } from "../Utils";

window.addEventListener("load", () => {
  // canvas
  const canvas = Utils.getCanvas("canvas");

  // context
  const ctx = Utils.get2DContext(canvas)
    .setCanvasBackgroundColor("white")
    .setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);

  window.addEventListener("resize", () => {
    ctx.setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);
  });
  const ball = new CircleFill(ctx.canvas.width / 2, ctx.canvas.height / 2, 50);
  const tween = new Tween()
    .from(new Point2D(ctx.canvas.width / 2, 50))
    .to(new Point2D(ctx.canvas.width / 2, ctx.canvas.height - 50))
    .inTime(10);

  // First
  function draw() {
    ctx.clearCanvas();
    tween.update(ball);
    ball.draw(ctx);

    window.requestAnimationFrame(draw);
  }
  draw();
});

class Tween {
  private angle!: number;
  private startPoint!: Point2D;
  private endPoint!: Point2D;
  private time!: number;
  public prevTime!: number;

  constructor() {
    this.angle = 0;
    this.time = 0;
    this.prevTime = 0;
  }

  from(p: Point2D) {
    this.startPoint = p;
    return this;
  }

  to(p: Point2D) {
    this.endPoint = p;
    return this;
  }

  inTime(time: number) {
    if (time < 0) {
      console.error(`time can't be negative...`);
      this.time = 0;
    } else {
      this.time = time;
    }
    return this;
  }

  update(ball: CircleFill) {
    const currTime = performance.now();
    const deltaTime = (currTime - this.prevTime) / 1000;
    this.prevTime = currTime;

    this.angle += ((Math.PI * 0.5) / this.time) * deltaTime;
    this.angle %= Math.PI * 0.5;
    const e = this.endPoint;
    const s = this.startPoint;

    let norm = Math.cos(this.angle);
    ball.position.x = MathUtils.lerp(norm, s.x, e.x);
    norm = Math.sin(this.angle);
    ball.position.y = MathUtils.lerp(norm, s.y, e.y);
  }
}
