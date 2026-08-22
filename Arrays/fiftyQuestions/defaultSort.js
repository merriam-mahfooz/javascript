const numbers = [2, 4, 8, 11, 9];
console.log("Default Sort: ", numbers.sort()); //Default Sort:  [ 11, 2, 4, 8, 9 ]
//the sort() methods converts the elements into a string and sorts them alphabetically.That is why '11' comes first because 1 is before 2.
//to fix this, we give a comparator
const nums = [2, 4, 8, 13, 9, 10];
console.log(
  "Ascending Order: ",
  nums.sort((a, b) => a - b),
); // [ 2, 4, 8, 9, 10, 13 ]
console.log(
  "Descending Order: ",
  nums.sort((a, b) => b - a),
); // [ 13, 10, 9, 8, 4, 2 ]
//sort() mutates the original array
