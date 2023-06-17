//Promise API all six methods
let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(21)
    },11000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(new Error("error"))
        // resolve(22)
    },2000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(23)
    },3000)
})

// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })
// p3.then((value)=>{
//     console.log(value);
// })

//Promise.all runs all promises at a time when all get resolved only. 
let promise_all = Promise.all([p1,p2,p3]);
promise_all.then((value)=>{
    console.log(value);
})

//Promise.allSettled runs all promises which are resolved and which has error.

let promise_allSettled = Promise.allSettled([p1,p2,p3])
promise_allSettled.then((value)=>{
    console.log(value);
})

//Promise.run runs the promise which is resolved or through the error first of all 
let promise_race = Promise.race([p1 , p2, p3]);
promise_race.then((value)=>{
    console.log(value);
})

//Promise.any runs all the promises and skips the error one
let promise_any = Promise.any([p1 , p2, p3]);
promise_any.then((value)=>{
    console.log(value);
})

// Promise.resolve makes a resolved promise with given value

let promise_resolve = Promise.resolve(22);
promise_resolve.then((value)=>{
    console.log(value);
})

//Promise.reject makes a rejected promise with given value

let promise_reject = Promise.reject(new Error("I am rejected Promise"));
promise_reject.catch((value)=>{
    console.log(value);
})