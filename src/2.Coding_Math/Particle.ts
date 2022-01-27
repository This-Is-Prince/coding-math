import { Vector2 } from "./Vector";

class Particle {
  public position!: Vector2;
  public velocity!: Vector2;
  constructor(x: number, y: number, speed: number, direction: number) {
    this.position = new Vector2(x, y);
    this.velocity = new Vector2(0, 0);
    this.velocity.setLength(speed);
    this.velocity.setAngle(direction);
  }
  public update() {
    this.position.addTo(this.velocity);
  }
}

export { Particle };
