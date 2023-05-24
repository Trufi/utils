/**
 * @param {number[]} out
 * @param {number[]} a
 * @param {number[]} b
 * @param {number} t
 */
export function vec3lerp(out, a, b, t) {
    const ax = a[0];
    const ay = a[1];
    const az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
}
