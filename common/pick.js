/**
 * @template {{ [key: string]: any }} T
 * @template {keyof T} K
 * @param {T} obj
 * @param {K[]} targetProps
 * @returns {Pick<T,K>}
 */
export function pick(obj, targetProps) {
    const targetObj = /** @type {Pick<T, K>} */ ({});
    for (let i = 0; i < targetProps.length; i++) {
        targetObj[targetProps[i]] = obj[targetProps[i]];
    }
    return targetObj;
}
