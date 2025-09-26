// 11await.js:5 Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules
// async function testFunc(){
//     return "Hello World!"
// }
// try{
// let result1 = await testFunc();
// console.log(result1);
// }
// catch(error){
//     console.log(error)
// }

// Solution of above issue - put the await inside an async function
// async function testFunc(){
//     return "Hello from testFunc."
//     // throw new Error("Error occured in test function");
// }

// async function demoAwait(){
// try{
// let result1 = await testFunc();
// console.log("Response from testFunc: "+ result1);
// }
// catch(error){
//     console.log("Error from test function: " + error)
// }
// }

// demoAwait();


/* Async await example using fetch API */
async function fetchExample(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    
        if(response.ok){
            const data = await response.json();
            console.log("Success Response from API");
            console.log(data)
        }
        else{
            console.log("Error response from API");
            throw new Error("Failed to fetch user data: " +response.status);
        }
    }
    catch(error3){
        console.log("catch block called");
        console.log(error3);
    }
}

fetchExample();

