/**
 * @param {number} value
 * @param {number} min
 * @param {number} max
 */
export function clamp(value, min, max) {
    value = Math.max(value, min);
    value = Math.min(value, max);
    return value;
}
