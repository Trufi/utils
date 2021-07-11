export const pick = <T extends { [key: string]: any }, K extends keyof T>(
    obj: T,
    targetProps: K[],
): Pick<T, K> => {
    const targetObj = {} as Pick<T, K>;
    for (let i = 0; i < targetProps.length; i++) {
        targetObj[targetProps[i]] = obj[targetProps[i]];
    }
    return targetObj;
};
