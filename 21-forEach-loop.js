const coding = ['javascript', 'ruby', 'java', 'python', 'cpp'];

coding.forEach((item) =>{
    console.log(item);
});

const values = coding.forEach((item) => {
    // console.log(item);
    // without return values = undefine 
    return item;   // not return value in forEach
});

// console.log(values);   // without return values = undefine 

// const values = coding.forEach((item) =>{
//     console.log(item);
// });


// Filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNums.filter((num) => {
//     num > 5   // not write return keyword because output is empty array []
// });
// console.log(newNum);

// const newNum = myNums.filter((num) => {
//   return  num > 5   
// });
// console.log(newNum);


// const newNum = myNums.filter((num) => num > 5);
// console.log(newNum);

const newNum = [];
myNums.forEach((num) => {
    if (num > 4) {
        newNum.push(num)
    }
});
// console.log(newNum);
