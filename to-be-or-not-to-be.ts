type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val2: any): ToBeOrNotToBe {
    const toBeOrNotObj: ToBeOrNotToBe = {
        toBe(val: any) {
            if (val === val2) {
                return true
            } else {
                throw new Error("Not Equal")
            }
        },
        notToBe(val: any) {
            if (val !== val2) {
                return true
            } else {
                throw new Error("Equal")
            }
        },
    }
    return toBeOrNotObj
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */