import { worldSize } from './constants';

/**
 * Project distance in meters to distance in map points with distortion of the mercator.
 *
 * @param lngLat The point near which the calculation takes place.
 * @param meters Distance in meters.
 */
export function mapPointsFromMeters(lngLat: number[], meters: number): number {
    const earthCircumference = 40075000;
    const mapPointToMeterRatio = worldSize / earthCircumference;
    const projectionScaleFactor = 1 / Math.cos((lngLat[1] * Math.PI) / 180);

    return meters * mapPointToMeterRatio * projectionScaleFactor;
}
