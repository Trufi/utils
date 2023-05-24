import { worldSize } from './constants.js';
import { radToDeg } from '../common/radToDeg.js';

/**
 * Projects point in map coordinates to point in geographical coordinates.
 *
 * @param {number[]} mapPoint
 * @returns {number[]}
 */
export function mapPointToLngLat(mapPoint) {
    const latFactor = (-2 * Math.PI) / worldSize;
    return [
        (mapPoint[0] * 360) / worldSize,
        90.0 - 2 * radToDeg(Math.atan(Math.exp(mapPoint[1] * latFactor))),
    ];
}
