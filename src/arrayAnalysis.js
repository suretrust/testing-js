const arrayAnalysis = array => {
    return {
        average: average(array),
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    };
};

const average = array => {
    return array.reduce((curr, acc) => curr + acc, 0) / array.length;
};

module.exports = arrayAnalysis;
