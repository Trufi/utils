import { percentile } from './percentile';

export function p75(sample: number[]) {
    return percentile(sample, 0.75);
}
