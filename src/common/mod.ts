/**
 * Analog of `mod` in GLSL.
 * It's important that the function isn't equal to `%` from JS,
 * for example `mod(-1, 5)` will return 4
 */
export function mod(x: number, y: number) {
    return x - y * Math.floor(x / y);
}
