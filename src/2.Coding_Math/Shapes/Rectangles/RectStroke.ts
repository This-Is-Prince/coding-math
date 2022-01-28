import { Rect } from "./Rect";

class RectStroke extends Rect {
  public strokeColor!: string;
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    strokeColor?: string
  ) {
    super(x, y, width, height);
    this.strokeColor = strokeColor || "black";
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = this.strokeColor;
    ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
  }
}
export { RectStroke };
