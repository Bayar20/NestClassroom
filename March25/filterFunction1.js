
const persons = [
    {id: 1, name: 'Bat', age: 19},
    {id: 2, name: 'Bat1', age: 13},
    {id: 3, name: 'Bat2', age: 21},
    {id: 4, name: 'Bat3', age: 33},
    {id: 5, name: 'Bat4', age: 11}
];

let getAdults = (obj) => obj.age >= 18 ? 1 : 0

let adults = persons.filter(getAdults)

console.log(adults)

