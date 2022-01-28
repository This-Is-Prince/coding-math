import { RectFill } from "../Shapes/Rectangles/RectFill";
import { Utils } from "../Utils";

window.addEventListener("load", () => {
  // canvas
  const canvas = Utils.getCanvas("canvas");
  // context
  const ctx = Utils.get2DContext(canvas)
    .setCanvasBackgroundColor("white")
    .setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);

  window.addEventListener("resize", () => {
    ctx.setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);
    draw();
  });

  const rectFill = new RectFill(0, 0, 2, 2);

  function draw() {
    ctx.transform(1, 0, 0, -1, 0, ctx.canvas.height / 2);
    ctx.clearCanvas();
    const { width, height } = ctx.canvas;
    for (let angle = 0; angle < 360; angle += 1) {
      const x = angle * (width / 360);
      const y = Math.sin((angle * Math.PI) / 180) * (height / 2 - 5);
      rectFill.drawAt(ctx, x, y);
    }
  }
  draw();
});
