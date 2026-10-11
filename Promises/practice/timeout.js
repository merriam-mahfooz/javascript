const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 5000);
});
promise.then((result) => {
  console.log(result);
});
console.log("Let's see who gets printed first.");
