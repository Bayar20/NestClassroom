const a = [
    ['A', 'A', 'A'],
    ['A', 'A', 'A'],
    ['A', 'B', 'A'],
]

const b = [
  ['O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O'],
  ['P', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O']
]

const c = [
  ['c', 'c', 'c', 'c'],
  ['c', 'c', 'c', 'd']
]

const flatten = (arr) => {
    var merge = [].concat.apply([], arr);
    return merge;
}

const whereIsWaldo = (array) => {
    for(let i = 0; i < array.length; i++){
        let next1 = i + 1;
        let next2 = i + 2;
      
        if(i == array.length - 2) {
            next1 = i + 1; next2 = 0;
        }

        if(i == array.length - 1) {
            next1 = 0; next2 = 1
        }
      
        if(array[i] != array[next1] && array[i] != array[next2]) {
            return i;
        }
      }
}

let indexFind = (input) => whereIsWaldo(flatten(input))

let answer = (array) => {
    let x = (parseInt(indexFind(array) / array[0].length)) + 1
    let y = (indexFind(array) % array[0].length) + 1

    return [x , y]
} 

console.log('A - Waldo is here: ', answer(a))
console.log('B - Waldo is here: ', answer(b))
console.log('C - Waldo is here: ', answer(c))




