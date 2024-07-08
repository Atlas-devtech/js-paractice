// js  and classes

// Oop 


// object 
// => collections of properties and method
// => toLowerCase 

// why use oop 


// parts of oop
// object literal 

// constructor function
// prototype
// classes
// instances(new,this)

// 4 pillars
// abstraction     hide/chpa lata ha => fetch() 
// Encapsulation    rape  => 
// inheritance
// polymorphism       many task do => 


//  object literal
const user = {
    userName : "marsad",
    loggedInCount: 8,
    signedIn:true,
    getUserDetails: function () {
        // console.log("got user details from database")
        // console.log(`userName= ${userName}`)
        console.log(this)
    }
}
// const user2 = {
//     userName : "marsad",
//     loggedInCount: 8,
//     signedIn:true,
//     getUserDetails: function () {
//         // console.log("got user details from database")
//         // console.log(`userName= ${userName}`)
//         console.log(this)
//     }
// }
// console.log(user.userName)
// console.log(user.getUserDetails())
// console.log(this)

// const promiseOne = new Promise()
// const date  = new Date()    // new is a constructor func

function User(userName, loginCount,isLoggedIn){
    this.userName = userName
    this.loginCount= loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`clg ${this.userName}`)
    }

    return this
}

// const userOne = User("marsad" , 12,true)
// const userTwo = User("usman" , 11,false)

const userOne =new User("marsad" , 12,true)
const userTwo = new User("usman" , 11,false)
console.log(userOne.constructor)
// console.log(userTwo)
