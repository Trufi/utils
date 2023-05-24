import { worldSize } from './constants.js';
import { clamp } from '../common/clamp.js';
import { degToRad } from '../common/degToRad.js';

/**
 * Projects point in geographical coordinates to point in map coordinates.
 *
 * @param {number[]} lngLat
 * @returns {number[]}
 */
export function mapPointFromLngLat(lngLat) {
    const sin = Math.sin(degToRad(lngLat[1]));

    const x = (lngLat[0] * worldSize) / 360;
    const y = (Math.log((1 + sin) / (1 - sin)) * worldSize) / (4 * Math.PI);

    const worldHalf = worldSize / 2;
    return [clamp(x, -worldHalf, worldHalf), clamp(y, -worldHalf, worldHalf)];
}
