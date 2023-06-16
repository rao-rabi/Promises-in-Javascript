let promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Hello! i am a resolved promise")}, 3000)
    resolve(56);
    // reject(new Error("Error in p1"))
});


let promise2 = new Promise((resolve, reject) => {
    console.log("Hello i am a error");
    reject(new Error('error here'))
})

//To get value from promise if resolved

promise.then((value)=>{
    console.log(value);
})

//To Catch error from promise 2

promise2.catch((error)=>{
    console.log('error here');
})

//use of both then and catch 

promise.then((value) => {
    console.log(value);
},(error)=>{
    console.log(error);
})

console.log(promise);
console.log(promise2);