//37.Flatten a nested array using default flat():
const data = [1, [2, 3], [4, [5, 6]]];
const flattenData = data.flat();
console.log("Original Array: ", data); //[ 1, [ 2, 3 ], [ 4, [ 5, 6 ] ] ]
console.log("Flattened Array: ", flattenData); // [ 1, 2, 3, 4, [ 5, 6 ] ]
//If no depth is passed, it will flatten the nested array to one level deep.

//38. Flatten the same array using flat(2):
const flattenTwo = data.flat(2);
console.log("Flattened Array (Depth Two): ", flattenTwo); //[ 1, 2, 3, 4, 5, 6 ]
//It flattens the array two level deep.

//39. Flatten a deeply nested array completely:
const array = [1, [2, [3, [4, [5]]]]];
const flatArray = array.flat(Infinity);
console.log("Deeply Flatten: ", flatArray); //[ 1, 2, 3, 4, 5 ]
//It flattens the array completely, no matter how deepli it is nested.


//40.Prove whether flat() mutates the original array or returns a new array:
const orgArray = [2, 4, [6, [8]]];
const flatArr = orgArray.flat(2);
console.log(
  orgArray === flatArr
    ? "original array is mutated"
    : "original array is not mutated",
);//original array is not mutated
