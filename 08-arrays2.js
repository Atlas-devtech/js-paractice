// Array 


const myName = ['marsad'];
const myName2 = ['javaid','khalil'];

// myName.push(myName2);  

// console.log(myName);
// console.log(myName[1][0]);

// let myArray = myName.concat(myName2);

// console.log(myArray);

// let allName = [...myName, ...myName2];
// console.log(allName);

let anotherArrays = [1,2,3,4,[5,6,7],8,[9,1,[2,3]]];

// console.log(anotherArrays[4][2]);

// console.log(anotherArrays.flat(1)); // number of debth array

// console.log(anotherArrays.flat(2));

// console.log(anotherArrays.flat(Infinity));


// console.log(anotherArrays.flatMap(x => x));

// console.log(anotherArrays.flatMap(x => x * 2));


// console.log(anotherArrays.flatMap(x => x * 2).flat(Infinity));  

// console.log(Array.isArray("Marsad"));   // check is it an array
// console.log(Array.from("Marsad"));   // convert into array array
// console.log(Array.from({name: "marsad"}));  

let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score,score2,score3));
