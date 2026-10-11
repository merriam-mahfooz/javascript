const p1=Promise.resolve("A");
const p2=Promise.reject("I'm The Error!");
const p3=Promise.resolve("B");

Promise.allSettled([p1,p2,p3])
.then((results)=>console.log(results));