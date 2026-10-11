const users = [
  { id: 1, name: "Merriam" },
  { id: 2, name: "Ruchi" },
  { id: 3, name: "Maryam" },
];
const result = users.find((user) => user.id === 1);
console.log(result); //{ id: 1, name: 'Merriam' }
console.log(users.find((user) => user.id === 8)); //undefined
