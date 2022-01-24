function getCanvas(id: string): HTMLCanvasElement {
  let canvas = document.getElementById(id) as HTMLCanvasElement;
  if (!canvas) {
    console.error(`unable to find canvas`);
    canvas = document.createElement("canvas");
    canvas.id = id;
    document.body.appendChild(canvas);
  }
  return canvas;
}

function get2DContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
  if (!canvas) {
    console.error(`there is no canvas`);
  }
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  if (!ctx) {
    console.error("unable to create 2d context");
  }
  return ctx;
}
function setCanvasSize(
  canvas: HTMLCanvasElement,
  width: number,
  height: number
) {
  if (!canvas) {
    console.error(`there is no canvas`);
  }
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  canvas.width = width;
  canvas.height = height;
}

export { getCanvas, get2DContext, setCanvasSize };
