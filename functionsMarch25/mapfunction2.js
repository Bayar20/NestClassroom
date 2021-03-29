const birthYear = [1994, 2001, 1997, 1996, 1992]

const now = new Date();

let year = now.getFullYear()
console.log(year)

let ageCalc = (x) => {
    return year - x
}

console.log(birthYear.map(ageCalc))

