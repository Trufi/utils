/**
 * @param {number[]} out
 * @param {number[]} a
 * @param {number[]} b
 */
export function vec2mul(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
}
