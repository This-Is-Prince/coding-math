import { Point2D } from "../Point2D";
import { Line } from "../Shapes/Lines/Line";
import { Utils } from "../Utils";

window.addEventListener("load", () => {
  // canvas
  const canvas = Utils.getCanvas("canvas");

  // canvas 2D context
  const ctx = Utils.get2DContext(canvas)
    .setCanvasBackgroundColor("white")
    .setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);

  window.addEventListener("resize", () => {
    ctx.setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);
    draw();
  });

  const line = new Line();
  function draw() {
    ctx.clearCanvas();
    for (let i = 0; i < 100; i += 1) {
      line
        .startFrom(
          ctx,
          new Point2D(
            Math.random() * ctx.canvas.width,
            Math.random() * ctx.canvas.height
          )
        )
        .to(
          new Point2D(
            Math.random() * ctx.canvas.width,
            Math.random() * ctx.canvas.height
          )
        )
        .draw();
    }
  }
  draw();
});
