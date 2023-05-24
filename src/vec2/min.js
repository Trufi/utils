/**
 * @param {number[]} out
 * @param {number[]} a
 * @param {number[]} b
 */
export function vec2min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
}
