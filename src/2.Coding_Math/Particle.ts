import { Vector2 } from "./Vector";

class Particle {
  public position!: Vector2;
  public velocity!: Vector2;
  public gravity!: Vector2;

  constructor(
    x: number,
    y: number,
    speed: number,
    direction: number,
    gravity: Vector2
  ) {
    this.position = new Vector2(x, y);
    this.velocity = new Vector2(0, 0);
    this.velocity.setLength(speed);
    this.velocity.setAngle(direction);
    this.gravity = gravity;
  }
  public accelerate(accel: Vector2) {
    this.velocity.addTo(accel);
  }
  public update() {
    this.velocity.addTo(this.gravity);
    this.position.addTo(this.velocity);
  }
}

export { Particle };
