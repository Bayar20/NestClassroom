const PI = 3.14159
const getMax = (num1, num2) => {
    if (num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}

const getMin = (num1, num2) => {
    if (num1 <= num2) {
        return num1;
    } else {
        return num2;
    }
}

const getCeil = (value) => {
    const fraction = value % 1;
    const diff = 1 - fraction;
    return value + diff;
}

const getFloor= (value) => {
    const fraction = value % 1;
    return value - fraction;
}

const getRound= (value) => {
    const fraction = value % 1;
    if (fraction < 0.5){
        return value - fraction;
    } else {
        const diff = 1 - fraction;
        return value + diff;
    }
}

const getAbs = (value) => {
    if (value < 0){
        return 0 - value
    } else {
        return value
    }
}

module.exports = { 
    PI: PI,
    max: getMax,
    min: getMin,
    round: getRound,
    ceil: getCeil,
    floor: getFloor,
    abs: getAbs,
};

