export function mapFind<K, V>(m: Map<K, V>, cb: (v: V, k: K) => boolean): V | undefined {
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
