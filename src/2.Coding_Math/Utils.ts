type Callback = (ctx: Canvas2DContext) => void;

interface Canvas2DContext extends CanvasRenderingContext2D {
  // Setters
  setCanvasBackgroundColor: (color: string) => Canvas2DContext;
  setCanvasSize: (width: number, height: number) => Canvas2DContext;
  // Methods
  clearCanvas: () => Canvas2DContext;
  draw: (fn: Callback) => Canvas2DContext;
}

class Utils {
  private constructor() {}

  /**
   * Get HTMLCanvasElement with given id
   * @param id canvas id
   * @returns HTMLCanvasElement
   */
  static getCanvas(id: string): HTMLCanvasElement {
    let canvas = document.getElementById(id) as HTMLCanvasElement;
    if (!canvas) {
      console.error(
        `unable to get canvas element with id ${id}, so we append new canvas element to body tag`
      );
      canvas = document.createElement("canvas");
      canvas.id = id;
      document.body.appendChild(canvas);
    }
    return canvas;
  }

  /**
   * Get Canvas 2D Context
   * @param canvas HTMLCanvasElement
   * @returns Canvas2DContext
   */
  static get2DContext(canvas: HTMLCanvasElement): Canvas2DContext {
    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error(`${canvas} is not HTMLCanvasElement`);
    }
    const ctx = canvas.getContext("2d") as Canvas2DContext;

    // Setters / Getters
    /**
     * Set Canvas Background as specified color
     * @param color color string
     * @returns Canvas2DContext
     */
    ctx.setCanvasBackgroundColor = function (color) {
      this.canvas.style.backgroundColor = color;
      return this;
    };

    /**
     * Set canvas width and height as specified width and height
     * @param width width of canvas
     * @param height height of canvas
     * @returns Canvas2DContext
     */
    ctx.setCanvasSize = function (width, height) {
      this.canvas.style.width = width + "px";
      this.canvas.style.height = height + "px";
      this.canvas.width = width;
      this.canvas.height = height;
      return this;
    };

    // Methods
    /**
     * Clear Canvas for redrawing
     * @returns Canvas2DContext
     */
    ctx.clearCanvas = function () {
      this.save();
      this.setTransform(1, 0, 0, 1, 0, 0);
      this.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.restore();
      return this;
    };

    ctx.draw = function (fn) {
      fn(this);
      return this;
    };

    return ctx;
  }
}

export { Utils, Canvas2DContext, Callback };
