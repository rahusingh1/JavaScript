// Call function inside another function

function inner(){
    return "Hello World!";
}

function outer(func){
    console.log(func());
}

outer(inner);
console.log(outer);