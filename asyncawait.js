// async await 
async function rabi() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(21)
        }, 2000)
    })
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(22)
        }, 5000)
    })

    // p1.then(alert);
    // p2.then(alert)
    console.log("Start p1");
    let a = await p1;
    console.log("End p1 " + a);
    console.log("Start p2");
    let b = await p2;
    console.log("End p2 " + b);
    return [a, b]
}

let rao = async () => {
    console.log("I am the second function");
}
let khan = async () =>{
    console.log("I am third function");
}

let both = async () => {
    let a = await rabi();
    let b = await rao();
    let c = await khan()
}

both();
// let pr = rabi();
// console.log(pr);