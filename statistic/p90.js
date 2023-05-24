import { percentile } from './percentile.js';

/**
 * @param {number[]} sample
 * @returns {number}
 */
export function p90(sample) {
    return percentile(sample, 0.9);
}
