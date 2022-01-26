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
  const balls: { ball: Ball; animation: Animation }[] = [];
  for (let i = 0; i < 200; i++) {
    const ball = new Ball(5);
    const animation = new Animation(
      ball,
      { x: Math.random() * Math.PI * 2, y: Math.random() * Math.PI * 4 },
      { x: Math.random() * 0.1, y: Math.random() * 0.131 },
      { x: 100, y: 100 }
    );
    balls.push({ ball, animation });
  }

  // First
  function draw() {
    ctx.clearCanvas();
    // animation.animate(ctx.canvas.width, ctx.canvas.height);
    // ball1.render(ctx);
    balls.forEach(({ ball, animation }) => {
      animation.updateRadius({
        x: ctx.canvas.width / 2,
        y: ctx.canvas.height / 2,
      });
      animation.animate(ctx.canvas.width, ctx.canvas.height);
      ball.render(ctx);
    });

    window.requestAnimationFrame(draw);
  }
  draw();
});

class Animation {
  public ball!: Ball;
  public angle!: { x: number; y: number };
  public speed!: { x: number; y: number };
  public radius!: { x: number; y: number };

  constructor(
    ball: Ball,
    angle: { x: number; y: number },
    speed: { x: number; y: number },
    radius: { x: number; y: number }
  ) {
    this.angle = angle || { x: 0, y: 0 };
    this.speed = speed || { x: 0, y: 0 };
    this.radius = radius || { x: 50, y: 50 };

    this.ball = ball;
  }
  updateRadius(radius: { x: number; y: number }) {
    this.radius = radius;
  }
  animate(width: number, height: number) {
    this.ball.x = width / 2 + Math.cos(this.angle.x) * this.radius.x;
    this.ball.y = height / 2 + Math.sin(this.angle.y) * this.radius.y;
    this.angle.x += this.speed.x;
    this.angle.y += this.speed.y;
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
