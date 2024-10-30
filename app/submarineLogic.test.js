const { getTotals, getInput }  = require('./submarineLogic');

test('expects getInput to return input_2.txt as array', () => {
    const result = getInput('app/input_2.txt');
    entryArray = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"]
    expect(result).toStrictEqual(entryArray);
});

test('expects depth of 2 and position of 2', () => {
    entryArray = ["down 2", "forward 2"]
    const result = getTotals(entryArray);
    expect(result.depth).toBe(2);
    expect(result.position).toBe(2);
    expect(result.total).toBe(4);
    expect(result.error).toBe(false);
    expect(result.errorOnEntry).toBe("No Error");
});

test('expects numbers to match example', () => {
    entryArray = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"]
    const result = getTotals(entryArray);
    expect(result.depth).toBe(10);
    expect(result.position).toBe(15);
    expect(result.total).toBe(150);
    expect(result.error).toBe(false);
    expect(result.errorOnEntry).toBe("No Error");
});

test('expects numbers to match example with negative final number', () => {
    entryArray = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward -2"]
    const result = getTotals(entryArray);
    expect(result.depth).toBe(10);
    expect(result.position).toBe(11);
    expect(result.total).toBe(110);
    expect(result.error).toBe(false);
    expect(result.errorOnEntry).toBe("No Error");
});

test('expects error when invalid direction is provided', () => {
    entryArray = ["down 2", "invalid 2"]
    const result = getTotals(entryArray);
    expect(result.depth).toBe(2);
    expect(result.position).toBe(0);
    expect(result.total).toBe(0);
    expect(result.error).toBe(true);
    expect(result.errorOnEntry).toBe(2);
});