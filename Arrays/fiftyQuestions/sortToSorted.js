const nums = [3, 1, 4, 2, 11];
const sortedNums = nums.toSorted((a, b) => a - b);
console.log("Original Array: ", nums);
console.log("Sorted Array: ", sortedNums);
//sort() mutates the original array but toSorted() does not mutate the original array and returns the sorted array
