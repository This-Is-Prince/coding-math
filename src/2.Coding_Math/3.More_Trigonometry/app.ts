import { Canvas2DContext, Utils } from "../Utils";

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
  const ball1 = new Ball(50, ctx.canvas.width / 2, ctx.canvas.height / 2);
  const animation = new Animation(ball1);

  // First
  function draw() {
    ctx.clearCanvas();
    animation.animate(ctx.canvas.width, ctx.canvas.height);
    ball1.render(ctx);

    window.requestAnimationFrame(draw);
  }
  draw();
});

class Animation {
  public ball!: Ball;
  public angle!: number;
  public speed!: number;
  constructor(ball: Ball, angle?: number, speed?: number) {
    this.angle = angle || 0;
    this.speed = speed || 0.1;
    this.ball = ball;
  }
  animate(width: number, height: number) {
    const offset = height * 0.5 - this.ball.radius;
    this.ball.x = width * 0.5;
    this.ball.y = height * 0.5 + Math.sin(this.angle) * offset;
    this.angle += this.speed;
  }
}

class Ball {
  public radius!: number;
  public x!: number;
  public y!: number;
  constructor(radius?: number, x?: number, y?: number) {
    this.radius = radius || 25;
    this.x = x || 50;
    this.y = y || 50;
  }
  render(ctx: Canvas2DContext) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  }
}
