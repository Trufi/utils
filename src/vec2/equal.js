/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number} eps
 * @returns {boolean}
 */
export function vec2equals(a, b, eps = 0.000001) {
    return Math.abs(a[0] - b[0]) <= eps && Math.abs(a[1] - b[1]) <= eps;
}
