// falsy values 

 // false
    // 0 , -0
    // ""
    // undefined
    // null
    // NaN
    // BigInt 0n  =>  // bigInt zero n

// truthy values 
// "0"
    // " "
    // "false"
    // function(){}
    // []
    // {}
    // false == 0 
    // false == ""
    // 0 == ""

    // ?? => nullish coalescing operator (??): null or undefined
// ?. => optional chaining operator (?.)

    // ? => ternary operator (? :)


const userEmail = "marsad@gamil.com";  // condition is true
// const userEmail = "";  // condition is false
// const userEmail = [];  // condition is true

// if (userEmail) {
//     console.log("got user Email");
// } else {
//     console.log('dont have user email');
// };

// const userEmail = [];  // condition is false
// if (userEmail.length === 0) {
//     console.log("array is empty");
// };

// const emptyObj = {};
// if (Object.keys(emptyObj).length === 0) {
//     console.log("object is empty");
// };

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;


// console.log(val1);

const iceTeaPrice = 100;
// iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");






