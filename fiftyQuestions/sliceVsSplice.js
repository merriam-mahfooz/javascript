const num=[1,2,3,4,5];
const numSlice=num.slice(2,4)
console.log(num);//[ 1, 2, 3, 4, 5 ]
console.log(numSlice);//[ 3, 4 ]
//slice does not mutate the original array
//slice returns a copy of the portion of the array

const nums=[12,24,36,48,60,72];
const numsSplice=nums.splice(2,2)
console.log(nums);//[ 12, 24, 60, 72 ]
console.log(numsSplice);//[ 36, 48 ]
//mutates the original array
//it returns an array of the removed element