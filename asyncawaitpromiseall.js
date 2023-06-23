let p1  = async () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(20)
        },2000)
    })
}

let p2  = async () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(10)
        },1000)
    })
}

let p3  = async () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(30)
        },3000)
    })
}

let run = async () => {
    let a1 = p1();
    let a2 = p2();
    let a3 = p3();
    // console.log(a1, a2, a3);
     let a1a2a3 = await Promise.all([a1,a2,a3])
    console.log(a1a2a3)
}

run()
