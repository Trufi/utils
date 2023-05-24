import { clamp } from './clamp';

/**
 * @param {number} min
 * @param {number} max
 * @param {number} value
 * @returns {number}
 */
export function affineStep(min, max, value) {
    return clamp((value - min) / (max - min), 0, 1);
}
