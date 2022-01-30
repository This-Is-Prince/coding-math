import { MathUtils } from "../Math";
import { Point2D } from "../Point2D";
import { Utils } from "../Utils";

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

  // ============First============
  /* const p0 = new Point2D(100, 400);
  const p1 = new Point2D(300, 100);
  const p2 = new Point2D(500, 300);
  const pFinal = new Point2D(0, 0);
  for (let i = 0; i < 1; i += 0.01) {
      MathUtils.quadraticBezier(p0, p1, p2, i, pFinal);
      ctx.fillRect(pFinal.x, pFinal.y, 5, 5);
    } */

  // ============Second=============
  /*   const p0 = new Point2D(100, 400);
  const p1 = new Point2D(300, 100);
  const p2 = new Point2D(500, 300);
  ctx.fillRect(p0.x, p0.y, 5, 5);
  ctx.fillRect(p1.x, p1.y, 5, 5);
  ctx.fillRect(p2.x, p2.y, 5, 5);
  ctx.moveTo(p0.x, p0.y);
  ctx.lineTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
  for (let i = 0; i < 1; i += 0.05) {
    let lerp_01_x = MathUtils.lerp(i, p0.x, p1.x);
    let lerp_01_y = MathUtils.lerp(i, p0.y, p1.y);
    let lerp_12_x = MathUtils.lerp(i, p1.x, p2.x);
    let lerp_12_y = MathUtils.lerp(i, p1.y, p2.y);
    ctx.moveTo(lerp_01_x, lerp_01_y);
    ctx.lineTo(lerp_12_x, lerp_12_y);
    ctx.stroke();
  } */

  // ============Third============
  /*   const p0 = new Point2D(100, 400);
  ctx.fillStyle = "red";
  ctx.fillRect(p0.x, p0.y, 5, 5);
  const p1 = new Point2D(200, 100);
  ctx.fillStyle = "green";
  ctx.fillRect(p1.x, p1.y, 5, 5);
  const p2 = new Point2D(300, 300);
  ctx.fillStyle = "blue";
  ctx.fillRect(p2.x, p2.y, 5, 5);
  const p3 = new Point2D(400, 50);
  ctx.fillStyle = "orange";
  ctx.fillRect(p3.x, p3.y, 5, 5);

  ctx.fillStyle = "black";
  const pFinal = new Point2D(0, 0);
  for (let i = 0; i < 1; i += 0.005) {
    MathUtils.cubicBezier(p0, p1, p2, p3, i, pFinal);
    ctx.fillRect(pFinal.x, pFinal.y, 2, 2);
  } */

  // ============Fourth============
  const p0 = new Point(100, 400, 5, "red", Shape.Circle);
  const p1 = new Point(200, 100, 5, "green", Shape.Circle);
  const p2 = new Point(300, 300, 5, "blue", Shape.Circle);
  const p3 = new Point(400, 50, 5, "orange", Shape.Circle);

  function draw() {
    ctx.clearCanvas();
    p0.draw(ctx);
    p1.draw(ctx);
    p2.draw(ctx);
    p3.draw(ctx);

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    ctx.stroke();
  }
  draw();

  function point0(event: MouseEvent) {
    p0.x = event.offsetX;
    p0.y = event.offsetY;
    draw();
  }
  function point1(event: MouseEvent) {
    p1.x = event.offsetX;
    p1.y = event.offsetY;
    draw();
  }
  function point2(event: MouseEvent) {
    p2.x = event.offsetX;
    p2.y = event.offsetY;
    draw();
  }
  function point3(event: MouseEvent) {
    p3.x = event.offsetX;
    p3.y = event.offsetY;
    draw();
  }

  canvas.addEventListener("mousedown", function (event) {
    const { offsetX: x, offsetY: y } = event;
    if (p0.isOverlap(x, y)) {
      p0.size *= 2;
      p0.isMoving = true;
      canvas.addEventListener("mousemove", point0);
    } else if (p1.isOverlap(x, y)) {
      p1.size *= 2;
      p1.isMoving = true;
      canvas.addEventListener("mousemove", point1);
    } else if (p2.isOverlap(x, y)) {
      p2.size *= 2;
      p2.isMoving = true;
      canvas.addEventListener("mousemove", point2);
    } else if (p3.isOverlap(x, y)) {
      p3.size *= 2;
      p3.isMoving = true;
      canvas.addEventListener("mousemove", point3);
    }
  });

  canvas.addEventListener("mouseup", function () {
    if (p0.isMoving) {
      p0.size /= 2;
      p0.isMoving = false;
      canvas.removeEventListener("mousemove", point0);
    }
    if (p1.isMoving) {
      p1.size /= 2;
      p1.isMoving = false;
      canvas.removeEventListener("mousemove", point1);
    }
    if (p2.isMoving) {
      p2.size /= 2;
      p2.isMoving = false;
      canvas.removeEventListener("mousemove", point2);
    }
    if (p3.isMoving) {
      p3.size /= 2;
      p3.isMoving = false;
      canvas.removeEventListener("mousemove", point3);
    }
    draw();
  });
});

class Point {
  public x: number;
  public y: number;
  public size: number;
  public color: string;
  public shape: Shape;
  public isMoving: boolean;

  constructor(
    x: number,
    y: number,
    size: number,
    color?: string,
    shape?: Shape
  ) {
    this.isMoving = false;
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color || "black";
    this.shape = shape || Shape.Circle;
  }
  public isOverlap(x: number, y: number) {
    if (
      this.x - this.size <= x &&
      x <= this.x + this.size &&
      this.y - this.size <= y &&
      y <= this.y + this.size
    ) {
      return true;
    } else {
      return false;
    }
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
