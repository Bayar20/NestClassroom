
let tIndex = process.argv.findIndex(tCheck)
let pIndex = process.argv.findIndex(pCheck)

function tCheck(string){
    return string == "-t"
}

function pCheck(string){
    return string == "--hello-param"
}

// if (tIndex >= 0) {
//     if (pIndex >= 0){
//         console.log(process.argv[pIndex + 1])    
//     } else {
//         console.log(process.argv[tIndex + 1])
//     }
// } else {
//     console.log('Hello Arguments')
// }

if (tIndex >= 0 && pIndex >= 0) {
    console.log(process.argv[pIndex + 1])   
} else {
    if (tIndex >= 0 && pIndex == -1){
        console.log(process.argv[tIndex + 1])
    } else {
        if (tIndex == -1 && pIndex >= 0){
            console.log(process.argv[pIndex + 1])
        } else {
            console.log('Hello Arguments')
        }
    }
}








