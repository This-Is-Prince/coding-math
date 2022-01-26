import { Callback, Utils } from "../Utils";

window.addEventListener("load", () => {
  // canvas
  const canvas = Utils.getCanvas("canvas");

  // canvas 2D context
  const ctx = Utils.get2DContext(canvas)
    .setCanvasBackgroundColor("white")
    .setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);

  window.addEventListener("resize", () => {
    ctx.setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);
    ctx.draw(fn);
  });

  const fn: Callback = (ctx) => {
    ctx.clearCanvas();
    for (let i = 0; i < 100; i += 1) {
      ctx.beginPath();
      ctx.moveTo(
        Math.random() * ctx.canvas.width,
        Math.random() * ctx.canvas.height
      );
      ctx.lineTo(
        Math.random() * ctx.canvas.width,
        Math.random() * ctx.canvas.height
      );
      ctx.stroke();
    }
  };
  ctx.draw(fn);
});
