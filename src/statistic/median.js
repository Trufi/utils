import { percentile } from './percentile';

/**
 * @param {number[]} sample
 */
export function median(sample) {
    return percentile(sample, 0.5);
}
