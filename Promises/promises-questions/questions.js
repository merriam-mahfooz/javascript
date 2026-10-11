//1.What is Promise in JavaScript? Explain in your own words.
//Answer: Promises are objects that represent the eventual completion or failure of an asynchronous operation and its resulting value.

//2.What are the three states of a Promise? Explain pending, fufilled, rejected.
//The three states of Promises are:
//Pending: It is the state when a Promise is waiting to be resolved or rejected OR it hasn't completed yet.
//Fullfilled: the state when a Promise is successfully completed.
//Rejected: the state when a Promise is completed with rejection.
//Once a Promise is fullfilled or rejected, it is said to be settled and we can no longer change it's result.

//3.What is the difference between .then(), .catch(), and .finally()?
//.then(): it is a callback function that runs when the Promise is resolved.
//.catch(): it is a callback function that runs when a Promise is rejected.
//.finally(): it runs whether the Promise rejects or resolves.

//4.What will be the output?
const promise = Promise.resolve("Hello");
promise.then((result) => {
  console.log(result);
});
//My Guess: Hello    Output: Hello

//5. What will be the output?
Promise.reject("Error")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
//My Guess: Error     Output: Error

//6.Explain Promise chaining. What will this code print?
//In Promise chaining, we use multiple .then() methods where each .then() recives the result returned by the previous one. If we return a Promise then the next .then() waits for that promise to settle.
//Returning the result is important while chaining otherwise the next .then() recives undefined.
//.catch() handles errors from the chain before it.
Promise.resolve(10)
  .then((num) => num * 2)
  .then((num) => num + 5)
  .then((result) => console.log(result));
//My Guess: 25      Output: 25

//7.What is the difference between Promise.all() and Promise.race()? Give one real-world usecase for each.
//Promise.all(): It is a promise method that takes an array of multiple Promises and returns their fulfilled result in an array only when all the Promises are fulfilled. If any one promise fails, it rejects with that Promise's reason. However, other Promises continue to settle in the background.
//Example: When you want to fetch multiple data together that are independent of each other.

//Promise.race(): a Promise method that takes an array of Promises and returns the result of Promise which settles first. The Promise can either be rejected of fulfilled. Other Promises continue to settle in the background.
//Example: Useful when you want the first settled Promise.

//8.What will be the output order?
console.log("Start");
Promise.resolve().then(() => {
  console.log("Promise");
});
console.log("End");
//My Guess: Start => End => Promise

//9.Create a Promise that resolves with "Data fetched Successfully" after 2 seconds. Then use .then() to print the result.
const data = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Data Fetched Successfully!");
  }, 2000);
});
data.then((result) => {
  console.log(result);
});

//10. What is the difference between these two?
const p = new Promise((resolve) => {
  resolve("Hello!");
});
//This creates a Promise p that is not settled yet.
const p1 = Promise.resolve("Hello");
//This creates an already fulfilled Promise.
