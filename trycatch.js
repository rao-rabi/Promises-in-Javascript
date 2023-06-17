//try and catch method to handle error

setTimeout(()=>{
    console.log("Hello 1");
},1000)

// console.log(khan); // shows error

// try{
//     setTimeout(()=>{
//         console.log(hy);
//     },3000)                    //This also shows error coz we cant catch sheduled code error
// } catch(error){
//     console.log("i am error 2");
// }

setTimeout(()=>{
    try {
        console.log(hy);
    } catch (error) {                   // we can handle above written code in this way.
        console.log("i am error 2");
    }
})
try{
    console.log(khan);
} catch(error){
    console.log("i am error");
}

setTimeout(()=>{
    console.log("Hello 2");
},2000)

setTimeout(()=>{
    console.log("Hello 3");
},3000)

setTimeout(()=>{
    console.log("Hello 4");
},4000)

setTimeout(()=>{
    console.log("Hello 5");
},5000)