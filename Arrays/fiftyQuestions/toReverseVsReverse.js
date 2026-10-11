const n = [3, 9, 12, 15, 18];
const nRev = n.reverse();
console.log("Original Array: ", n);
console.log("reversed array: ", nRev);
//reverse() mutates the original array

const m = [4, 8, 12, 16, 20, 24];
const mRev = m.toReversed();
console.log("Original Array: ", m);
console.log("reversed array: ", mRev);
//toReversed() does not mutate the original array and returns the reversed array.
