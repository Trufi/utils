/**
 * @param {number[]} point
 * @param {number[]} segmentA
 * @param {number[]} segmentB
 * @returns {{ t: number; point: number[] }}
 */
export function nearestPointOnSegment(point, segmentA, segmentB) {
    const A = point[0] - segmentA[0];
    const B = point[1] - segmentA[1];
    const C = segmentB[0] - segmentA[0];
    const D = segmentB[1] - segmentA[1];

    const dot = A * C + B * D;
    const lengthSquared = C * C + D * D;
    const param = lengthSquared !== 0 ? dot / lengthSquared : 0;

    if (param < 0) {
        return {
            point: segmentA,
            t: 0,
        };
    } else if (param > 1) {
        return {
            point: segmentB,
            t: 1,
        };
    } else {
        return {
            point: [Math.round(segmentA[0] + param * C), Math.round(segmentA[1] + param * D)],
            t: param,
        };
    }
}
