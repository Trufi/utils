import { percentile } from './percentile';

/**
 * @param {number[]} sample
 * @returns {number}
 */
export function p25(sample) {
    return percentile(sample, 0.25);
}
