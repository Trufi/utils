/**
 * @param {(...args: any[]) => void} fn
 * @param {number} time
 * @param {*=} context
 */
export function throttle(fn, time, context) {
    let lock = false;

    /** @type {any[] | undefined} */
    let savedArgs;

    function later() {
        lock = false;
        if (savedArgs) {
            wrapperFn.apply(context, savedArgs);
            savedArgs = undefined;
        }
    }

    /**
     * @param {any[]} args
     */
    function wrapperFn(...args) {
        if (lock) {
            savedArgs = args;
        } else {
            fn.apply(context, args);
            setTimeout(later, time);
            lock = true;
        }
    }

    return wrapperFn;
}
