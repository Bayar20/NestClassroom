const a = [1,2,3,4]

let double = (i) => i * 2  
let letter = (i) => `${i} number`

// let result = a.map(double)
let result = a.map(letter)

ver2 = a.map((i) => {
    return i * 2
})

console.log(result)
console.log(ver2)

