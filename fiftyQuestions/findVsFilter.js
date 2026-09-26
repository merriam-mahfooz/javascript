const anime = [
  { name: "Hunter", lead: "Gon", season: 6 },
  { name: "JJK", lead: "Yuji", season: 3 },
  { name: "SpyFamily", lead: "Anya", season: 3 },
];
const findResult = anime.find((a) => a.lead === "Yuji");
console.log(findResult); //{ name: 'JJK', lead: 'Yuji' }
//find() returns the object which consists of a specific key value.

const filterResult = anime.filter((a) => a.season === 3);
console.log(filterResult);
// [{ name: 'JJK', lead: 'Yuji', season: 3 },
//     { name: 'SpyFamily', lead: 'Anya', season: 3 }]

//filter returns an array of objects which have seasons ===3
