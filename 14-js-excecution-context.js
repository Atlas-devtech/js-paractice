// javascript execution context

//    1 => Global execution context  (global enviroment)
//    2 => function execution context
//    3 => Eval execution context  => property of a global object


// javascript code run two steps 
//  1 => memory creation phase => memory allocate
//  2 => execution phase       => 



    let val1 = 10;  // first step => memory phase val1 = undefine ..// in the execution phase assign values val1 = 10
    let val2 = 20;  // first step => memory phase val1 = undefine
    function addNum(num1, num2) {  // first step => addNum = function defination
        let total = num1 + num2; 
        return total;
    };
    let result = console.log(addNum(val1, val2));
    let result2 = console.log(addNum(10,30));