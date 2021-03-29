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
function recurseFb (n) {
    if (n === 2 || n === 1 ){
        return 1;
    }
    let ret = recurseFb(n - 1) + recurseFb(n - 2);
    // console.log(`${n} : ${ret}`);
    return ret;
}

for (i = 1; i <= n; i++){
    console.log(recurseFb(i))
}