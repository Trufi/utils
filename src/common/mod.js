/**
 * Analog of `mod` in GLSL.
 * It's important that the function isn't equal to `%` from JS,
 * for example `mod(-1, 5)` will return 4
 * @param {number} x
 * @param {number} y
 */
export function mod(x, y) {
    return x - y * Math.floor(x / y);
}
