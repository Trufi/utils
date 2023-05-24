/**
 * @param {number[]} out
 * @param {number[]} a
 */
export function vec3ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
}
