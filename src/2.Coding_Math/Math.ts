import { Point2D } from "./Point2D";
import { Vector2 } from "./Vector";

class MathUtils {
  private constructor() {}

  /**
   * This function convert given value of range (min - max) in range (0 - 1)
   * @param value any value which lie in range (min - max)
   * @param min min value of range
   * @param max max value of range
   * @returns value in range (0 - 1)
   */
  public static norm(value: number, min: number, max: number): number {
    return (value - min) / (max - min);
  }

  /**
   * This function convert given value of range(0 - 1) in range (min - max)
   * @param norm norm lie in range (0 - 1)
   * @param min min value of output range.
   * @param max max value of output range.
   * @returns value in range (min - max)
   */
  public static lerp(norm: number, min: number, max: number): number {
    return (max - min) * norm + min;
  }

  /**
   * Map a value of range (srcMin - srcMax) to another range(destMin - destMax)
   * @param value any value in range (srcMin - srcMax)
   * @param srcMin min value of src range
   * @param srcMax max value of src range
   * @param destMin min value of dest range
   * @param destMax max value of dest range
   * @returns value in range (destMin - destMax)
   */
  public static map(
    value: number,
    srcMin: number,
    srcMax: number,
    destMin: number,
    destMax: number
  ): number {
    return MathUtils.lerp(
      MathUtils.norm(value, srcMin, srcMax),
      destMin,
      destMax
    );
  }

  /**
   * clamp given value in range min and max
   * @param value value which you want to clamp btw min and max
   * @param min min value
   * @param max max value
   * @returns value if it lies btw min and max, if it less than min than min, if it more than max than max
   */
  public static clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  /**
   * Get distance between two point in 2D space
   * @param p0 first point represented as Vector2
   * @param p1 second point represented as Vector2
   * @returns distance btw p0 and p1
   */
  public static dist(p0: Vector2, p1: Vector2) {
    const p = p1.subtract(p0);
    return Math.sqrt(p.x * p.x + p.y * p.y);
  }

  /**
   * Get distance between two points
   * @param x0 x coordinate of first point
   * @param y0 y coordinate of first point
   * @param x1 x coordinate of second point
   * @param y1 y coordinate of second point
   * @returns distance
   */
  public static distXY(x0: number, y0: number, x1: number, y1: number): number {
    const dx = x1 - x0;
    const dy = y1 - y0;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * Get random number in range (min - max). max is not inclusive
   * @param min min value of range
   * @param max max value of range
   * @returns random number(float) btw min (inclusive) and max(exclusive)
   */
  public static randomRange(min: number, max: number): number {
    return min + Math.random() * (max - min);
  }

  /**
   * Get random number(integer) in range (min - max). both inclusive
   * @param min min value of range
   * @param max max value of range
   * @returns random number(integer) btw min and max both inclusive
   */
  public static randomInt(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  /**
   * Convert given degrees into radians
   * @param degrees value in degrees
   * @returns value in radians
   */
  public static degToRadians(degrees: number): number {
    return (Math.PI / 180) * degrees;
  }

  /**
   * Convert given radians into degrees
   * @param radians value in radians
   * @returns value in degrees
   */
  public static radToDegrees(radians: number): number {
    return (180 / Math.PI) * radians;
  }

  /**
   * Round a given value upto given places.
   * @param value given value
   * @param places upto which places you want to round
   * @returns rounded value upto given places
   */
  public static roundToPlaces(value: number, places: number): number {
    const decimal = Math.pow(10, places);
    return Math.round(value * decimal) / decimal;
  }

  /**
   * Round a given value to nearest multiple of given multiple
   * @param value given value
   * @param multiple given multiple
   * @returns Rounded value to nearest multiple. (value = 123, multiple = 40, return value will be 120, because multiple of 40 nearest to 123 is 120)
   */
  public static roundNearest(value: number, multiple: number): number {
    return Math.round(value / multiple) * multiple;
  }

  /**
   *
   * @param min min value of range
   * @param max max value of range
   * @param iterations total iterations of randomRange(min, max)
   * @returns
   */
  public static randomDist(
    min: number,
    max: number,
    iterations: number
  ): number {
    let total = 0;
    for (let i = 0; i < iterations; i++) {
      total += MathUtils.randomRange(min, max);
    }
    return total / iterations;
  }

  /**
   * Find point on quadratic bezier curves
   * @param p0 first point
   * @param p1 control point
   * @param p2 second point
   * @param t norm value
   * @param pFinal final point on curve
   */
  public static quadraticBezier(
    p0: Point2D,
    p1: Point2D,
    p2: Point2D,
    t: number,
    pFinal?: Point2D
  ) {
    pFinal = pFinal || new Point2D();
    pFinal.x =
      Math.pow(1 - t, 2) * p0.x + (1 - t) * 2 * t * p1.x + t * t * p2.x;
    pFinal.y =
      Math.pow(1 - t, 2) * p0.y + (1 - t) * 2 * t * p1.y + t * t * p2.y;
  }

  public static cubicBezier(
    p0: Point2D,
    p1: Point2D,
    p2: Point2D,
    p3: Point2D,
    t: number,
    pFinal?: Point2D
  ) {
    pFinal = pFinal || new Point2D();
    pFinal.x =
      Math.pow(1 - t, 3) * p0.x +
      Math.pow(1 - t, 2) * 3 * t * p1.x +
      (1 - t) * 3 * t * t * p2.x +
      t * t * t * p3.x;
    pFinal.y =
      Math.pow(1 - t, 3) * p0.y +
      Math.pow(1 - t, 2) * 3 * t * p1.y +
      (1 - t) * 3 * t * t * p2.y +
      t * t * t * p3.y;
  }
}

export { MathUtils };
