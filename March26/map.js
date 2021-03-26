const arr = [1,3,4,5]

const map = (arr, callFunction) => {
    let array = [];
        for (let i = 0; i < arr.length; i++) {
            array.push(callFunction(arr[i]))
        }
    return array;
}

const result = map(arr, (x) => {
    return x * 2;
})

console.log(result)


