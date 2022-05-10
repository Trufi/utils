import { vec3dot } from './dot';

export function vec3angle(a: number[], b: number[]) {
    const ax = a[0];
    const ay = a[1];
    const az = a[2];
    const bx = b[0];
    const by = b[1];
    const bz = b[2];
    const mag = Math.sqrt((ax * ax + ay * ay + az * az) * (bx * bx + by * by + bz * bz));
    const cosine = mag && vec3dot(a, b) / mag;
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
