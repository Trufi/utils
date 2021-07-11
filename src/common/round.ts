export function round(x: number, digit = 0) {
    const k = 10 ** digit;
    return Math.round(x * k) / k;
}
