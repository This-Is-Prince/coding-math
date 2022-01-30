import { Utils } from "../Utils";

window.addEventListener("load", () => {
  // Canvas
  const canvas = Utils.getCanvas("canvas");

  // Context
  const ctx = Utils.get2DContext(canvas)
    .setCanvasBackgroundColor("white")
    .setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);

  // Window Resize Events
  window.addEventListener("resize", () => {
    ctx.setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);
  });
});
