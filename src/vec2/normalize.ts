export function vec2normalize(out: number[], a: number[]) {
    const x = a[0];
    const y = a[1];
    let len = x * x + y * y;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
    }
}
