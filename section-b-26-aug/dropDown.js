//46.Categories ke nested products ko dropdown options {label,value} objects mein convert karo.

const categories = [
  {
    name: "Laptop",
    products: [
      { id: 1, name: "MacBook" },
      { id: 2, name: "Dell" },
    ],
  },
  { name: "Phone", products: [{ id: 3, name: "iPhone" }] },
];
const result = categories.flatMap((category) =>
  category.products.map((product) => ({
    label: product.name,
    value: product.id,
  })),
);
console.log(result);
//OUTPUT: [
 // { label: 'MacBook', value: 1 },
 // { label: 'Dell', value: 2 },
 // { label: 'iPhone', value: 3 }]

//to return object in arrow function : x=>({key:value})
//JS understands this as function body: x=>{key:value}
