export function vec4dist(a: number[], b: number[]) {
    const x = b[0] - a[0];
    const y = b[1] - a[1];
    const z = b[2] - a[2];
    const w = b[3] - a[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
}
