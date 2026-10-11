const promise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("Data Recieved.");
  } else {
    reject("Request failed.");
  }
});
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finished");
  });
