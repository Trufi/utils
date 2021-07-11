import { percentile } from './percentile';

export function median(sample: number[]) {
    return percentile(sample, 0.5);
}
