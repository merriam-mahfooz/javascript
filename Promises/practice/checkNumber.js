const checkNumber = new Promise((resolve, reject) => {
  let num = 10;
  if (num > 5) {
    resolve("Number is greater than 5.");
  } else {
    reject("Number is less than or equal to 5.");
  }
});
checkNumber
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
