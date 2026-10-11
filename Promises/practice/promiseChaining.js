const chain = Promise.resolve(3);
chain
  .then((result) => {
    return result * 2;
  })
  .then((result) => {
    return result + 10;
  })
  .then((result) => {
    console.log(result);
  });
console.log(chain);
