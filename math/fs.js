fs = require('fs');

fs.appendFileSync('notes.txt', 'Keep doing it!\n');

fs.writeFileSync('notes.txt', 'You guys can do it!\n');