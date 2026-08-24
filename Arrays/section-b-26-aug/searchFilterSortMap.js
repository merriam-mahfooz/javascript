//49. Select active products whose price is greater than 2000,then sort in ascending order and return the final names. Use filter(),toSorted(),map()

const products = [
  { name: "Laptop", price: 60000, active: true },
  { name: "Mouse", price: 1200, active: true },
  { name: "Keyboard", price: 2500, active: true },
  { name: "Monitor", price: 15000, active: false },
];
const result = products
  .filter((product) => product.active === true && product.price > 2000)
  .toSorted((a, b) => a.price - b.price)
  .map((product) => product.name);
console.log("Original: ", products);
console.log("Result: ", result);

//OUTPUT:
// Original:  [
//   { name: 'Laptop', price: 60000, active: true },
//   { name: 'Mouse', price: 1200, active: true },
//   { name: 'Keyboard', price: 2500, active: true },
//   { name: 'Monitor', price: 15000, active: false }
// ]
// Result:  [ 'Keyboard', 'Laptop' ]

//Explanation: First, I used the filter method to get active products having price > 2000,then I sorted the filtered array in ascending order according to their prices, finally using map(), I got an array containing the names of the products.

//After filter(): [{ name: "Laptop", price: 60000, active: true },{ name: "Keyboard", price: 2500, active: true }]
//After toSorted(): [{ name: "Keyboard", price: 2500, active: true },{ name: "Laptop", price: 60000, active: true }]
//After map():[ 'Keyboard', 'Laptop' ]
