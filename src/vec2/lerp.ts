export function vec2lerp(out: number[], a: number[], b: number[], t: number) {
    const ax = a[0];
    const ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
}
