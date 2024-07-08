// discus => (this) and arrow function

const user = {
    userName: 'John',
    age: 25,
    welcomeMessage: function () {
        console.log(`${this.userName} , welcome to website`)
        // console.log(this);
    },
};

// user.welcomeMessage();
// user.userName = "marsad";
// user.age = 24;
// user.welcomeMessage();

// console.log(this);  // outside the object this output is => {} but in the browser this acces the `globle object is window 

// function thisOne() {
// let userName = 'marsad';
// console.log(this);       // get value
// console.log(this.userName);  // not work inside the function value is undefine
// };
// thisOne();


// const thisTwo = function() {
//     let userName = 'marsad';
//      console.log(this);       // get value
//     console.log(this.userName);  // not work inside the function value is undefine
// };
// thisTwo();

const thisThree =  () => {    // arrow function // remove function keyword and write => after parentheses
    let userName = 'marsad';
    console.log(this);       // get empty {} in arrow function
    // console.log(this.userName);  // not work inside the function value is undefine
};
// thisThree();


// arrow function  () =>{}

// explicit return   arrow function

const addTwo = (num1, num2) => {
    return  num1 + num2;
};
// console.log(addTwo(3,4));

// implicit RETURN arrow function

const addThree = (num1, num2) => num1 + num2;
// console.log(addThree(3,4));

const addFour = (num1, num2) => (num1 + num2);  // if use () then not use return else use { } write return keyword
// console.log(addFour(3,4));

const addFive = (num1, num2) => {userName: "marsad"};   // object return not allow
// console.log(addFive(3,4));

const addSix = (num1, num2) => ({userName: "marsad"});   // object return wrape in ()
// console.log(addSix(3,4));

// myArray.forEach(function ()  { });         // correct
// myArray.forEach( () =>    {});
// array.forEach(element =>  {});




