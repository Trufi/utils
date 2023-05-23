/**
 * @param {number} zoom
 */
export function coordinatesPrecision(zoom) {
    return Math.ceil((zoom * Math.LN2 + Math.log(256 / 360 / 0.5)) / Math.LN10);
}
