import { percentile } from './percentile';

/**
 * @param {number[]} sample
 * @returns {number}
 */
export function median(sample) {
    return percentile(sample, 0.5);
}
