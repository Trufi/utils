export function coordinatesPrecision(zoom: number): number {
    return Math.ceil((zoom * Math.LN2 + Math.log(256 / 360 / 0.5)) / Math.LN10);
}
