/**
 * @param {number[]} out
 * @param {number[]} a
 * @param {number[]} b
 */
export function vec4mul(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
}
