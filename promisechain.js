//promise chaining to resolve callback Hell issue.

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This is promise chaining(First Promise)"), 1000
    })
    resolve(22)
})

promise2.then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("This is second promise"), 8000
        })
        resolve(52)
    }).then((value) => {
        console.log(value);
        return new Promise((resolve, reject) => {
            console.log("This is error in third promise");
            reject(new Error("Here is the error"))
        })
    }).catch((error) => {
        console.log("error");
    })
})

console.log(promise2);

//loadScript exapmle

let loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.type = 'text/javascript'
        script.src = src;
        document.body.appendChild(script)
        script.onload = () => {
            resolve("Script Loaded Successfully")
        }
        script.onerror = () => {
            reject(new Error("Sorry! we are facing issue in loading Script"))
        }
    })
}
let p1 = loadScript("https://github.com/rao-rabi"); // this is successfull
// console.log(p1);

p1.then((value) => {
    console.log(value);
    return loadScript("https://hy1.com") //this shows error through catch
}).then((value)=>{
    console.log("Second Script is here");
}).catch((error) => {
    console.log(error);
})