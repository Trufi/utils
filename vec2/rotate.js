/**
 * @param {number[]} out
 * @param {number[]} a
 * @param {number} angle
 */
export function vec2rotate(out, a, angle) {
    const x = a[0];
    const y = a[1];
    out[0] = x * Math.cos(angle) + y * Math.sin(angle);
    out[1] = -x * Math.sin(angle) + y * Math.cos(angle);
}
