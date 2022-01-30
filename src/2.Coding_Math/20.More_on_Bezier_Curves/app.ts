import { Utils } from "../Utils";

window.addEventListener("load", () => {
  // Canvas
  const canvas = Utils.getCanvas("canvas");

  // Context
  const ctx = Utils.get2DContext(canvas)
    .setCanvasBackgroundColor("white")
    .setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);

  // Window Resize Events
  window.addEventListener("resize", () => {
    ctx.setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);
    draw();
  });

  // Points
  let p0 = new Point(100, 400, 5, "red");
  let p1 = new Point(200, 100, 5, "green");
  let p2 = new Point(300, 400, 5, "blue");

  function draw() {
    p0.draw(ctx);
    p1.draw(ctx);
    p2.draw(ctx);

    ctx.strokeStyle = "lightgray";
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();

    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
    ctx.stroke();
  }
  draw();
});

class Point {
  public x: number;
  public y: number;
  public size: number;
  public shape: Shape;
  public color: string;

  constructor(
    x: number,
    y: number,
    size: number,
    color?: string,
    shape?: Shape
  ) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color || "black";
    this.shape = shape || Shape.Circle;
  }
  public draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    if (this.shape === Shape.Circle) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fill();
    } else if (this.shape === Shape.Rectangle) {
      ctx.fillRect(
        this.x - this.size,
        this.y - this.size,
        this.size * 2,
        this.size * 2
      );
    }
  }
}

enum Shape {
  Circle,
  Rectangle,
}
