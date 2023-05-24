/**
 * @template T
 * @param array {T[]}
 * @param index {number}
 * @param newItem {T}
 * @returns {T[]}
 */
export function arrayInsert(array, index, newItem) {
    const leftPart = array.slice(0, index);
    const rightPart = array.slice(index);

    leftPart.push(newItem);
    return leftPart.concat(rightPart);
}
