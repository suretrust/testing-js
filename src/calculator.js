const calculator = (() => {
    const add = (a, b) => a + b;
    const substract = (a, b) => a - b;
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;

    return { add, substract, divide, multiply }
})();

module.exports = calculator;