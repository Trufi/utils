/**
 * @template K
 * @template V
 * @param {Map<K, V>} m
 * @param {(v: V, k: K) => boolean} cb
 * @returns {boolean}
 */
export function mapEvery(m, cb) {
    const iterator = m.entries();
    let result = iterator.next();

    while (!result.done) {
        const [key, value] = result.value;
        const res = cb(value, key);
        if (!res) {
            return false;
        }
        result = iterator.next();
    }

    return true;
}
