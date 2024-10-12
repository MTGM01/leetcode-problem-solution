function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    if (obj === null || obj === undefined) {
        return false
    }
    if ((Array.isArray(obj) && classFunction === null) || (Array.isArray(obj) && classFunction === undefined)) {
        return false
    }
    if ((Array.isArray(obj) && classFunction !== null) || (Array.isArray(obj) && classFunction !== undefined)) {
        return true
    }
    return obj instanceof classFunction || typeof obj === "number" || typeof obj === "bigint"
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */