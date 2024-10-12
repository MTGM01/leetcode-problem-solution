type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    const sum = nums.reduce(fn, init);
    return sum;
};