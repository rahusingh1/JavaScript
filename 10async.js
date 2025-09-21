/* Single threaded */
// alert("Starting");
// for(i=0; i<=1000000000; i++){}
// alert("Loop Finished");
// document.getElementById("para").innerText="Finished";

/* Callback function */
function greet(name, callback){
    console.log(`Hello! ${name}`);
    callback();
}

function goodbye(){
    console.log("Goodbye my friend");
}

greet('Rahul', goodbye);

/* setTimeout/setInterval */

setTimeout(() => {
    console.log("this is a set timeout function run after 2 sec")
}, 2000)

for(let i =0; i<=1000000; i++) {}

console.log("this run first")

// setInterval
let counter = 0;
const intervalId = setInterval(()=>{
    counter++;
    console.log("Counter: "+counter);
    if(counter === 5){
        clearInterval(intervalId);
        console.log("Interval stopper");
    }

}, 1000)

// Issue: Callback hell - function inside a function inside a function ....... not able to read if so many functions.
// solution: Promises
function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const data = "Promise resolved"
            if(data){
                resolve(data);
            }
            else{
                reject("Failed to resolve")
            }

        }, 2000)
        
    })
}

fetchData()
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error);
    })




function findData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            byte = 5
            if(byte<0){
                resolve(byte)
            }
            else{
                reject("rejected");
            }
        }, 1000)
    })
}

findData()
    .then((byte)=>{
        console.log(byte);
    })
    .catch((err)=>{
        console.log(err);
    })