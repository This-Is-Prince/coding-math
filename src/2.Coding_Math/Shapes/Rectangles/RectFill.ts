import { Rect } from "./Rect";

class RectFill extends Rect {
  public fillColor!: string;
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    fillColor?: string
  ) {
    super(x, y, width, height);
    this.fillColor = fillColor || "black";
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
export { RectFill };
