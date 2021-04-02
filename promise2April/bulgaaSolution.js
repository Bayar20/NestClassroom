const fs = require('fs');

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


const getTop10 = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
                return;
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

            const top10Words = Object.entries(wordCounts)
                .sort((item1, item2) => item2[1] - item1[1])
                .splice(0, 10);
            resolve(top10Words);
        });
    });
}

const promises = filePaths.map((fileName) => getTop10(fileName));
Promise.all(promises).then((results) => {
    const wordCounts = results.flat()
        .reduce((acc, item) => {
            acc[item[0]] = (acc[item[0]] || 0) + item[1]
            return acc;
        }, {});

    const result = Object.entries(wordCounts)
        .sort((item1, item2) => item2[1] - item1[1])
        .splice(0, 10);

    console.log(result);
}).catch(() => {
});