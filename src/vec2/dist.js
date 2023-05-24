/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */
export function vec2dist(a, b) {
    const x = b[0] - a[0];
    const y = b[1] - a[1];
    return Math.sqrt(x * x + y * y);
}
