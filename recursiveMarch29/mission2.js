let input = "sample"

const rec = (string) => {
    if (string.length == 1) 
    return string;
    
    let ret = string.slice(-1) + rec(string.substr(0, string.length - 1))
    console.log(ret)
    return ret
}

console.log(rec(input));