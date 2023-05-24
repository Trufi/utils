/**
 * @param {number[]} out
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} w
 */
export function vec4set(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
}
