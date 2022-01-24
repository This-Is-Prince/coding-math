import { map } from "../math";
import { get2DContext, getCanvas, setCanvasSize } from "../utils";

window.addEventListener("load", () => {
  // canvas
  const canvas = getCanvas("canvas");
  const { innerHeight, innerWidth } = window;
  setCanvasSize(canvas, innerWidth, innerHeight);

  // context
  const ctx = get2DContext(canvas);

  window.addEventListener("resize", () => {
    const { innerHeight, innerWidth } = window;
    setCanvasSize(canvas, innerWidth, innerHeight);
  });
  window.addEventListener("mousemove", function (event) {
    const { innerHeight, innerWidth } = window;
    const radius = map(event.clientY, 0, innerHeight, 20, 340);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.beginPath();
    ctx.arc(innerWidth / 2, innerHeight / 2, radius, 0, Math.PI * 2, false);
    ctx.fill();
  });
});
