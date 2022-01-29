import { CircleFill } from "../Shapes/Circles/CircleFill";
import { Utils } from "../Utils";
import { Vector2 } from "../Vector";

window.addEventListener("load", () => {
  // Canvas
  const canvas = Utils.getCanvas("canvas");

  // Context
  const ctx = Utils.get2DContext(canvas)
    .setCanvasBackgroundColor("white")
    .setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);

  // Resize Events
  window.addEventListener("resize", () => {
    ctx.setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);
  });

  // Ball
  const ball = new Ball(ctx.canvas.width / 2, ctx.canvas.height / 2, 30, 0.1);
  ball.setBounce(-0.9);
  const world = new World(0, ctx.canvas.width, 0, ctx.canvas.height);
  ball.applyVelocity(3, Math.random() * Math.PI * 2);

  function update() {
    ctx.clearCanvas();
    ball.inThisWorld(world);
    ball.draw(ctx);
    window.requestAnimationFrame(update);
  }
  update();
});

class Ball {
  private shape!: CircleFill;
  private velocity!: Vector2;
  private gravity!: Vector2;
  private bounce!: number;

  constructor(x: number, y: number, radius: number, gravity?: number) {
    this.shape = new CircleFill(x, y, radius);
    this.velocity = new Vector2(0, 0);
    this.gravity = new Vector2(0, gravity || 0);
    this.bounce = -1;
  }
  public applyVelocity(speed: number, direction: number) {
    this.velocity.setLength(speed);
    this.velocity.setAngle(direction);
  }
  public setBounce(value: number) {
    this.bounce = value;
  }
  private update() {
    this.velocity.addTo(this.gravity);
    this.shape.position.x += this.velocity.x;
    this.shape.position.y += this.velocity.y;
  }
  public draw(ctx: CanvasRenderingContext2D) {
    this.update();
    this.shape.draw(ctx);
  }
  public inThisWorld(world: World) {
    if (this.shape.position.x + this.shape.radius > world.right) {
      this.shape.position.x = world.right - this.shape.radius;
      this.velocity.x = this.bounce * this.velocity.x;
    }

    if (this.shape.position.x - this.shape.radius < world.left) {
      this.shape.position.x = this.shape.radius;
      this.velocity.x = this.bounce * this.velocity.x;
    }

    if (this.shape.position.y + this.shape.radius > world.bottom) {
      this.shape.position.y = world.bottom - this.shape.radius;
      this.velocity.y = this.bounce * this.velocity.y;
    }

    if (this.shape.position.y - this.shape.radius < world.top) {
      this.shape.position.y = this.shape.radius;
      this.velocity.y = this.bounce * this.velocity.y;
    }
  }
}

class World {
  constructor(
    public left: number,
    public right: number,
    public top: number,
    public bottom: number
  ) {}
}
