import { MathUtils } from "../Math";
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
    createArrows();
  });

  /**
   * Arrows
   */
  let arrows: Arrow[] = [];
  function createArrows() {
    const tempArrows: Arrow[] = [];
    const totalArrows = 5;
    for (let i = 0; i < totalArrows; i++) {
      tempArrows.push(
        new Arrow(
          MathUtils.randomInt(50, ctx.canvas.width - 50),
          MathUtils.randomInt(50, ctx.canvas.height - 50),
          2
        )
      );
    }
    arrows = tempArrows;
  }
  createArrows();

  window.addEventListener("mousemove", function (event) {
    const { clientX, clientY } = event;
    let dx = clientX - ctx.canvas.width / 2,
      dy = clientY - ctx.canvas.height / 2;
    arrows.forEach((arrow) => {
      arrow.updateAngle(Math.atan2(dy, dx));
    });
  });

  render();
  function render() {
    ctx.clearCanvas();
    arrows.forEach((arrow) => {
      arrow.draw(ctx);
    });
    window.requestAnimationFrame(render);
  }
});

class Arrow {
  public size!: number;
  public position!: { x: number; y: number };
  public angle!: number;

  constructor(x: number, y: number, size: number) {
    this.position = { x, y };
    this.size = size;
    this.angle = 0;
  }
  updatePosition(x: number, y: number) {
    this.position.x = x;
    this.position.y = y;
  }
  updateAngle(angle: number) {
    this.angle = angle;
  }
  draw(ctx: Canvas2DContext) {
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.angle);
    ctx.scale(this.size, this.size);

    ctx.beginPath();
    ctx.moveTo(20, 0);
    ctx.lineTo(-20, 0);

    ctx.moveTo(20 - 0.25, 0);
    ctx.lineTo(10, -10);

    ctx.moveTo(20 - 0.25, 0);
    ctx.lineTo(10, 10);
    ctx.stroke();
    ctx.restore();
  }
}
