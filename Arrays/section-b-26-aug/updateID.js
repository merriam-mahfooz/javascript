//48. Update username having id 2 to 'Sara Khan'
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "John" },
];
const resultUser = users.map((user) =>
  user.id === 2 ? { ...user, name: "Sara Khan" } : user,
);
console.log("Original: ", users);
console.log("Modified: ", resultUser);

//Role of spread
//...user = it copies all the properties of the old object
//name:"Sara Khan",this overwrites the old value. This creates a new object and does mutate the original array
//SYNTAX: {...oldObject, changedProperty: newValue}
