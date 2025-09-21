// Objects are the collection of name value pair.
// Named values are called properties. 
// ways to create new object 
var person = new Object();
var person1 = {}
var person2 = {name:'Abc', age: 28, gender:'M'}

console.log(person2.name); // access object properties using dot operator
console.log(person2['age']);  // access using square bracket
console.log(person2);

delete person2.gender  // delete key value pair

person2.city = 'Agra';  // add new key value pair

console.log(person2);

// traverse in the objects
for(let x in person2){
    console.log(x, person2[x])
}

// Access all the key and values in the objects.
let objkeys = Object.keys(person2);
let objval = Object.values(person2)

console.log('keys: ' + objkeys);
console.log('values: ' + objval);

// user can change the properties in Object.seal() but can't add or remove.
// user not allowed to add remove and change in object.freeze() method.
console.log(person2);
Object.seal(person2); // only change
delete person2.age;
person2.country = 'india'
person2.city = 'mainpuri'

console.log(person2);

Object.freeze(person2);  // No change - it's like const for objects.
person2.city = 'Delhi'
person2.country = 'india'

console.log(person2);
