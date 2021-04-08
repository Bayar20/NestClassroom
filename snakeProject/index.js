let readline = require('readline')

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