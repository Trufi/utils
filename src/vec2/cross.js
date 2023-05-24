/**
 * @param {number[]} out
 * @param {number[]} a
 * @param {number[]} b
 */
export function vec2cross(out, a, b) {
    const z = a[0] * b[1] - a[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z;
}
