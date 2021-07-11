import { percentile } from './percentile';

export function p90(sample: number[]) {
    return percentile(sample, 0.9);
}
