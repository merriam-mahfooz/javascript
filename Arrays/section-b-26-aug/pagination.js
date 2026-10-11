//An array consists of 25 items and page size is 5. extract the elements of page 3 using
// slice().

const items = Array.from({ length: 25 }, (_, i) => i + 1);
const page = 1;
const pageSize = 5;
let startingIndex = (page - 1) * pageSize;
let endingIndex = startingIndex + pageSize;
if (page >= 1 && page <= 5) {
  console.log("Items of Page 3: ", items.slice(startingIndex, endingIndex));
} else {
  console.log("Invalid Page Number.");
}
