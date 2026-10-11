function uniqueValues(...arrays) {
  if (arrays.length === 0) {
    return "No Array Found!";
  }
  let resultArr = [];
  for (let i of arrays) {
    for (let j of i) {
      if (!resultArr.includes(j)) {
        resultArr.push(j);
      }
    }
  }
  return resultArr;
}
console.log(uniqueValues([1, 2], [4, 5, 3], [1, 3, 7]));

function uniqueValuesUsingFlat(...arrs) {
  arrFlat = arrs.flat(Infinity);
  let result = [];
  arrFlat.reduce((acc,item)=>{
    
  })
  return result;
}
console.log(uniqueValuesUsingFlat([1, 2], [4, 5, 3], [1, 3, 7]));
//use reduce here, forEach()