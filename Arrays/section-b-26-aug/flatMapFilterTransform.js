//43. Double even numbers and remove odd numbers.

const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers.filter((n) => n % 2 === 0).flatMap((n) => n * 2);
console.log(result); //[ 4, 8, 12 ]

//What will happen if there are no even numbers?
const nums = [1, 3, 5, 7];
const result2 = nums.filter((n) => n % 2 === 0).flatMap((n) => n * 2);
console.log(result2); //[]

//Without using filter()
const data = [1, 2, 3, 4];
const result3 = data.flatMap((n) => (n % 2 === 0 ? [n * 2] : [])); //after map [[],[4],[],[8]]
console.log(result3); //[ 4,8 ]
//after returning empty array in flatMap, no output for that element is produced and after flatten that empty array disappears. That is why it is used to remove unwanted elements.
