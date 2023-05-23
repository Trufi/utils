/**
 * @param seed {number} Integer
 */
export function createRandomFunction(seed) {
    return () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
    };
}
