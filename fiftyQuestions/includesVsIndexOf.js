const values = [10, NaN, 30];
console.log(values.includes(NaN)); //true
console.log(values.indexOf(NaN)); //-1

//includes() is used to check whether an element is present in the array or not and returns a boolean value accordingly. It identifies NaN correctly because it uses SameValueZero comparision.

//indexOf() uses strict === checking an din JS NaN===NaN is false.
