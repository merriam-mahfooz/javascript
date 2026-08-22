const products = [
  { name: "Laptop", active: true },
  { name: "Mouse", active: false },
  { name: "Keyboard", active: true },
];
const result = products.filter((p) => p.active === true).map((p) => p.name);
console.log("Active Products: ", result);
// [ 'Laptop', 'Keyboard' ]