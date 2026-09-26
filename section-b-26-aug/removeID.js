//47. Remove id 3 from users without mutating original array.Topics:filter(),spread

//using filter()
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "John" },
];
const newUsers = users.filter((user) => user.id !== 3);
console.log(newUsers);
console.log(users); //filter does not mutates the original array
