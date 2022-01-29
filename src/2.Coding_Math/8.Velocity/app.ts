import { MathUtils } from "../Math";
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

  window.addEventListener("resize", () => {
    ctx.setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);
    createBalls();
  });

  let balls: Ball[] = [];
  function createBalls() {
    const totalBalls = 100;
    const tempBalls: Ball[] = [];
    for (let i = 0; i < totalBalls; i++) {
      const ball = new Ball(
        ctx.canvas.width / 2,
        ctx.canvas.height / 2,
        MathUtils.randomInt(2, 7)
      );
      ball.applyVelocity(
        MathUtils.randomInt(1, 5),
        MathUtils.randomRange(0, Math.PI * 2)
      );
      tempBalls.push(ball);
    }
    balls = tempBalls;
  }
  createBalls();

  function update() {
    ctx.clearCanvas();
    balls.forEach((ball) => {
      ball.draw(ctx);
    });

    window.requestAnimationFrame(update);
  }
  update();
});

class Ball {
  private shape!: CircleFill;
  private velocity!: Vector2;
  constructor(x: number, y: number, radius: number) {
    this.shape = new CircleFill(x, y, radius);
    this.velocity = new Vector2(0, 0);
  }
  public applyVelocity(speed: number, angle: number) {
    this.velocity = new Vector2();
    this.velocity.setLength(speed);
    this.velocity.setAngle(angle);
  }
  private updatePosition() {
    this.shape.position.x += this.velocity.x;
    this.shape.position.y += this.velocity.y;
  }
  public draw(ctx: CanvasRenderingContext2D) {
    this.updatePosition();
    this.shape.draw(ctx);
  }
}
