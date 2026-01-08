
//! object.keys for all keys 
// const obj1={
//     fullName:"Chombu Singh",
//     email:"nadeem123@gmail.com",
//     password:"nadeem123",       
//     age:24,
//     gender:'Male'
// }
// const arr = Object.keys(obj1);
//  console.log("arr",arr);
//! object.values for all value
// const obj1={
//     fullName:"Chombu Singh",
//     email:"nadeem123@gmail.com",
//     password:"nadeem123",       
//     age:24,
//     gender:'Male'
// }
// const arr = Object.values(obj1);
//  console.log("arr",arr);
//! object.entries for full key pair value

// const obj1={
//     fullName:"Chombu Singh",
//     email:"nadeem123@gmail.com",
//     password:"nadeem123",       
//     age:24,
//     gender:'Male'
// }
// const arr = Object.entries(obj1);
// const newObject = Object.fromEntries(arr) //from entries will make it again back to object from an array
// console.log("arr",arr);
// console.log("newObject",newObject);

//!Object.Assign(target,source1,source2,source3,......,sourcen)

const user = {
    fullName: "Nadeem",
    age: 24,
    city: "Noida"

}

const company = {
    companyName: "xyz infotech",
    address: "B-04, Sector 17"
}
const hiring = {
    designation: "FullStack Developer",
    package: "4LPA",
    city: "Delhi"

}
const employee = Object.assign({}, user, company, hiring)
console.log("employee", employee)

