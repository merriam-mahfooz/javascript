//Flat an array without using .flat()
//Write a function flattenArray(nestedArray) that takes a nested array and returns a new array with all the elements flattened into a single level in their original order.

function flattenArray(arr) {
  let resultArr = [];
  if (arr.length === 0) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      resultArr.push(arr[i]);
    } else {
      let temp = flattenArray(arr[i]);
      resultArr = [...resultArr, ...temp];
    }
  }
  return resultArr;
}
console.log(flattenArray([1, [2, [3, [7, 8], 4], 5], 6]));
