const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1");
    },5000)
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 2");
    },10000)
});
//Here JS doesn't wait for the Promise to be resolved and move on to the next line after registrring the Promise into a separate place.
// function getData(){
//     //JS will not wait for this promise to be resolved
//     p.then((res)=>console.log(res));
//     console.log("Hey! Merriam");
// }
// getData();
// Hey! Merriam
// Promise Resolved Value!!

//Now with async function
async function handlePromise(){
    const val=await p1;
    console.log("Hey! Merriam");
    console.log(val);

    const val2=await p2;
    console.log("Hey! Merriam2");
    console.log(val2);
}
//when we use await JS waits for the promise to resolve and only then it moves to the next line of code.
handlePromise();
