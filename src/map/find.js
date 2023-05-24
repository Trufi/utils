/**
 * @template K
 * @template V
 * @param {Map<K, V>} m
 * @param {(v: V, k: K) => boolean} cb
 * @returns {V | undefined}
 */
export function mapFind(m, cb) {
    const iterator = m.entries();
    let result = iterator.next();

    while (!result.done) {
        const [key, value] = result.value;
        const res = cb(value, key);
        if (res) {
            return value;
        }
        result = iterator.next();
    }
}
