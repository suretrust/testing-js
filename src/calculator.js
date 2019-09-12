const calculator = (() => {
    const add = (a, b) => a + b;
    const substract = (a, b) => a - b;

    return { add, substract }
})();

module.exports = calculator;