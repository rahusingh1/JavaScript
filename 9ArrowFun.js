// regular function
function test(x) {
    return x * 2;
}

let test1 = function() {
    return z * 5;
}

// arrow function after ES6+  --> Mostly used in callbacks.
let y;
(y) => { 
    return y * 4; 
}

let helloA = () => {
    return "Hello Arrow Function"
}

let helloReturn = () => "Hello Arrow function with return";  // used this if there is single statement


let a = test(5);
console.log(a);

console.log(helloA())

console.log(helloReturn())