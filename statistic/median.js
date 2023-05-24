import { percentile } from './percentile.js';

/**
 * @param {number[]} sample
 * @returns {number}
 */
export function median(sample) {
    return percentile(sample, 0.5);
}
