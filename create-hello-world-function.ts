type Fn = (...args: any[]) => string

function createHelloWorld(): Fn {
    
    return function(...args): string {
        return "Hello World"
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */