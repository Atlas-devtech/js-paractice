// dates

// let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString);
// console.log(typeof myDate);

// let createMyDate = new Date(2024,2,23);
// let createMyDate = new Date('2024-01-23');
// let createMyDate = new Date('01-23-2024');
// let createMyDate = new Date(2024,2,23, 5, 3);
// let createMyDate = new Date(2024,2,23);

// console.log(createMyDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(createMyDate.getTime());

// console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getTime);
// console.log(newDate.getFullYear);
// console.log(newDate.getMonth + 1);

let nowDate =  newDate.toLocaleString('default',{
    // month: 'long',
    // day: 'numeric',
    // year: 'numeric',
    // hour: 'numeric',
    // minute: 'numeric',
    // second: 'numeric',
    // timeZoneName: 'short'
    weekday: 'long'
    // timeZone: 'Asia/Kolkata'

});
console.log(nowDate);