export function mapFilter<K, V, R>(m: Map<K, V>, cb: (v: V, k: K) => R): V[] {
    const res: V[] = [];
    m.forEach((v, k) => {
        if (cb(v, k)) {
            res.push(v);
        }
    });
    return res;
}
