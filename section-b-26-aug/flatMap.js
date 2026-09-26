//41.Explain which two operations combine in flatmap() and what are its limitations?

//Definition: flatmap() is a combination of flat() and map() methods. It first maps each element using a mapping function and then flattens the result into a new array.
//flatMap()=map()+flat(1)
//Behaviour:(i) map() transforms each element of an array and can created nested elemnts.
//(ii) flat(1) flattens the array one level deep.
//Limitation: it can only flatten the array one level deep and does not flatten the array if its more deeply nested.

//42.For each element generate its original number and its square.
const arr = [1, 2, 3, 4];
const result = arr.flatMap((x) => [[x, x ** 2]]);//notice the nested array 
const resultMap = arr.map((x) => [x, x ** 2]);
console.log(result); //[ [ 1, 1 ], [ 2, 4 ], [ 3, 9 ], [ 4, 16 ] ]
console.log(resultMap); //[ [ 1, 1 ], [ 2, 4 ], [ 3, 9 ], [ 4, 16 ] ]
