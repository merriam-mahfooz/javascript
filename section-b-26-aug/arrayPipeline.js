//51. Select active bookings in travel bookings, flatten passengers, extract the names and sort alphabetically without mutating original source.

const bookings = [
  { id: 1, active: true, passengers: [{ name: "Zara" }, { name: "Ali" }] },
  { id: 2, active: false, passengers: [{ name: "John" }] },
  { id: 3, active: true, passengers: [{ name: "Sara" }, { name: "Adil" }] },
];
const result = bookings
  .filter((booking) => booking.active === true)
  .map((booking) => booking.passengers)
  .flatMap((n) => n.map((passenger) => passenger.name))
  .sort();
console.log(result);
console.log(bookings);

//1.filter()= to get bookings with active booking.
//2.map()=to get an array of passenger object's values only.
//3.flatMap()=to get an array containing passenger names only
//4.sort()=to sort the names alphabetically.
// All these methods didn't mutate the original array.
