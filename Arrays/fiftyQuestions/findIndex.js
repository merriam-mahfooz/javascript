const products = [
  { id: 10, name: "Mouse" },
  { id: 20, name: "Keyboard" },
  { id: 30, name: "Monitor" },
];
const index = products.findIndex((p) => p.id === 30);
console.log(
  index === -1 ? "Product Not Found" : `Product Found At Index ${index}`,
);
