fetch("https://something.com").then().catch().finally();
//  then() response in then()
//   catch() error in catch()
//   finally()  is run every condition 

const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // Db call, cryptogrphy, network
    setTimeout(() => {
        console.log("async task is completed");
    }, 1000);
    
    resolve()
});
// when dont call the resolve then then cant run then() 
promiseOne.then(function(){
    console.log("promise consumed");
});
// when promise cant store in any variable the then() method directly used 
 
// new promise(function(resolve,reject){
// setTimeout(() => {
//     console.log("async task 2")
// }, 1000);
// resolve()
// }).then(function(){
//     console.log("async 2 resolve")
// });

const promiseThree = new Promise(function(resolve,reject){
setTimeout(() => {
    resolve({username:"marsad",email:"example@gmail.com"})
}, 1000);
});

promiseThree.then(function(user){
    console.log(user,"user")
});

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() =>{
        error = true 
        // error = false 
        if (!error) {
            resolve({username:"marsad", password:"123"})
        }else{
            reject("error something went wrong")
        }
    },1000)
});

// const username = promiseFour.then((user) => { // cant get data this method
// console.log(user)
// return user.username
// })
// console.log(username)

promiseFour.then((user) => { 
console.log(user)
return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(err){
    console.log(err)
}).finally(()=>{
    console.log("the promise is either resolve or rejected")
});

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        error = true 
        // error = false 
        if (!error) {
            resolve({username:"js", password:"123"})
        }else{
            reject("error something went wrong")
        }
    },1000)
});

// promiseFive.then
async function consumePromiseFive(){
    try {
        const response  = await promiseFive
    // console.log(response)
    } catch (error) {
        console.log(error)
    }
 };
 consumePromiseFive()

//  async function getAllUsers(){
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     // console.log(response)
//     const data = await response.json() // await is necessary because this process is time consumming
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
//  }
// console.log( getAllUsers())

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})
