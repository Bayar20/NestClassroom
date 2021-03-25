getLastName = function(object) {
    return `${object.lastName} bara bara bere bere ${object.firstName}`
}    

result = getLastName ({
    firstName: 'Byambadorj',
    lastName: 'Puntsag'
})

console.log(result)