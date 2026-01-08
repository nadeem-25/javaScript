// const user = { 
//     username: "nadeem",
//     age: 24,
//     city: "Rohini"
// }

// function pow (state,country){
//     console.log("this in regular function:",this)
//     console.log("state:",state)
//     console.log("country:",country)
// }
// pow.call(user,"delhi","india")

const user = {
    userName: "nadeem",
    age: 24,
    city: "delhi",
    outer: function outer() {
        console.log("this is outer:", this)
        function inner() {
            console.log("this is inner:", this)
        }
        inner.call(this)
    }
}
user.outer();

