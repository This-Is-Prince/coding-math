class Point2D {
  private _x!: number;
  private _y!: number;
  constructor(x?: number, y?: number) {
    this._x = x || 0;
    this._y = y || 0;
  }
  public get x(): number {
    return this._x;
  }
  public set x(value: number) {
    this._x = value;
  }

  public get y(): number {
    return this._y;
  }
  public set y(value: number) {
    this._y = value;
  }
}
export { Point2D };
