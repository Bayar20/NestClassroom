const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

const KEY_UP = '\u001B\u005B\u0041';
const KEY_RIGHT = '\u001B\u005B\u0043';
const KEY_DOWN = '\u001B\u005B\u0042';
const KEY_LEFT = '\u001B\u005B\u0044';
const KEY_CTRL_C = '\u0003';

let BOARD_CHAR = '.';
const BOARD_WIDTH = 20;
const BOARD_HEIGHT = 10;
const BOARD_TITLE = 'MY SNAKE'

const DIRECTIONS = {
    UP: 'up',
    RIGHT: 'right',
    DOWN: 'down',
    LEFT: 'left',
}

const SNAKE_CHAR = 'O'
let SNAKE = [
    { x: 5, y: 5},
    { x: 5, y: 4},
    { x: 5, y: 3}
]
let SNAKE_DIRECTION = DIRECTIONS.DOWN;

const APPLE_CHAR = '*'
let APPLE_X = 5;
let APPLE_Y = 5;

const board = [];
const column = BOARD_CHAR.repeat(BOARD_WIDTH).split('');
for (let i = 0; i < BOARD_HEIGHT; i ++ ) {
    board.push(column)
}

// Reading key inputs
stdin.on('data', (key) => {
    switch (key) {
        case KEY_UP:
            SNAKE_DIRECTION = DIRECTIONS.UP;
            break;
        case KEY_RIGHT:
            SNAKE_DIRECTION = DIRECTIONS.RIGHT;
            break;
        case KEY_DOWN:
            SNAKE_DIRECTION = DIRECTIONS.DOWN;
            break;
        case KEY_LEFT:
            SNAKE_DIRECTION = DIRECTIONS.LEFT;
            break;
        case KEY_CTRL_C:
            process.exit();
            break;
    }
});

setInterval(() => {
    console.clear();

    const headerPadStart = (BOARD_WIDTH + BOARD_TITLE.length) / 2;
    console.log(BOARD_TITLE.padStart(headerPadStart))

    switch (SNAKE_DIRECTION) {
        case DIRECTIONS.UP:
            SNAKE.unshift({
                x: SNAKE[0].x,
                y: SNAKE[0].y - 1
            })
            break;
        case DIRECTIONS.RIGHT:
            SNAKE.unshift({
                x: SNAKE[0].x + 1,
                y: SNAKE[0].y
            })
            break;
        case DIRECTIONS.DOWN:
            SNAKE.unshift({
                x: SNAKE[0].x,
                y: SNAKE[0].y + 1
            })
            break;
        case DIRECTIONS.LEFT:
            SNAKE.unshift({
                x: SNAKE[0].x - 1,
                y: SNAKE[0].y
            })
            break;
        }

    if ((SNAKE[0].y == APPLE_Y && SNAKE[0].x == APPLE_X)){
        [APPLE_X, APPLE_Y] = getRandomCoord();
    } else {
        SNAKE.pop();
    }

   if (SNAKE[0].x < 0) {
       SNAKE[0].x = BOARD_WIDTH - 1;
   }

   if (SNAKE[0].x > BOARD_WIDTH - 1) {
        SNAKE[0].x = 0;
    }

   if (SNAKE[0].y < 0) {
        SNAKE[0].y = BOARD_HEIGHT - 1;
   }

   if (SNAKE[0].y > BOARD_HEIGHT - 1) {
        SNAKE[0].y = 0;
    }

    const realBoard = board.map((col, y) => {
        return col.map((char, x) => {
            if (y === APPLE_Y && x === APPLE_X){
                return APPLE_CHAR
            }

            for (coord of SNAKE) {
                if (coord.x === x && coord.y === y){
                    return SNAKE_CHAR
                }
            }

            return char
        })
    }) 

    realBoard.forEach((col) => {
        console.log(col.join(''))
    })

    
}, 300)

