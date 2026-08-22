const anime = ["SpyFamily", "Hunter", "JujutsuKaisen"];
const mainCharacter = ["Anya", "Gon", "Yuji"];
const merge = anime.concat(mainCharacter);
const mergeSpread = [...anime, ...mainCharacter];

console.log(anime);
console.log(mainCharacter);
console.log(merge);
console.log(mergeSpread);
//concat does not mutate original array

//spread does not mutate the original arrays because it simply copies the elements of the two arrays into a new one
