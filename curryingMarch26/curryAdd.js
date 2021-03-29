
const makeFunction = (value1) => {
    return (operator) => {
        return (value2) => {
            // if (operator === '*') {
            //     return value2 * value1
            // } 

            // if (operator === '+') {
            //     return value2 + value1
            // } 

            // if (operator === '-') {
            //     return value2 - value1
            // } 

            // if (operator === '/') {
            //     return value2 / value1
            // } 

            switch(operator) {
                case '+':
                    return value1 + value2
                case '*':
                    return value1 * value2
                case '-':
                    return value1 - value2
                case '/':
                    return value1 / value2
                
            }
        }
    }
}

const mul3 = makeFunction(3)('*')
let result1 = mul3(5)

const add20 = makeFunction(20)('+')
let result2 = add20(5)

console.log(result1)
console.log(result2)

console.log(makeFunction(20)('/')(4))