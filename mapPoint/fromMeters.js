import { worldSize } from './constants.js';

/**
 * Project distance in meters to distance in map points with distortion of the mercator.
 *
 * @param {number[]} lngLat The point near which the calculation takes place.
 * @param {number} meters Distance in meters.
 * @returns {number}
 */
export function mapPointsFromMeters(lngLat, meters) {
    const earthCircumference = 40075000;
    const mapPointToMeterRatio = worldSize / earthCircumference;
    const projectionScaleFactor = 1 / Math.cos((lngLat[1] * Math.PI) / 180);

    return meters * mapPointToMeterRatio * projectionScaleFactor;
}
