export function vec2dist(a: number[], b: number[]) {
    const x = b[0] - a[0];
    const y = b[1] - a[1];
    return Math.sqrt(x * x + y * y);
}
