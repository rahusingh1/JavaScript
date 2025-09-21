// arrays are of type objects in java script.
// arrays are copied by reference so address remains same, 
// if you change in one variable then it also changed in previous one.

let arr = [1, "two", {three: 3}];
console.log(arr)
console.log(typeof arr)

let y = arr;
console.log(y);

arr.push("four")

console.log(arr, y)

y.push(5);

console.log(arr)

console.log(y[1])

console.log(arr[10])

console.log(arr.length)

arr.forEach(i => {
    console.log(i)
})

for(i in y){
    console.log(i, y[i]);
}

arr.pop();  // remove the last element from array

arr.shift();  // remove the first element from the array

arr.unshift(6);  // add the element at first index in the array

console.log(arr);