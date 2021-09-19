export function mapSome<K, V>(m: Map<K, V>, cb: (v: V, k: K) => boolean): boolean | undefined {
    const iterator = m.entries();
    let result = iterator.next();

    while (!result.done) {
        const [key, value] = result.value;
        const res = cb(value, key);
        if (res) {
            return true;
        }
        result = iterator.next();
    }

    return false;
}
