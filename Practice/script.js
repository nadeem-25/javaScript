//  const parent = () => {
//     console.log("Parent functionis called");

//      const bottle = "jaypee 1-litre";

//     const child = () => {
//          console.log("child function called")
//         console.log("bottle:", bottle);
//     }
//      return child;
//  }

//  const res = parent();
//  console.log("res:", res);
//  res();

//  const arr = [10,20,300,400,50];

//  const x = arr.splice(2,2,30,40);

//  console.log("x" ,x);
//  console.log("arr", arr);

//  const z = arr.splice(1,2);
//  console.log("z" ,z);
//  console.log("arr", arr);

// const arr =[10, 20, 30, 40, 50];

// const x = arr.reverse();

//   console.log("arr", arr);

// const arr =[10, 20, 30, 40, 50];

// const x = arr.indexOf(50); //returns index of element if element is present else -1
// console.log("x:" ,x);

// const z =arr.includes(45); //returns true and false
// console.log("z:" ,z);

//! for each loop
// const arr = [1, 2, 3, 4, 5];
// const output = [];

// const returnValue = arr.forEach((element, index, array) => {
//     output.push(element * 100)

// })
// console.log("output", output);
// console.log("arr", arr);
// console.log("returnValue", returnValue) //forEach foes not return any value
// console.log("==================================================")

// const output2 = [];
// const returnValue2 = arr.map((element, index, array) => {
//     output2.push(element * 200)
//     return element

// })
// console.log("output2", output2);
// console.log("arr", arr);
// console.log("returnValue2", returnValue2)

// ! Map

// const arr =[1, 2, 3, 4, 5];

// const output = arr.map((element)=>  Math.pow(element,3))
// const output2 = arr.map((element,index)=>  element + index)

// console.log("output", output);
// console.log("output2", output2)

// const arr2 =[10, 20, 30, 40, 50];

// const x = arr2.map(element=>{
//     if(element>30){
//         return element;
//     }
// })
// console.log("x", x);

// const arr3 =[10, 20, 30, 40, 50];

// const z = arr2.filter(element=>{
//     if(element>30){
//         return true;
//     }
// }).map(element => element * 10);

// console.log("z", z);
//! Reduce
// const arr = [10, 20, 30, 40, 50];

// const result = arr.reduce((acc, Element, index, array) => {

//     acc = acc + Element;
//     return acc;
// }, 0)
// console.log("result:", result);

