const calculator = require('../src/calculator');

test('adds 4 and 3', () => {
    expect(calculator.add(4, 3)).toBe(7);
});

test('adds 4 and 3', () => {
    expect(calculator.substract(4, 3)).toBe(1);
});