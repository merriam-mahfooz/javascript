const p1=Promise.reject("Failed");
const p2=Promise.resolve("Success");
const p3=Promise.resolve("Another success");
Promise.any([p1,p2,p3])
.then((result)=>console.log(result));