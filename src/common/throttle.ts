export function throttle(fn: (...args: any[]) => void, time: number, context?: any) {
    let lock = false;
    let savedArgs: any[] | undefined;

    function later() {
        lock = false;
        if (savedArgs) {
            wrapperFn.apply(context, savedArgs);
            savedArgs = undefined;
        }
    }

    function wrapperFn(...args: any[]) {
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
