export function vec4equals(a: number[], b: number[], eps = 0.000001) {
    return (
        Math.abs(a[0] - b[0]) <= eps &&
        Math.abs(a[1] - b[1]) <= eps &&
        Math.abs(a[2] - b[2]) <= eps &&
        Math.abs(a[3] - b[3]) <= eps
    );
}
