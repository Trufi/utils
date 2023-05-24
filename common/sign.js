/**
 * @param {number} x
 * @returns {number}
 */
export function sign(x) {
    x = +x; // convert to a number
    if (x === 0 || Number.isNaN(x)) {
        return x; // 0, -0 or NaN
    }
    return x > 0 ? 1 : -1;
}
