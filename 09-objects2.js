//  Objects
//  explain how to declare object with constructor (sigleten)


// const tinderUser = new Object();

const tinderUser = {};

tinderUser.name = "John";
tinderUser.age = 25;

tinderUser.gender = "male";
tinderUser.isSingle = true;

// console.log(tinderUser);

const regularUser = {
    email: "some2gmail.com",
    fullName: {
        userFullName: {
            firstName: "marsad",
            lastName: "usman",
        },
    },
};

// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.fullName?.userFullName.firstName);

const object1 = {1:"a", 2: "b"};
const object2 = {3:"c", 4: "d"};

// const object3 = {object1,object2};

// const object3 = Object.assign(object1,object2); 
// const object3 = Object.assign({},object1,object2); better with {}, empty curly brasses is targer and object are source
const object3 = {...object1, ...object2};

// console.log(object3);

const user = [
    {
        id:1,
        name: "marsad",
        email:"some1@google.com"
    },
    {
        id:2,
        name: "marsad",
        email:"some2@google.com"
    },
    {
        id:3,
        name: "marsad",
        email:"some3@google.com"
    },
];

// console.log(user[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('age')); // check property preset in object

const course = {
    courseName : "js",
    price: 999,
    courseInstructor:'marsad'
};
// console.log(course.courseName);

const {courseName, price, courseInstructor :instructor} = course;
// console.log(courseName);
// console.log(instructor);
// const {courseName:name, price:price1, courseInstructor:instructor1} = course; // =>  : destructur
// console.log(name);
// console.log(price1);
// console.log(instructor1);

// {
//     name:'marsad',
//     courseName: "js",
//     price:"free"
// };
// {                   // json data correct sententax
//     'name':'marsad',
//     'courseName': "js",
//     'price':"free",
// };

[
    {},
    {},
    {},
]

//  https://randomuser.me/        api data

//   https://jsonformatter.org/    json formatter