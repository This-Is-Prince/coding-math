import { Circle } from "./Circle";

class CircleFill extends Circle {
  public fillColor!: string;
  constructor(x: number, y: number, radius: number, fillColor?: string) {
    super(x, y, radius);
    this.fillColor = fillColor || "black";
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.fillColor;
    ctx.beginPath();
    ctx.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 2,
      false
    );
    ctx.fill();
  }
}
export { CircleFill };
