//Attach Multiple Handlers to Promise

let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("I am resolved");
        resolve(24)
    }, 2000)
})

promise.then((value)=>{
    console.log(value);
})

promise.then(()=>{
    console.log("Done")
})

promise.then(()=>{
    return new Promise((resolve, reject)=>{
        console.log("i am running if promise resolved");
        resolve(55);
    })
})