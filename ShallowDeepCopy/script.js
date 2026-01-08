const jack = {
    cake:"Strawberry Cake",
    bike:"davidputra"
}

const oggy =structuredClone(jack) //this makes shallow copy
//! if we pass the address it will make deep copy

oggy.bike = "Pink Scooty"

console.log("Jack", jack)
console.log("Oggy", oggy)
console.log("Oggy", oggy)
console.log("Oggy", oggy)