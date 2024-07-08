// Reduce Method

const myNums = [1, 2, 3];

// with function  

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc ${acc} and currval: ${currval}`);
//     return acc + currval;
// },0);

// console.log(myTotal);

// with arrow function

// const myTotal = myNums.reduce((acc, currval) => {
//     console.log(`acc ${acc} and currval: ${currval}`);
//     return acc + currval;
// },0);
// console.log(myTotal);


// const myTotal = myNums.reduce((acc, currval) => (console.log(`acc ${acc} and currval: ${currval}`),(acc + currval)),0);

// console.log(myTotal);

const addToCard = [
    { name: 'js', age: 20 },
    { name: 'java', age: 20 },
    { name: 'py', age: 20 },
];

const totalAge = addToCard.reduce((acc, items) => {
    return acc + items.age
},0);
console.log(totalAge);
