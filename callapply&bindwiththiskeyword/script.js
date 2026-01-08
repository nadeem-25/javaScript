/**
 * 1. this in GEC = window
 * 2. this in Named function = window
 * 3. this in arraow function = window 
 * 4. this in object inside named method= object
 * 5. this in object inside arrow method = window
 */

//! 4. this in object inside named method

// const obj = {
//     fullName : "nadeem",
//     age : 24,
//     city : "delhi",
//     greet : function greet(){
//         console.log("this is named method:",this)
//     }
// }
// obj.greet();

//! 5. this in arrow method

// const obj = {
//     fullName : "nadeem",
//     age : 24,
//     city : "delhi",
//     greet : () => {
//         console.log("this is arrow method:",this)
//     }
// }
// obj.greet();

//! 6. this in object inside inside nested methods

const user = {
    userName: "nadeem",
    age: 24,
    city: "delhi",
    outer: function outer() {
        console.log("this is outer:", this)
        const inner = () => {
            console.log("this is inner:", this)
        }
        inner()
    }
}
user.outer();

