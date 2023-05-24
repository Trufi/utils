/**
 * @param {number[]} out
 * @param {number[]} a
 * @param {number[]} b
 */
export function vec3min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
}
