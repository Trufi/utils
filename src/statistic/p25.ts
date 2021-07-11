import { percentile } from './percentile';

export function p25(sample: number[]) {
    return percentile(sample, 0.25);
}
