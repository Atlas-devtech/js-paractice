// Switch statement

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// };

// const month = 5;

// switch (month) {
//     case 1:
//         console.log("january");
//         break;  // break keyword control flow if break not write then execute all code except default value
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;
//     default:
//         console.log('default case match');
//         break;
// };

const month = "march"; // also compare the string

switch (month) {
    case 'jan':
        console.log("january");
        break;  // break keyword control flow if break not write then execute all code except default value
    case 'feb':
        console.log("feb");
        break;
    case 'march':
        console.log("march");
        break;
    case 'april':
        console.log("april");
        break;
    default:
        console.log('default case match');
        break;
}