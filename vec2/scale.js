/**
 * @param {number[]} out
 * @param {number[]} a
 * @param {number} b
 */
export function vec2scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
}
