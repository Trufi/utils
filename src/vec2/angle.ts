export function vec2angle(a: number[], b: number[]) {
    const x1 = a[0];
    const y1 = a[1];
    const x2 = b[0];
    const y2 = b[1];
    const mag = Math.sqrt((x1 * x1 + y1 * y1) * (x2 * x2 + y2 * y2));
    const cosine = mag !== 0 ? (x1 * x2 + y1 * y2) / mag : 0;
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
