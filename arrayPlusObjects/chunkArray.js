//Chunk Array Write a function chunk(array, size) that takes an array and a chunk size, and returns a new array of arrays, where each inner array has atmost chunk size elements. The final inner array may be smaller if there are leftover elements. If the chunk size is not a positive number, return an empty array. If the input array is empty, return an empty array.

function chunkArray(array, size) {
  // Check if chunk size is a positive number
  if (typeof size !== "number" || size <= 0) {
    return [];
  }

  // Check if input array is empty
  if (array.length === 0) {
    return [];
  }

  let resultArr = [];
  for (let i = 0; i < array.length; i += size) {
    let temp = [];
    //if the remaining elements are less than the chunk size, push all remaining elements to temp
    if (array.length - i < size) {
      for (let k = i; k < array.length; k++) {
        temp.push(array[k]);
      }
    }
    //if the remaining elements are greater than or equal to the chunk size, push chunk size elements to temp
    else {
      for (let j = i; j < size + i; j++) {
        temp.push(array[j]);
      }
    }
    resultArr.push(temp);
  }
  return resultArr;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
//[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9 ] ]
