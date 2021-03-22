let array = ['-a', '27', '-b', '21', '-c', '-12', '-o', '-30']

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

console.log(sum)
console.log(mul)
console.log(object)

// Дээрх array өгөгдсөн бол доорхуудыг ол:
//     1. Эгшигийн ард байгаа тоонуудын нийлбэр
//     2. Гийгүүлэгчийн ард байгаа тоонуудын үржвэр
//     3. Дээрх array - аас object үүсгэж хэвлэх
//         Хариу нь: {
//                     "-a": "27",
//                     "-b": "27",
//                     "-c": "-12",
//                     "-o": "-20",
//         }

