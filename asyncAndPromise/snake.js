let readline = require('readline')
let chalk = require('chalk')

// If the stream is TTY, then it must  be in RAW mode
if (process.stdin.isTTY)
  process.stdin.setRawMode(true);

let rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

readline.emitKeypressEvents(process.stdin)
process.stdin.on('keypress', (key) => {
    console.log(`${key} pressed`)
})

const row = c => n => c.repeat(n)
const col = row => n => (row + '\n').repeat(n)
const newLine = () => '\033c'
const rnd = (min) => (max) => Math.round(Math.random() * (max - min))

let gameState = {
    alive: true,
    // direction: R,
    score: 0,

}

const BOARD_CHAR = '*';
const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 10;

let board = col

setInterval(() => {
    const r = rnd(0)(255)
    const g = rnd(0)(255)
    const b = rnd(0)(255)

    let header = newLine()
    header += chalk.rgb(r,g,b)(row(' ')(12) + 'SNAKE' + row(' ')(12))
    console.log(header)

    // let board = createBoard(HEIGHT,WIDTH);
    // baord = addSnakeToBoard(board);
    // board = appleToBoard(board);
    // board[gameState.apple.y][gameState.apple.y] = 'A';
    // drawBoard(board);
    // moveSnake();
    // check();
}, 80)

// const col = function (row) {
//     return function (n) {
//         return (row + '\n').repeat(n)
//     }
// }