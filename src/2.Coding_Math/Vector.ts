class Vector2 {
  private _x!: number;
  private _y!: number;
  constructor(x?: number, y?: number) {
    this._x = x || 0;
    this._y = y || 0;
  }

  public set x(value: number) {
    this._x = value;
  }

  public get x(): number {
    return this._x;
  }

  public set y(value: number) {
    this._y = value;
  }

  public get y(): number {
    return this._y;
  }

  public setAngle(angle: number) {
    const len = this.getLength();
    this._x = Math.cos(angle) * len;
    this._y = Math.sin(angle) * len;
  }

  public getAngle(): number {
    return Math.atan2(this._y, this._x);
  }

  public setLength(length: number) {
    const angle = this.getAngle();
    this._x = Math.cos(angle) * length;
    this._y = Math.sin(angle) * length;
  }

  public getLength(): number {
    return Math.sqrt(this._x * this._x + this._y * this._y);
  }

  public add(v2: Vector2): Vector2 {
    return new Vector2(this._x + v2.x, this._y + v2.y);
  }

  public subtract(v2: Vector2): Vector2 {
    return new Vector2(this._x - v2.x, this._y - v2.y);
  }

  public multiply(scalar: number): Vector2 {
    return new Vector2(this._x * scalar, this._y * scalar);
  }

  public divide(scalar: number): Vector2 {
    return new Vector2(this._x / scalar, this._y / scalar);
  }

  public addTo(v2: Vector2) {
    this._x += v2.x;
    this._y += v2.y;
  }

  public subtractFrom(v2: Vector2) {
    this._x -= v2.x;
    this._y -= v2.y;
  }

  public multiplyBy(scalar: number) {
    this._x *= scalar;
    this._y *= scalar;
  }

  public divideBy(scalar: number) {
    this._x /= scalar;
    this._y /= scalar;
  }
}

export { Vector2 };
