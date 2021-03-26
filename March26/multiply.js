// let multiply = (a, b, c) => {
//     return a * b * c
// }


const multiply = (a) => (b) => (c) => a * b * c

console.log(multiply(2)(3)(4))

const multiplyy = (a) => (b) => a * b 

const multiplyByTwo = multiplyy(2)

console.log(multiplyByTwo(5))
