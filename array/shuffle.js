/**
 * @template T
 * @param array {T[]}
 * @param randomFn {() => number}
 * @returns {T[]}
 */
export function arrayShuffle(array, randomFn = Math.random) {
    const out = array.slice();

    for (let i = 0; i < out.length; i++) {
        const index = i + Math.floor(randomFn() * (out.length - i));
        const t = out[i];
        out[i] = out[index];
        out[index] = t;
    }

    return out;
}
