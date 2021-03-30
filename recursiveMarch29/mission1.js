// let n = 10;

// function recurse(n) {
//     if (n === 1 ){
//         return 1;
//     }
//     return n + recurse(n - 1)
// }

// console.log(recurse(n))

// n = 5
// function recurseM(n) {
//     if (n === 1 ){
//         return 1;
//     }
//     return n * recurseM(n - 1)
// }

// console.log(recurseM(n))



n = 10

let obj = {}
function recurseFb (n) {
    if (n === 2 || n === 1 ){
        return 1;
    }

    if (obj[`${n}`] in obj) {
        return obj[`${n}`]
    }

    obj[`${n}`] = recurseFb(n - 1) + recurseFb(n - 2);
    console.log(obj[`${n}`])
    return obj[`${n}`]
}

console.log(recurseFb(n));

// for (i = 1; i <= n; i++){
//     console.log(recurseFb(i))
// }