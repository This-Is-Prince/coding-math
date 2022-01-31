import { MathUtils } from "../Math";
import { Utils } from "../Utils";

window.addEventListener("load", () => {
  // Canvas
  const canvas = Utils.getCanvas("canvas");

  // Context
  const ctx = Utils.get2DContext(canvas)
    .setCanvasBackgroundColor("white")
    .setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);

  // Resize Canvas
  window.addEventListener("resize", () => {
    ctx.setCanvasSize(window.innerWidth - 50, window.innerHeight - 50);
  });

  // Started
  const fl = 300;
  const shapePos = {
    x: 500,
    y: 300,
    z: 300,
  };
  const shapes: {
    x: number;
    y: number;
    z: number;
  }[] = [];
  const totalShapes = 100;
  for (let i = 0; i < totalShapes; i++) {
    shapes[i] = {
      x: MathUtils.randomRange(-1000, 1000),
      y: MathUtils.randomRange(-1000, 1000),
      z: MathUtils.randomRange(0, 1000),
    };
  }

  ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);

  update();
  function update() {
    ctx.clearCanvas();
    shapes.forEach((shape) => {
      const perspective = fl / (fl + shape.z);
      ctx.save();
      ctx.translate(shape.x * perspective, shape.y * perspective);
      ctx.scale(perspective, perspective);
      ctx.fillRect(-100, -100, 200, 200);
      ctx.restore();

      shape.z += 5;
      if (shape.z > 10000) {
        shape.z = 0;
      }
    });
    window.requestAnimationFrame(update);
  }
});
