import { worldSize } from './constants';
import { radToDeg } from '../common/radToDeg';

/**
 * Projects point in map coordinates to point in geographical coordinates.
 */
export function mapPointToLngLat(lngLat: number[]): number[] {
    const latFactor = (-2 * Math.PI) / worldSize;
    return [
        (lngLat[0] * 360) / worldSize,
        90.0 - 2 * radToDeg(Math.atan(Math.exp(lngLat[1] * latFactor))),
    ];
}
