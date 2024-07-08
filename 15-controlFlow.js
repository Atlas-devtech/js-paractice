// if 

// camparison operator  =>  < , > , <= , >= , == , != , === , !, !== => anti strick check

// ! => not operator
// && => and operator
// || => or operator
// ?? => nullish coalescing operator (??): null or undefined CHECK only two key words
// ?. => optional chaining operator (?.)

 // ? => ternary operator (? :)

//     if (true) {  // if value is true the execute code
//     console.log('executed');
// }else{
//     console.log('not executed');
// };

// let temperature = 50;
//     if (temperature === 40) {  // if value is true the execute code
//     console.log('executed');
// }else{
//     console.log('not executed');
// };

// let score = 50;
//     if (score > 40) { 
//         const power = "fly";
//     console.log(`user power: ${power}`);
// }else{
//     console.log('not executed');
// };
// console.log(`user power: ${power}`); // not get power out side scope
 
// let balance = 1000;
// if (balance > 500) console.log('test1'),  // without scope {}, with (,) write multiple lines
// console.log("test2");

// let balance = 1000;

// if (balance < 500) {
//     console.log("more then")
// }else if(balance < 750){
//     console.log("more then")
// }else if(balance < 900){
//     console.log("more then")
// }else{
//     console.log("less then 1100")
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
const guestUser = true;

// if (userLoggedIn && debitCard && 2==3){  // & => and statement check both statement are true
//     console.log("allow to buy course");
// };

if (userLoggedIn || loggedInFromGoogle || loggedInFromEmail || guestUser) {    // || => or statement check one statement is true code is run
    console.log("allow to buy course");
};