import { clamp } from "../math";
import { get2DContext, getCanvas, setCanvasSize } from "../utils";

window.addEventListener("load", () => {
  // canvas
  const canvas = getCanvas("canvas");

  // Resize Canvas
  const { innerWidth, innerHeight } = window;
  setCanvasSize(canvas, innerWidth, innerHeight);

  // context
  const ctx = get2DContext(canvas);

  window.addEventListener("resize", () => {
    const { innerWidth, innerHeight } = window;
    setCanvasSize(canvas, innerWidth, innerHeight);
  });
  window.addEventListener("mousemove", function (event) {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    const rect = {
      x: innerWidth / 2 - 200,
      y: innerHeight / 2 - 200,
      width: 400,
      height: 400,
    };
    const x = clamp(clientX, rect.x, rect.x + rect.width);
    const y = clamp(clientY, rect.y, rect.y + rect.height);

    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.fillStyle = "#000000";
    ctx.fillRect(rect.x - 10, rect.y - 10, rect.width + 20, rect.height + 20);

    ctx.fillStyle = "aqua";
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2, false);
    ctx.fill();
  });
});
