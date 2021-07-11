export function throttle(fn: (...args: any[]) => void, time: number) {
    let lock = false;
    let savedArgs: any[] | undefined;

    function later() {
        lock = false;
        if (savedArgs) {
            wrapperFn(...savedArgs);
            savedArgs = undefined;
        }
    }

    function wrapperFn(...args: any[]) {
        if (lock) {
            savedArgs = args;
        } else {
            fn(...args);
            setTimeout(later, time);
            lock = true;
        }
    }

    return wrapperFn;
}
