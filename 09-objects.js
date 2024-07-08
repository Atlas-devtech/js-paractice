// Objects
// objects declare two method 
// 1. constructor  (singleton) 
// 2. prototype (literals)


// constructor 
// Object.create


// object literal
const mySym = Symbol("key1");

const jsUser ={
    name : "marsad",
   'full-name': 'Marsad usman',
   'full name': 'Marsad usman',
   [mySym]:'mykey1',   //corect method to declare symbol
   mySym:'mykey1',
    age : 24,
    location : "faisalabad",
    email : "marsad@google.com",
    isLoggedIn : false,
    lastLoggedInDays: ["monday","saturday"]
};
// console.log(jsUser.name);
// console.log(jsUser["email"]);

// console.log(jsUser["full-name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser.full name);   // not allow
// console.log(jsUser.'full name');   // not allow

// console.log(jsUser.mySym);
// console.log(typeof jsUser.mySym);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// jsUser.email = 'marsad@chatgbt.com';
// Object.freeze(jsUser);
// jsUser.email = 'marsad@microsoft.com';
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("hello js user");
};

jsUser.greetingTwo = function() {
    console.log(`hello js user, ${this.name}`);
};

// console.log(jsUser.greeting);

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


