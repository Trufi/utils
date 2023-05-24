import { percentile } from './percentile';

/**
 * @param {number[]} sample
 * @returns {number}
 */
export function p90(sample) {
    return percentile(sample, 0.9);
}
