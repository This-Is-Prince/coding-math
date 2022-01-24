import { norm } from "../math";
import { get2DContext, getCanvas, setCanvasSize } from "../utils";

window.addEventListener("load", () => {
  //  Canvas
  const canvas = getCanvas("canvas");
  const { innerHeight, innerWidth } = window;
  setCanvasSize(canvas, innerWidth, innerHeight);

  // Context
  const ctx = get2DContext(canvas);
  ctx.strokeStyle = "red";

  // Events
  window.addEventListener("resize", () => {
    const { innerHeight, innerWidth } = window;
    setCanvasSize(canvas, innerWidth, innerHeight);
    draw(ctx, values, min, max, innerWidth, innerHeight);
  });

  // Data
  const values = [
    7, 5, 21, 18, 33, 12, 27, 18, 9, 23, 14, 6, 31, 25, 17, 13, 29,
  ];
  const min = Math.min.apply(null, values);
  const max = Math.max.apply(null, values);

  // Draw
  draw(ctx, values, min, max, innerWidth, innerHeight);
});

const draw = (
  ctx: CanvasRenderingContext2D,
  values: number[],
  min: number,
  max: number,
  width: number,
  height: number
) => {
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  for (let i = 0; i < values.length; i += 1) {
    const normValue = norm(values[i], min, max);
    const x = (width / (values.length - 1)) * i;
    const y = height - height * normValue;
    console.log(x, y);

    if (i == 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.stroke();
};
