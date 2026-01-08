// const user = {
//     firstName : "Rinku",
//     lastName : "singh",
//     email : "rinkusingh@gmail.com",
//     password : "rinku123",
//     age : 24,
//     isWorking : true,
//     skills : ["Java", "React"]
// }
// const {email,...userCollection}=user; //!rest (before = sign)

// console.log("email", email);
// console.log("userCollection", userCollection)

// const sum = (...items) => {
//     console.log("items", items)
//     const total = items.reduce((acc, Element)=> acc + Element, 0);
//     return total;
// }
// const x = sum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
// console.log("x: ", x)

//! spread

const jack = {
    cake : "Chocolate Cake",
    bike : "David Putra"
}

const oggy = { ...jack};

oggy.bike = "Pulsar"

console.log("oggy :", oggy)
console.log("jack :",jack)