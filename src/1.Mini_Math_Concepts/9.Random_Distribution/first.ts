import { rand } from "../math";
import { get2DContext, getCanvas, setCanvasSize } from "../utils";

const first = () => {
  // canvas
  const canvas = getCanvas("canvas");

  // set canvas size
  const { innerWidth, innerHeight } = window;
  setCanvasSize(canvas, innerWidth, innerHeight);

  // context
  const ctx = get2DContext(canvas);
  window.addEventListener("resize", () => {
    const { innerWidth, innerHeight } = window;
    setCanvasSize(canvas, innerWidth, innerHeight);
  });

  const results: number[] = [];
  const totalBar = 200;
  for (let i = 0; i < totalBar; i++) {
    results[i] = 0;
  }

  update();
  function update() {
    addResult();
    draw();
    window.requestAnimationFrame(update);
  }

  function addResult() {
    const r1 = rand(0, totalBar);
    const r2 = rand(0, totalBar);
    const result = Math.floor((r1 + r2) / 2);
    results[result] += 1;
  }

  function draw() {
    const { innerWidth, innerHeight } = window;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    const w = innerWidth / totalBar;
    for (let i = 0; i < totalBar; i += 1) {
      const h = results[i] * -10;
      ctx.fillRect(w * i, innerHeight, w, h);
    }
  }
};
export { first };
