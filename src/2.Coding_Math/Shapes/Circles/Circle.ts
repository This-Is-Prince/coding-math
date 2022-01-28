import { Point2D } from "../../Point2D";
import { Shape } from "../Shape";

class Circle extends Shape {
  public position!: Point2D;
  public radius!: number;
  constructor(x: number, y: number, radius: number) {
    super();
    this.position = new Point2D(x, y);
    this.radius = radius;
  }
}
export { Circle };
