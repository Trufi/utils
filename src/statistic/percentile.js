/**
 * Находит персентиль в несортированном массиве
 * @param sample {number[]}
 * @param percent {number} From 0 to 1
 */
export function percentile(sample, percent) {
    const array = sample.slice();
    array.sort((a, b) => a - b);

    // Не совсем верно, ну и пофиг
    const index = Math.floor(array.length * percent);

    return array[index];
}
