// Дээрх бичсэн 2 программын өгөгдлийг Аргументаар авдаг болгох. (Hint: process.argv)
//   Жишээ нь:
//     $ node argv1.js 1 20 30 32 14 54
//     $ node argv2.js -a 123 -b 32 -c 23 -d 21 -i 24

var numbers = []
for (i = 0; i < process.argv.length - 2; i++) {
    numbers[i] = parseInt(process.argv[i + 2])
}

console.log(numbers)

var evenSum = 0;

for (i = 0; i < numbers.length; i ++){
    if (numbers[i] % 2 == 0){
        evenSum += numbers[i]
    } 
}

console.log('Tegsh toonuudiin niilber: ', evenSum)

var oddMul = 1;

for (i = 0; i < numbers.length; i ++){
    if (numbers[i] % 2 != 0){
        oddMul *= numbers[i]
    } 
}

console.log('Sondgoi toonuudiin urjver: ', oddMul)

var evenIndexSum = 0;

for (i = 0; i < numbers.length; i ++){
    if (i % 2 == 0){
        evenIndexSum += numbers[i]
    } 
}

console.log('Tegsh index niilber: = ', evenIndexSum)

var oddIndexMul = 1;

for (i = 0; i < numbers.length; i ++){
    if (i % 2 != 0){
        oddIndexMul *= numbers[i]
    } 
}

console.log('Sondgoi index urjver: = ', oddIndexMul)

var sum = []

for (i = 0; i < numbers.length; i++) {
    if (i == 0) {
        sum [i] = numbers [i] + numbers [i + 1]
    } else if (i == numbers.length - 1) {
        sum [i] = numbers [i] + numbers [i - 1]
    } else { 
        sum [i] = numbers [i] + numbers [i - 1] + numbers [i + 1]
    }
}

console.log(sum) 

