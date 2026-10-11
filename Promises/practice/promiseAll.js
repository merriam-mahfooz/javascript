// const p1 = new Promise((_,reject) => setTimeout(() => reject("BOOM!"), 3000));
// const p2 = new Promise((resolve) => setTimeout(() => resolve("B"), 1000));
// const p3 = new Promise((resolve) => setTimeout(() => resolve("C"), 2000));
// Promise.all([p1, p2, p3]).then((result) => console.log(result))
// .catch((error)=>console.log(error)
// );
const a1 = Promise.resolve(10);
const a2 = Promise.resolve(20);
const a3 = Promise.resolve(30);
Promise.all([a1, a2, a3])
  .then(([a, b, c]) => console.log(a + b + c))
  .catch((error) => console.log(error));
