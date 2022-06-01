//Task 1 
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];


let newMix = mix.map(function (a) {
    return !parseInt(a) ? a : ""
}).reduce(function (acc, index) {
    return `${acc}${index}`
})


console.log(newMix)

console.log(`********************`)


//Task 2 
console.log(`Task 2 `)
let myString = "EElllzzzzzzzeroo";



let newString = myString.split("").filter(function (a, index) {
    return myString.indexOf(a) === index ? a : ""
}).join("")

console.log(newString);
console.log(`********************`)


//Task 3 
console.log(`Task 3 `)
let myArray = ["E", "l", "z", ["e", "r"], "o"];


let NewArray = myArray.reduce(function (acc, curr) {
    return acc.concat(curr), [].join("");
})

console.log(NewArray)
console.log(`********************`)


//Task 4 
console.log(`Task 4 `)

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let numbers = numsAndStrings.filter(function (a) {
    return parseInt(a)
}).map(function (a) {
    return -a
})

console.log(numbers)


console.log(`********************`)


//Task 5 
console.log(`Task 5 `)
let nums = [2, 12, 11, 5, 10, 1, 99];

let newNums = nums.reduce(function (acc, curr) {
    return curr % 2 === 0 ? curr * acc : curr + acc
}, 1)
console.log(newNums)

