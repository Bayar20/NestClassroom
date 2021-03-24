getAccess = (allowed) => {
    if (allowed) {
        return 'Access granted'
    } else {
        return 'Access denied'
    }
}


result1 = getAccess(true)
result2 = getAccess(false)

console.log(result1);
console.log(result2);