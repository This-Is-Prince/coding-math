import { Utils } from "../Utils";
import { Vector2 } from "../Vector";

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

  const ship = new Ship(ctx.canvas.width / 2, ctx.canvas.height / 2);

  // Update
  function update() {
    ctx.clearCanvas();
    ship.draw(ctx);
    window.requestAnimationFrame(update);
  }
  update();
});

class Ship {
  public position!: Vector2;

  constructor(x: number, y: number) {
    this.position = new Vector2(x, y);
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(0);

    ctx.beginPath();
    ctx.moveTo(10, 0);
    ctx.lineTo(-10, -7);
    ctx.lineTo(-10, 7);
    ctx.lineTo(10, 0);
    ctx.stroke();

    ctx.restore();
  }
}
