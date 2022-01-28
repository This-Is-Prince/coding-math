import { Point2D } from "../../Point2D";
import { Shape } from "../Shape";

class Line extends Shape {
  private ctx!: CanvasRenderingContext2D | null;
  constructor() {
    super();
  }
  startFrom(ctx: CanvasRenderingContext2D, p: Point2D): Line {
    this.ctx = ctx;
    this.ctx.beginPath();
    this.ctx.moveTo(p.x, p.y);
    return this;
  }
  to(p: Point2D): Line {
    if (!this.ctx) {
      console.error(`line is not started...`);
    } else {
      this.ctx.lineTo(p.x, p.y);
    }
    return this;
  }
  draw(): Line {
    if (!this.ctx) {
      console.error(`unable to draw line, line is not started...`);
    } else {
      this.ctx.stroke();
    }
    this.ctx = null;
    return this;
  }
}
export { Line };
