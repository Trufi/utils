/**
 * Interpolate value from a to b
 * @param {number} a
 * @param {number} b
 * @param {number} t
 */
export function lerp(a, b, t) {
    return a + t * (b - a);
}
