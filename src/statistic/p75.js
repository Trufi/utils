import { percentile } from './percentile';

/**
 * @param {number[]} sample
 */
export function p75(sample) {
    return percentile(sample, 0.75);
}
