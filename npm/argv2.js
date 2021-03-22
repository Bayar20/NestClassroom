// Дээрх бичсэн 2 программын өгөгдлийг Аргументаар авдаг болгох. (Hint: process.argv)
//   Жишээ нь:
//     $ node first.js 1 20 30 32 14 54
//     $ node second.js -a 123 -b 32 -c 23 -d 21 -i 24

var array = []
for (i = 0; i < process.argv.length - 2; i++) {
    array[i] = process.argv[i + 2]
}

console.log(array)

var object = {}
var sum = 0
var mul = 1

for(i = 0; i < array.length; i++){
    if(isNaN(array[i])) {
        object[array[i]] = array[i + 1 ];
    }

    if(['-a', '-e','-o','-u', '-i'].indexOf(array[i]) !== -1) {
        sum += parseInt(array[i + 1])
    } else if (isNaN(array[i])) {
        mul *= parseInt(array[i + 1])
    } 
}

console.log('Egshgiin ard baigaa toonuudiin niilber: ', sum)
console.log('Giiguulegchiin ard baigaa toonuudiin urjver: ', mul)
console.log('Uusgesen object: ', object)