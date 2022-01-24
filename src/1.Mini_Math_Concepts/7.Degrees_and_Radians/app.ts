import { degreesToRads } from "../math";
import { get2DContext, getCanvas, setCanvasSize } from "../utils";

window.addEventListener("load", () => {
  // Canvas
  const canvas = getCanvas("canvas");

  // Set Canvas size
  const { innerWidth, innerHeight } = window;
  setCanvasSize(canvas, innerWidth, innerHeight);

  // Context
  const ctx = get2DContext(canvas);

  window.addEventListener("resize", () => {
    const { innerWidth, innerHeight } = window;
    setCanvasSize(canvas, innerWidth, innerHeight);
    draw();
  });

  draw();
  function draw() {
    const { innerWidth, innerHeight } = window;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    const angle = degreesToRads(30);
    ctx.translate(innerWidth / 2, innerHeight / 2);
    ctx.rotate(angle);

    ctx.beginPath();
    ctx.arc(0, 0, 20, 0, Math.PI * 2, false);
    ctx.fill();

    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(50, 0);
    ctx.stroke();
  }
});
