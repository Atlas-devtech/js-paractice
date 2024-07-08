// functions 

// console.log("m");
// console.log("a");
// console.log("r");
// console.log("s");
// console.log("a");
// console.log("d");
// 

function sayMyName() {
    console.log("m");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("a");
    console.log("d");
};

// sayMyName();

// function addTwoNumbers(number1,number2) {  //  =>  number1 & number2 as a parameter
//     console.log(number1 + number2);
// };

function addTwoNumbers(number1, number2) {  //  =>  number1 & number2 as a parameter
    // console.log(number1 + number2);
    // let result = number1 + number2;  // method 1 & result declare in addTwoNumber
    // return result;
    // console.log("marsad")  // after return value d'sent run
    return number1 + number2;    // method 2
};

const result = addTwoNumbers(1, 2);    //  =>  1 & 2 as a argument & result declare outside function

// console.log("Result :", result);

function loginUserMessage(userName = 'sam') { // if user enter the value then write it else value is sam
    if (userName === undefined) {
        console.log("plz enter userName");
        return;
    }
    return `${userName} just logged in`;


    // if (userName === undefined) {
    //     console.log("plz enter userName");
    // }else{
    //     return `${userName} just logged in`;
    // };
};
// loginUserMessage("marsad");  // not recevied any output
// console.log(loginUserMessage("marsad"));
// console.log(loginUserMessage(""));   // execute
// console.log(loginUserMessage());   // execute value is undefine
// console.log(loginUserMessage());   



function calculateCartPrice(val1, val2, ...num1) {  // rest operator => ...num1
    return num1;
};
// console.log(calculateCartPrice(200 , 300 ,400, 500 ));

// object and function 

const user = {
    userName: "marsad",
    age: 24,
};



function handleObject(anyObject) {
    console.log(`userName is ${anyObject.userName} and age is ${anyObject.age}`);
};

// handleObject(user);
// handleObject({
//     userName: "sam",
//     age:23,
// });

// function handleObject(anyObject) {
//     return `userName is ${anyObject.userName} and age is ${anyObject.age}`;

// };

// console.log(handleObject(user));

// array and function 

const newArray = [200, 300 , 400 ,500 ,600];
function returnSecondValue (getArray) {
    console.log(`array is ${getArray[2]}`);
};
// returnSecondValue(newArray);

function returnSecondValue (getArray) {
return getArray[2];
};
// console.log(returnSecondValue(newArray));
// console.log(returnSecondValue([200,300,500,600,800]));
