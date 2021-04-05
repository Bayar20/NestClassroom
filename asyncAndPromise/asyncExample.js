function awaitFunction() {
    return new Promise ((resolve) => {
        let time = Math.round(Math.random() * 5000)
        setTimeout(() => {
            resolve(`I am resolved after ${time/ 1000} seconds`)
        }, 3000)
    })
}

async function display1 () {
    const msg1 = await awaitFunction();
    console.log('Message 1: ', msg1);
}

async function display2 () {
    const msg2 = await awaitFunction();
    console.log('Message 2: ', msg2)
}

display2()
display1();

console.log('Message')