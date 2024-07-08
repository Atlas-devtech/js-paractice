// (f0r of)  & (for in) loop

// ["", "", ""];
// [{}, {}, {}];


// for (const iterator of object) {

// };

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(`num ${num}`);
};

const greeting = '13dfv';
for (const greet of greeting) {
    // console.log(`num ${greet}`);
};


// maps  => value is unique and not duplicate and in order

const map = new Map();
map.set('in', 'india');
map.set('usa', 'united state if america');
map.set('fr', 'france');
map.set('in', 'india');

// console.log(map);
for (const key of map) {   // give all values in array
    // console.log(key);
};
for (const [key, value] of map) {   // key and value separate
    // console.log(key , ':-' , value);
};

const myObj = {
    name: 'John',
    age: 23,
    city: 'delhi'
};

for (const [key, value] of Object.entries(myObj)) { //  true
    // console.log(key, value);
};

// for (const [key, value] of myObj) {  // error
//     // console.log(key, value);
// };


// For in loop 


// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     };
// };

const myObj2 = {
    name: 'John',
    age: 23,
    city: 'delhi'
};

for (const key in myObj2) {
    //    console.log(key);    // get get
    // console.log(myObj2[key]);   // get object value
};

const prog = [ 'js', 'cpp', 'py','java'];
for (const key in prog) {
    // console.log(key); // get key
    // console.log(prog[key]); // get value
};

// const map2 = new Map();  // map is not iterable so do not apply loop
// map.set('in', 'india');
// map.set('usa', 'united state if america');
// map.set('fr', 'france');
// map.set('in', 'india');

// for (const key in map2) {
//     console.log(key);
// };


// For each

// array.forEach(element => {
    
// });

const coding = ['js','cpp','java'];

coding.forEach(function (item) {
    // console.log(item);
});

coding.forEach( (item) => {
    // console.log(item);
});

// coding.forEach(item => {
//     console.log(item);
// });

function printMe(item){
    console.log(item);
};

// coding.forEach(printMe);    // write reference not execute here with ()

coding.forEach((item,index,Array) =>{
    // console.log(item,index,Array);
    // console.log(item);
    // console.log(index);
    // console.log(Array);
});


const myCoding = [
    {
        name: 'js',
        year: 1995,
    },
    {
        name: 'js',
        year: 1995,
    },
    {
        name: 'js',
        year: 1995,
    },
];

myCoding.forEach((item) => {
    // console.log(item.name);
});
