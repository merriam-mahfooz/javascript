const recover = Promise.reject("Something went wrong.");
recover
  .catch((error) => {
    console.log(error);
    return 100;
  })
  .then((result) => {
    console.log(result);
  })
  .finally(() => {
    console.log("I'll run anyways");
  });
