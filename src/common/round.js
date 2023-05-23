/**
 * @param {number} x
 * @param {number} digit
 */
export function round(x, digit = 0) {
    const k = 10 ** digit;
    return Math.round(x * k) / k;
}
