import { Point2D } from "../../Point2D";
import { Shape } from "../Shape";

class Rect extends Shape {
  public position!: Point2D;
  public width!: number;
  public height!: number;

  constructor(x: number, y: number, width: number, height: number) {
    super();
    this.position = new Point2D(x, y);
    this.width = width;
    this.height = height;
  }
}

export { Rect };
