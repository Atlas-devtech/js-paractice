const accountId = 123455;
let accountEmail = 'marsadd@google.com';
var accountPassword = "123455";
accountCity = "faisalabad";
let accountState;

// accountId = 2;  not allowed

accountEmail = 'ahmad@google.com';
accountPassword = "1234566";
accountCity = "lahore";

// console.log(accountId);

/* prefer not to use to declare variable with var keyword in javascript because of issue in block scope and functional scope */

// console.log(accountEmail);

// console.log(accountPassword);

// console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);