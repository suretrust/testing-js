const calculator = require('../src/calculator');

test('adds 4 and 3', () => {
    expect(calculator.add(4, 3)).toBe(7);
});

test('substract 3 from 4', () => {
    expect(calculator.substract(4, 3)).toBe(1);
});

test('divide 4 by 3', () => {
    expect(calculator.divide(4, 2)).toBe(2);
});

test('multiply 4 by 3', () => {
    expect(calculator.multiply(4, 3)).toBe(12);
});