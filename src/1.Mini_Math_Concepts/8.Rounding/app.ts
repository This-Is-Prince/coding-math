import { roundNearest } from "../math";
import { get2DContext, getCanvas, setCanvasSize } from "../utils";

window.addEventListener("load", () => {
  // canvas
  const canvas = getCanvas("canvas");

  // set canvas size
  const { innerWidth, innerHeight } = window;
  setCanvasSize(canvas, innerWidth, innerHeight);

  // Context
  const ctx = get2DContext(canvas);

  const gridSize = 40;

  drawGrid(innerWidth, innerHeight);

  window.addEventListener("resize", () => {
    const { innerWidth, innerHeight } = window;
    setCanvasSize(canvas, innerWidth, innerHeight);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    drawGrid(innerWidth, innerHeight);
  });

  window.addEventListener("mousemove", function (event) {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = event;
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    drawGrid(innerWidth, innerHeight);

    const x = roundNearest(clientX, gridSize);
    const y = roundNearest(clientY, gridSize);
    console.log(x, y);

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2, false);
    ctx.fill();
  });

  function drawGrid(width: number, height: number) {
    ctx.beginPath();
    ctx.strokeStyle = "#ccc";
    for (let x = 0; x <= width; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }

    for (let y = 0; y <= height; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();
  }
});
