//async is a keyword that is used to create an async function, it always returns a Promise. If a non-promise value is returned,it wraps the value into a promise before returning.

// async function getData() {
//   return "Merriam";
// }
// const dataPromise = getData();
// console.log(dataPromise);
// dataPromise.then((res) => console.log(res));

//If you return a Promise in an async function, it will return the Promise withouut making any changes.

const p= new Promise((resolve,reject)=>{
    resolve("Hi I am the data!");
});

// async function getPromise(){
//     return p;
// }
// dataPromise=getPromise();
// console.log(dataPromise);
// dataPromise.then((res) => console.log(res));

//using await with sync
async function handlePromise(){
    console.log(p);
    const val=await p;
    console.log(val);
    console.log(p);
}
handlePromise();