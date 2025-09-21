for(var i=11; i<15; i++){
    console.log(i);
}
console.log("for loop end")

while(++i  <= 20){
    console.log(i);
}
console.log("while loop end");

// object is the collection of key-value pair just like dictionary in other lang.
console.log("for-in loop");
let obj = {a: 1, b: 2, c: 3};
for(x in obj){
    console.log(x, obj[x])
}

console.log("for-of loop");
let arr = ["apple", "Mango", "Banana", "orange"];
for(j of arr){
    console.log(j);
}

console.log("forEach loop");
arr.forEach(j =>{
    console.log(j);
})

console.log("for-in in array");
for(x in arr){
    console.log(x, arr[x]);
}


