const msg = 'hello!'

console.log(msg);

console.log('rahul');

var browser = 'chrome'; // this variable scope is globale because it is outside the function.
var browser = "firefox"; //using var keyword same variable can be defined and initialise many times in js.
console.log(browser);

function calling() {
    var top = "HI JS";
    pop = 'hello js';  // without var keyword now it has global scope and can cause memory leakage.
}

// console.log(top); // scope of top var is local inside the function only

// let, const, var 
// let and const both have only block scope within curly braces only { }

function blockScope() {
    if(true){
        let test1 = 1;
        const test2 = 2;
        var test3 = 3;
        test3 = 4;
        console.log(test1, test2, test3);
    }
    // console.log(test1, test2, test3); // here test1 and test2 give error because out of scope(out of { }).
}

blockScope();

// let value can be changed but const value cannot be changed/reassign.

