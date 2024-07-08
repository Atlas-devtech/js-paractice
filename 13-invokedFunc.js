// immediately invoked function expression (iiFE)

function dbConnect() {
    console.log(`db connected`);
};
// dbConnect();

// iiFE
(function dbConnect() {
    // console.log(`db connected`);
})();
// iiFE
(function dbConnect() {   // named iife
    // console.log(`db connected 2`);
}());   // if semicolon not use then error after iife function

(() => {     // arrow function  // unnamed iife
    // console.log(`db connected 3`);
})();

// value pass

((name) => {     // arrow function
    console.log(`db connected 4 ${name}`);
})('marsad');