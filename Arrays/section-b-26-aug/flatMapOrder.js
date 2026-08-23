//45.Convert items of each orders into a single array

const orders = [
  { id: 1, items: ["Laptop", "Mouse"] },
  { id: 2, items: ["Keyboard"] },
  { id: 1, items: ["Monitor", "HDMI Cable"] },
];
const items = orders.flatMap((ord) => ord.items);
console.log(items);//[ 'Laptop', 'Mouse', 'Keyboard', 'Monitor', 'HDMI Cable' ]
