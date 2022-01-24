import { distance } from "../math";
import { get2DContext, getCanvas, setCanvasSize } from "../utils";

window.addEventListener("load", () => {
  // canvas
  const canvas = getCanvas("canvas");

  // set canvas size
  const { innerHeight, innerWidth } = window;
  setCanvasSize(canvas, innerWidth, innerHeight);

  // context
  const ctx = get2DContext(canvas);

  // Window Resize Event
  window.addEventListener("resize", () => {
    const { innerHeight, innerWidth } = window;
    setCanvasSize(canvas, innerWidth, innerHeight);
  });

  // Mouse Move Event
  window.addEventListener("mousemove", function (event) {
    const { innerHeight, innerWidth } = window;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;

    ctx.clearRect(0, 0, innerWidth, innerHeight);

    const { clientX, clientY } = event;

    const dist = distance(
      { x: centerX, y: centerY },
      { x: clientX, y: clientY }
    );

    if (dist < 100) {
      ctx.fillStyle = "#ff6666";
    } else {
      ctx.fillStyle = "#cccccc";
    }
    ctx.beginPath();
    ctx.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
    ctx.fill();
  });
});
