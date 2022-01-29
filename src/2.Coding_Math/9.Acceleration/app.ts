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
        ctx.canvas.height / 3,
        MathUtils.randomInt(2, 5)
      );
      ball.applyVelocity(Math.random() * 5 + 2, Math.random() * Math.PI * 2);
      ball.applyAcceleration(0.1, Math.PI * 0.5);
      tempBalls.push(ball);
    }
    balls = tempBalls;
  }
  createBalls();

  // Update
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
  private acceleration!: Vector2;
  constructor(x: number, y: number, radius: number) {
    this.shape = new CircleFill(x, y, radius);
    this.velocity = new Vector2(0, 0);
    this.acceleration = new Vector2(0, 0);
  }
  public applyVelocity(speed: number, angle: number) {
    this.velocity.setLength(speed);
    this.velocity.setAngle(angle);
  }
  public applyAcceleration(mag: number, angle: number) {
    this.acceleration.setLength(mag);
    this.acceleration.setAngle(angle);
  }
  private updateVelocity() {
    this.velocity.addTo(this.acceleration);
    this.shape.position.x += this.velocity.x;
    this.shape.position.y += this.velocity.y;
  }
  public draw(ctx: CanvasRenderingContext2D) {
    this.updateVelocity();
    this.shape.draw(ctx);
  }
}
