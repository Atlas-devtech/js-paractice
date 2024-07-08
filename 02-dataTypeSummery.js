// learn browser events(js web events)

// data type are divided into two type on the basis 

// 1 => how to store data in memory

// 2 => how to excess data

// 1 => primitive  => 7

// 1 => string
const name = 'marsad';
// 2 => number
const age = 24;
// 3 => boolean
const isLoggedIn = false;
// 4 => undefined
let userEmail;
let userEmail2 = undefined;
// 5 => null
let temperature = null;
// 6 => symbol
let id = Symbol("123");
let anotherId = Symbol("123");
// console.log(id);
// console.log(anotherId);
console.log(id === anotherId);
// 7 => BigInt
let bigNumber = 9365446946464494974n;


// 2 => non-primitive => (reference type)

// 1 => Array
const names = ["ahmad", "usman", "aslam" ,'javad'];
// 2 => object
const myObject = {
    name:"marsad",
    age:24,
};
// 3 => function
const myFunction = function(){
    console.log("myFunction")
};
