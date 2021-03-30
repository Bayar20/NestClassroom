
const makePlusFunction = (value1) => {
    return (value2) => {
          return value2 + value1      
    }
}

const plusFive = makePlusFunction(5)

console.log(plusFive(10))
console.log(plusFive(4))

const plusTen = makePlusFunction(10)

console.log(plusTen(188))
console.log(plusTen(-5))

console.log(makePlusFunction(20)(5))