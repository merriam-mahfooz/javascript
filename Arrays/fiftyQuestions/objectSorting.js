const products = [
  { name: "laptop", price: 60000 },
  { name: "mouse", price: 1200 },
  { name: "monitor", price: 15000 },
];
const result = products.sort((a, b) => a.price - b.price);
console.log(result);
