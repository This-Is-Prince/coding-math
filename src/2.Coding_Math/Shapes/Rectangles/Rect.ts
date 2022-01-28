import { Vector2 } from "../../Vector";
import { Shape } from "../Shape";

class Rect extends Shape {
  public position!: Vector2;
  public width!: number;
  public height!: number;

  constructor(x: number, y: number, width: number, height: number) {
    super();
    this.position = new Vector2(x, y);
    this.width = width;
    this.height = height;
  }
}

export { Rect };
