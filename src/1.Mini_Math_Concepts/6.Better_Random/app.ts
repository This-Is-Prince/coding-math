import { rand } from "../math";
import { get2DContext, getCanvas, setCanvasSize } from "../utils";

window.addEventListener("load", () => {
  //  canvas
  const canvas = getCanvas("canvas");

  // set canvas size
  const { innerWidth, innerHeight } = window;
  setCanvasSize(canvas, innerWidth, innerHeight);

  // context
  const ctx = get2DContext(canvas);

  // Resize Event
  window.addEventListener("resize", () => {
    const { innerWidth, innerHeight } = window;
    setCanvasSize(canvas, innerWidth, innerHeight);
    draw();
  });

  // Draw
  draw();
  function draw() {
    const { innerWidth, innerHeight } = window;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < 200; i += 1) {
      drawCircle(
        ctx,
        "red",
        { min: 0, max: innerWidth * 0.33 },
        { min: 0, max: innerHeight },
        { min: 10, max: 40 }
      );
      drawCircle(
        ctx,
        "green",
        { min: innerWidth * 0.33, max: innerWidth * 0.66 },
        { min: 0, max: innerHeight },
        { min: 10, max: 40 }
      );
      drawCircle(
        ctx,
        "blue",
        { min: innerWidth * 0.66, max: innerWidth },
        { min: 0, max: innerHeight },
        { min: 10, max: 40 }
      );
    }
  }
});

const drawCircle = (
  ctx: CanvasRenderingContext2D,
  color: string,
  x: { min: number; max: number },
  y: { min: number; max: number },
  radius: { min: number; max: number }
) => {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(
    rand(x.min, x.max),
    rand(y.min, y.max),
    rand(radius.min, radius.max),
    0,
    Math.PI * 2,
    false
  );
  ctx.fill();
};
