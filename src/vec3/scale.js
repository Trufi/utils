/**
 * @param {number[]} out
 * @param {number[]} a
 * @param {number} b
 */
export function vec3scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
}
