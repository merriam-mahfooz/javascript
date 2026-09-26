function fibonacci(n) {
  //If input is negative,decimal or a string:
  if (n < 0 || !Number.isInteger(n) || typeof n !== "number") {
    return "Invalid Input";
  }
  if (n === 0) return [];
  if (n === 1) return [0];
  //Base Case:
  if (n == 2) return [0, 1];
  const arr=fibonacci(n-1);
  arr.push(arr[arr.length-1]+arr[arr.length-2]);
  return arr;
}
console.log(fibonacci(10));
//Time Complexity: O(n)
