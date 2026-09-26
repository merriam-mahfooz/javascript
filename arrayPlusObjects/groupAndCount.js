//Write a function groupAndCount(data) that takes an array of strings and numbers and returns an object that groups the strings by their first letter and counts the occurrences of each string. The keys of the object should be the first letters, and the values should be objects containing the strings and their counts.
function groupAndCount(data) {
  let result = {};
  for (let i = 0; i < data.length; i++) {
    if (result.hasOwnProperty(data[i])) {
      continue;
    } else {
      let count = 1;
      for (let j = i + 1; j < data.length; j++) {
        if (data[i] === data[j]) {
          count++;
        }
      }
      result[data[i]] = count;
    }
  }

  return result;
}
console.log(
  groupAndCount([
    "apple",
    1,
    "banana",
    "apricot",
    1,
    "banana",
    2,
    "cherry",
    "apple",
  ]),
);
//try using reduce()
