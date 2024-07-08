// for loop 

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// };

for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element == 5){
        // console.log("5 is best");
    }
    // console.log(element);
};
// console.log(element);  // not accessible out side the scope

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value ${i}`);
//     for (let j = 0; j <=10 ; j++) {
//         // console.log(`inner loop value ${j} and innner loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
        
//     };    
// };

// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop value ${i}`);
//     for (let j = 1; j <=10 ; j++) {
//    //    console.log(`inner loop value ${j} and innner loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
        
//     };    
// };

let array = ['marsad','usman' , 'abdul hameed']
// console.log(array.length);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
};


//  break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("detected 5");
//         break; // out side the scope
//     };
//     const element = index;
//     console.log(element);
// };

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("detected 5");
        continue;    // one condtion is not run but execute the all code
    };
    const element = index;
    console.log(element);
};