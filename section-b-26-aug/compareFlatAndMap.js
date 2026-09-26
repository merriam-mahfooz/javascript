//44. for each number generate the original number and its square using flat()+map() and flatmap()

const numbers = [1, 2, 3, 4];

const result1 = numbers.map((n) => (n % 2 === 0 ? [[n, n ** 2]] : [])).flat(1);
console.log(result1); //[ [ 2, 4 ], [ 4, 16 ] ]
//In this approach, we can flat a deeply nested array upto any level deep. Also, we explicity do two operations.

const result2 = numbers.flatMap((n) => (n % 2 === 0 ? [[n, n * 2]] : []));
console.log(result2); //[ 2, 4, 4, 8 ]
