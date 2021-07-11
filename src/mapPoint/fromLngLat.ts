import { worldSize } from './constants';
import { clamp } from '../common/clamp';
import { degToRad } from '../common/degToRad';

/**
 * Projects point in geographical coordinates to point in map coordinates.
 */
export function mapPointFromLngLat(lngLat: number[]): number[] {
    const sin = Math.sin(degToRad(lngLat[1]));

    const x = (lngLat[0] * worldSize) / 360;
    const y = (Math.log((1 + sin) / (1 - sin)) * worldSize) / (4 * Math.PI);

    const worldHalf = worldSize / 2;
    return [clamp(x, -worldHalf, worldHalf), clamp(y, -worldHalf, worldHalf)];
}
