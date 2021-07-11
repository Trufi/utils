/**
 * Haversine formula
 */
export function geoDistance(lngLat1: number[], lngLat2: number[]): number {
    const R = 6371000;
    const rad = Math.PI / 180;
    const lat1 = lngLat1[1] * rad;
    const lat2 = lngLat2[1] * rad;
    const sinDLat = Math.sin(((lngLat2[1] - lngLat1[1]) * rad) / 2);
    const sinDLon = Math.sin(((lngLat2[0] - lngLat1[0]) * rad) / 2);
    const a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
}
