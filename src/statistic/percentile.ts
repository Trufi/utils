/**
 * Находит персентиль в несортированном массиве
 * @param percent From 0 to 1
 */
export function percentile(sample: number[], percent: number) {
    const array = sample.slice();
    array.sort((a: number, b: number) => a - b);

    // Не совсем верно, ну и пофиг
    const index = Math.floor(array.length * percent);

    return array[index];
}
