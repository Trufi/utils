/**
 * @template T
 * @param params {T}
 * @param defaults {Required<T>}
 * @returns Required<T>
 */
export function applyDefaults(params, defaults) {
    const result = { ...defaults };

    for (const key in params) {
        if (params[key] !== undefined) {
            result[key] = params[key];
        }
    }

    return result;
}
