/**
 * @param {number[]} out
 * @param {number[]} a
 */
export function vec3floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
}
