const arr = [1,2,[3,4], [5, [6,7]]]

const rec = (tempArray) => {
    let ret = []
        for (i = 0; i < tempArray.length; i ++) {
            if(Array.isArray(tempArray[i])){
                ret = ret.concat(rec(tempArray[i]))
            } else {
                ret.push(tempArray[i])
            }
        }
    return ret
}

console.log(rec(arr))