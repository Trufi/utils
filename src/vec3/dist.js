/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */
export function vec3dist(a, b) {
    const x = b[0] - a[0];
    const y = b[1] - a[1];
    const z = b[2] - a[2];
    return Math.sqrt(x * x + y * y + z * z);
}
