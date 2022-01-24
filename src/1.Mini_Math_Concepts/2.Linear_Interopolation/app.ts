import { lerp } from "../math";
import { get2DContext, getCanvas, setCanvasSize } from "../utils";

window.addEventListener("load", () => {
  // Canvas
  const canvas = getCanvas("canvas");
  const { innerWidth, innerHeight } = window;
  setCanvasSize(canvas, innerWidth, innerHeight);

  // Context
  const ctx = get2DContext(canvas);
  const minX = 0,
    minY = 0,
    minAlpha = 0,
    maxAlpha = 1,
    minRadius = 0,
    maxRadius = 100;
  let t = 0;
  window.addEventListener("resize", () => {
    const { innerWidth, innerHeight } = window;
    setCanvasSize(canvas, innerWidth, innerHeight);
  });

  update();
  function update() {
    const { innerWidth, innerHeight } = window;
    const maxX = innerWidth,
      maxY = innerHeight;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.globalAlpha = lerp(t, maxAlpha, minAlpha);
    ctx.beginPath();
    ctx.arc(
      lerp(t, minX, maxX),
      lerp(t, minY, maxY),
      lerp(t, minRadius, maxRadius),
      0,
      Math.PI * 2,
      false
    );
    ctx.fill();
    t += 0.005;
    if (t > 1) {
      t = 0;
    }
    window.requestAnimationFrame(update);
  }
});
