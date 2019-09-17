/* eslint-disable arrow-parens */

const average = array => array
  .reduce((curr, acc) => curr + acc, 0) / array.length;

const arrayAnalysis = (array) => ({
  average: average(array),
  min: Math.min(...array),
  max: Math.max(...array),
  length: array.length,
});

module.exports = arrayAnalysis;
