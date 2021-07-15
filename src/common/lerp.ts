/**
 * Interpolate value from a to b
 */
export function lerp(a: number, b: number, t: number) {
    return a + t * (b - a);
}
