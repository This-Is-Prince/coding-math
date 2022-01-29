import { MathUtils } from "../Math";
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
    createBalls();
  });

  /**
   * Circle Animations
   */
  /*   let balls: { ball: CircleFill; circleAnimation: CircleAnimation }[] = [];
  function createBalls() {
    const totalBalls = 100;
    const tempBalls: { ball: CircleFill; circleAnimation: CircleAnimation }[] =
      [];
    for (let i = 0; i < totalBalls; i++) {
      const ball = new CircleFill(
        ctx.canvas.width / 2,
        ctx.canvas.height / 2,
        MathUtils.randomInt(5, 10)
      );
      const circleAnimation = new CircleAnimation(
        MathUtils.randomInt(0, ctx.canvas.width),
        MathUtils.randomInt(0, ctx.canvas.height),
        MathUtils.randomInt(50, 100),
        0.075
        ball
      );
      tempBalls.push({ ball, circleAnimation });
    }
    balls = tempBalls;
  }
  createBalls(); */

  /**
   * Ellipses Animations
   */
  /*   let balls: { ball: CircleFill; ellipsesAnimation: EllipsesAnimation }[] = [];
  function createBalls() {
    const totalBalls = 100;
    const tempBalls: {
      ball: CircleFill;
      ellipsesAnimation: EllipsesAnimation;
    }[] = [];
    for (let i = 0; i < totalBalls; i++) {
      const ball = new CircleFill(
        ctx.canvas.width / 2,
        ctx.canvas.height / 2,
        MathUtils.randomInt(5, 10)
      );
      const ellipsesAnimation = new EllipsesAnimation(
        MathUtils.randomInt(0, ctx.canvas.width),
        MathUtils.randomInt(0, ctx.canvas.height),
        MathUtils.randomInt(50, 100),
        MathUtils.randomInt(50, 100),
        0.1,
        ball
      );
      tempBalls.push({ ball, ellipsesAnimation });
    }
    balls = tempBalls;
  }
  createBalls(); */

  /**
   * Lissajous Animations
   */
  let balls: { ball: CircleFill; lissajousAnimation: LissajousAnimation }[] =
    [];
  function createBalls() {
    const totalBalls = 100;
    const tempBalls: {
      ball: CircleFill;
      lissajousAnimation: LissajousAnimation;
    }[] = [];
    for (let i = 0; i < totalBalls; i++) {
      const ball = new CircleFill(
        ctx.canvas.width / 2,
        ctx.canvas.height / 2,
        MathUtils.randomInt(5, 10)
      );
      const lissajousAnimation = new LissajousAnimation(
        MathUtils.randomInt(0, ctx.canvas.width),
        MathUtils.randomInt(0, ctx.canvas.height),
        MathUtils.randomInt(50, 100),
        MathUtils.randomInt(50, 100),
        0.1,
        0.131,
        ball
      );
      tempBalls.push({ ball, lissajousAnimation });
    }
    balls = tempBalls;
  }
  createBalls();
  // First
  function draw() {
    ctx.clearCanvas();
    balls.forEach(({ lissajousAnimation, ball }) => {
      lissajousAnimation.animate();
      ball.draw(ctx);
    });

    window.requestAnimationFrame(draw);
  }
  draw();
});

class CircleAnimation {
  private x!: number;
  private y!: number;
  private radius!: number;
  private ball!: CircleFill;
  private angle!: number;
  private speed!: number;

  constructor(
    x: number,
    y: number,
    radius: number,
    speed: number,
    ball: CircleFill
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.ball = ball;
    this.angle = 0;
    this.speed = speed;
  }
  public animate() {
    this.ball.position.x = this.x + Math.cos(this.angle) * this.radius;
    this.ball.position.y = this.y + Math.sin(this.angle) * this.radius;
    this.angle += this.speed;
    this.angle %= Math.PI * 2;
  }
}
class EllipsesAnimation {
  private x!: number;
  private y!: number;
  private xRadius!: number;
  private yRadius!: number;
  private ball!: CircleFill;
  private angle!: number;
  private speed!: number;

  constructor(
    x: number,
    y: number,
    xRadius: number,
    yRadius: number,
    speed: number,
    ball: CircleFill
  ) {
    this.x = x;
    this.y = y;
    this.xRadius = xRadius;
    this.yRadius = yRadius;
    this.ball = ball;
    this.angle = 0;
    this.speed = speed;
  }
  public animate() {
    this.ball.position.x = this.x + Math.cos(this.angle) * this.xRadius;
    this.ball.position.y = this.y + Math.sin(this.angle) * this.yRadius;
    this.angle += this.speed;
    this.angle %= Math.PI * 2;
  }
}

class LissajousAnimation {
  private x!: number;
  private y!: number;
  private xRadius!: number;
  private yRadius!: number;
  private ball!: CircleFill;
  private xAngle!: number;
  private yAngle!: number;

  private xSpeed!: number;
  private ySpeed!: number;

  constructor(
    x: number,
    y: number,
    xRadius: number,
    yRadius: number,
    xSpeed: number,
    ySpeed: number,
    ball: CircleFill
  ) {
    this.x = x;
    this.y = y;
    this.xRadius = xRadius;
    this.yRadius = yRadius;
    this.ball = ball;
    this.xAngle = 0;
    this.yAngle = 0;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }
  public animate() {
    this.ball.position.x = this.x + Math.cos(this.xAngle) * this.xRadius;
    this.ball.position.y = this.y + Math.sin(this.yAngle) * this.yRadius;
    this.xAngle += this.xSpeed;
    this.yAngle += this.ySpeed;
    this.xAngle %= Math.PI * 2;
    this.yAngle %= Math.PI * 2;
  }
}
