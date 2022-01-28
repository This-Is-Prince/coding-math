import { Circle } from "./Circle";

class CircleStroke extends Circle {
  public strokeColor!: string;
  constructor(x: number, y: number, radius: number, strokeColor?: string) {
    super(x, y, radius);
    this.strokeColor = strokeColor || "black";
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = this.strokeColor;
    ctx.beginPath();
    ctx.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 2,
      false
    );
    ctx.stroke();
  }
}
export { CircleStroke };
