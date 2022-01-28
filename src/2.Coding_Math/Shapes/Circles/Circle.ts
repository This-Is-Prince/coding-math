import { Vector2 } from "../../Vector";
import { Shape } from "../Shape";

class Circle extends Shape {
  public position!: Vector2;
  public radius!: number;
  constructor(x: number, y: number, radius: number) {
    super();
    this.position = new Vector2(x, y);
    this.radius = radius;
  }
}
export { Circle };
