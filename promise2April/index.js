const fs = require('fs')

const filePaths = [
    './word_count/smaller.txt',
    './word_count/shakespeare.txt',
    './word_count/sgb-words.txt',
    './word_count/big.txt',
];

// const alphabet = 'abcdefghijklmnoqprstuwvxyz'.split('')

const isWord = (word) => {
    return /^[a-zA-Z]+$/.test(word);

    // for (let i = 0; i < word.length; i ++) {
    //     if (!alphabet.includes(word[i].toLowerCase())) {
    //         return false;
    //     }
    // }

    // return true;
}

let promiseArray = []

const getTop10 = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
                return
            }
        
            const wordCounts = data
                .split('\n')
                .join(' ')
                .split(' ')
                .filter(isWord)
                .reduce((acc, word) => {
                    // acc[word] = (acc[word] || 1) + 1
                    if (acc[word]) {
                        acc[word] ++;
                    } else {
                        acc[word] = 1;
                    }
        
                    return acc;
                }, {});
        
            const Top10Words = Object.entries(wordCounts)
                .sort((item1, item2) => item2[1] - item1[1])
                .splice(0, 10)
                .map((item) => {
                    return item[0];
            resolve(Top10Words)
            });
        });  
    });
}

getTop10(filePaths[0])
    .then ((top10) => {
        console.log(top10)
    })
        .catch ((error) => {
        console.log(error)
})

getTop10(filePaths[1])
    .then ((top10) => {
        console.log(top10)
    })
        .catch ((error) => {
        console.log(error)
})
