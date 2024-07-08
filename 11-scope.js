// scope


let a = 100;   // local scope
// const b = 20;
// var c = 30;

var c = 300;    //local scope

if (true) {   // in the { } are block scope
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log('inner if:', a);
    function addNum(params) {   // add another scope
        
    };
};


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// };

// console.log(a);
// console.log(b);
// console.log(c);

function one(){     // function one cant access the function tow value
    const userName = "marsad";
    function two(){     // function two access the function 1 value
        const website = "youtube";
        console.log(userName);
    };
    // console.log(website); outside the function 
    two();
};
// one();   // execute function one


if(true){
const userName = 'marsad';
    if (userName === 'marsad') {
        const website = " youtube";
        // console.log(userName + website);
    };
    // console.log(website);   // outside the if cannot access
};
// console.log(userName);      // outside the if cannot access

// console.log(addOne(5));    //  execute function not error
function addOne(num) {         // only declare function
    return num + 1;
};
// addOne(5);


// addTwo(5);      // not execute error come
const addTwo = function (num){   // some time ask expression & function declare and hold in variable
    return num + 2;
};
console.log(addTwo(5));
