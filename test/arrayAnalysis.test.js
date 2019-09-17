/* eslint-disable no-undef */
const arrayAnalysis = require('../src/arrayAnalysis');

test('returns an object that contains average, min, max, and length of the array', () => {
  const array = [1, 8, 3, 4, 2, 6];

  expect(arrayAnalysis(array)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
