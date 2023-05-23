import { percentile } from './percentile';

/**
 * @param {number[]} sample
 */
export function p90(sample) {
    return percentile(sample, 0.9);
}
