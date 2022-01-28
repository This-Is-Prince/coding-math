import { Rect } from "./Rect";

class RectClear extends Rect {
  constructor(x: number, y: number, width: number, height: number) {
    super(x, y, width, height);
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(this.position.x, this.position.y, this.width, this.height);
  }
}
export { RectClear };
