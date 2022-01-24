/**
 * Normalization, convert given value in btw 0 and 1
 * @param value value btw min and max
 * @param min min of range
 * @param max max of range
 * @returns value btw 0 and 1
 */
function norm(value: number, min: number, max: number): number {
  return (value - min) / (max - min);
}

/**
 * Linear Interpolation, convert normalize value in btw min and max
 * @param norm normalize value
 * @param min min of range
 * @param max max of range
 * @returns value btw min and max
 */
function lerp(norm: number, min: number, max: number): number {
  return (max - min) * norm + min;
}

/**
 * Map one range value in another range.
 * @param value value btw sourceMin and sourceMax
 * @param sourceMin min of source range
 * @param sourceMax max of source range
 * @param destMin min of destination range
 * @param destMax max of destination range
 * @returns value btw destMin and destMax
 */
function map(
  value: number,
  sourceMin: number,
  sourceMax: number,
  destMin: number,
  destMax: number
): number {
  return lerp(norm(value, sourceMin, sourceMax), destMin, destMax);
}

export { norm, lerp, map };
