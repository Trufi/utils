/**
 * @template K
 * @template V
 * @template R
 * @param {Map<K, V>} m
 * @param {(v: V, k: K) => R} cb
 * @returns {R[]}
 */
export function mapMap(m, cb) {
    /** @type {R[]} */
    const res = [];
    m.forEach((v, k) => res.push(cb(v, k)));
    return res;
}
