/**
 * @param {number[]} v
 * @returns {number}
 */
export function vec2rotation(v) {
    return Math.atan2(v[1], v[0]);
}
