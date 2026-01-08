//! object destructuring

const user = {
    fullName: "Nadeem",
    email : "nadeem123",
    age: 24

}
const {fullName, email, age} = user; 
console.log("fullname:",fullName)
console.log("email:",email)
console.log("age:", age)

//! Array destructuring

const skills = ["HTML", "CSS", "JAVASCRIPT", "REACT"]
const [a,b,c,d] = skills
console.log(a);
console.log(b);
console.log(c);
console.log(d);