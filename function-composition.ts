type F = (x: number) => number;

function compose(functions: F[]): F {
    
    return function(x: number): number {
        let init: number = x
        functions.reverse().forEach(func => {
            init = func(init)
        })
        return init
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */