/**
 * @template K
 * @template V
 * @template R
 * @param {Map<K, V>} m
 * @param {(v: V, k: K) => R} cb
 * @returns {V[]}
 */
export function mapFilter(m, cb) {
    /** @type {V[]} */
    const res = [];
    m.forEach((v, k) => {
        if (cb(v, k)) {
            res.push(v);
        }
    });
    return res;
}
