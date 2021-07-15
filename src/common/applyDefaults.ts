export function applyDefaults<T>(params: T, defaults: Required<T>): Required<T> {
    const result = { ...defaults };

    for (const key in params) {
        if (params[key] !== undefined) {
            result[key] = params[key];
        }
    }

    return result;
}
