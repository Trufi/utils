export function arrayInsert<T>(array: T[], index: number, newItem: T): T[] {
    const leftPart = array.slice(0, index);
    const rightPart = array.slice(index);

    leftPart.push(newItem);
    return leftPart.concat(rightPart);
}
