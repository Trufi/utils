/**
 * @param {number[]} out
 * @param {number[]} a
 * @param {number[]} b
 */
export function vec4max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
}
