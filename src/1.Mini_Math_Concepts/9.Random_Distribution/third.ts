import { randDist } from "../math";
import { get2DContext, getCanvas, setCanvasSize } from "../utils";

const third = () => {
  // canvas
  const canvas = getCanvas("canvas");

  // set canvas size
  const { innerWidth, innerHeight } = window;
  setCanvasSize(canvas, innerWidth, innerHeight);

  // context
  const ctx = get2DContext(canvas);

  for (let i = 0; i < 100000; i += 1) {
    const x = randDist(0, innerWidth, 5);
    const y = randDist(0, innerHeight, 5);
    ctx.fillRect(x, y, 1, 1);
  }
};
export { third };
