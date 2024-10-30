function getInput(fileName) {
    const fs = require('fs')
    const fileContents = fs.readFileSync(fileName).toString('utf-8')
    const splittedArray = fileContents.split(/\r?\n/);

    return splittedArray;
  }

function getTotals (input) {
    let depth = 0;
    let position = 0;
    let error = false;
    let entries = 0;
    var BreakException = {};

    try{
        input.forEach(entry => {
            entries ++;
            const splitEntry = entry.split(' ');
            let direction = splitEntry[0];
            let number = Number(splitEntry[1]);

            switch (direction) {
                case 'down':
                    depth += number;
                    break;
                case 'up':
                    depth -= number;
                    break;
                case 'forward':
                    position += number;
                    break;
                default:
                    error = true;
                    console.log('Error: Incorrect direction');
            }

            if (error) throw BreakException;

        });
    } catch (e) {
        if (e !== BreakException) throw e;
    } 

    const total = depth * position;

    const returnObject = {
        position,
        depth,
        total,
        entries,
        error
    }

    return returnObject;
}

module.exports = {
    getTotals: getTotals,
    getInput: getInput,
};