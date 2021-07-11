export function mapMap<K, V, R>(m: Map<K, V>, cb: (v: V, k: K) => R): R[] {
    const res: R[] = [];
    m.forEach((v, k) => res.push(cb(v, k)));
    return res;
}
