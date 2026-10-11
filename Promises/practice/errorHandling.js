const promise = Promise.resolve(10);
promise
  .then((num) => {
    return num * 2;
  })
  .then(() => {
    throw new Error("Oops!");
  })
  .catch((error) => {
    console.log("Error Caught: ", error);
  });
