// insert X and Y at index 2 without deleting anything
const items = ["a", "b", "c", "d", "e"];
const result = items.splice(2, 0, "x", "y");

console.log("Original Array: ", items);
console.log("Resultant Array: ", result);
