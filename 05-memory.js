// memory are two types 
// 1 => stack memory (primitive) give copy 
// 2 => heap memory (non-primitive) give reference orignal value

//  stack memory example

// let myName = 'marsad';
// let anotherName = myName;

// console.log(anotherName);

// anotherName = "marsadUsman";

// console.log(myName);
// console.log(anotherName);

// heap memory example

let userOne ={
    email: 'user@google.com',
    id:'user@ybl'
};
let userTwo = userOne;

console.log(userOne);
console.log(userTwo);

userTwo.email = 'user@yahoo.com';
console.log(userOne);
console.log(userTwo);
