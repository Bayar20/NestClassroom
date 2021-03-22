let numbers = [1, 7, 9, 10, 43, 17, 38, 95]

// Дээрх array өгөгдсөн бол доорхуудыг ол:
//     1. Тэгш тоонуудын нийлбэр
//     2. Сондгой тоонуудын үржвэр
//     3. Тэгш индекс дээр байгаа тоонуудын нийлбэр
//     4. Сондгой индекс дээр байгаа тоонуудын үржвэр
//     5. Өөрөөсөө 1 индексийн зөрүүтэй тоонуудын нийлбээрүүд.
//         Хариу нь: [8, 17, 26, 62, 70, 98, 150] гарна гэсэн үг

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

