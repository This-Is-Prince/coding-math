import { Vector2 } from "./Vector";

class Particle {
  public position!: Vector2;
  public velocity!: Vector2;
  public gravity!: Vector2;
  public mass!: number;
  public bounce!: number;

  constructor(
    x: number,
    y: number,
    speed: number,
    direction: number,
    gravity?: number
  ) {
    this.position = new Vector2(x, y);
    this.velocity = new Vector2(0, 0);
    this.velocity.setLength(speed);
    this.velocity.setAngle(direction);
    this.gravity = new Vector2(0, gravity || 0);
    this.bounce = -1;
  }
  public accelerate(accel: Vector2) {
    this.velocity.addTo(accel);
  }
  public update() {
    this.velocity.addTo(this.gravity);
    this.position.addTo(this.velocity);
  }
  public angleTo(p2: Particle) {
    return Math.atan2(
      p2.position.y - this.position.y,
      p2.position.x - this.position.x
    );
  }
  public distanceTo(p2: Particle) {
    const dx = p2.position.x - this.position.x;
    const dy = p2.position.y - this.position.y;

    return Math.sqrt(dx * dx + dy * dy);
  }
  public gravitateTo(p2: Particle) {
    const gravity = new Vector2(0, 0);
    const dist = this.distanceTo(p2);
    gravity.setLength(p2.mass / (dist * dist));
    gravity.setAngle(this.angleTo(p2));
    this.velocity.addTo(gravity);
  }
}

export { Particle };
