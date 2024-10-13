type JSONValueArgs = null | boolean | number | string | JSONValueArgs[] | { [key: string]: JSONValueArgs };

function argumentsLength(...args: JSONValueArgs[]): number {
    return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */