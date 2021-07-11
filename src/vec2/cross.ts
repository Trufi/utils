export function vec2cross(out: number[], a: number[], b: number[]) {
    const z = a[0] * b[1] - a[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z;
}
