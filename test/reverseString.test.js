/* eslint-disable no-undef */
const reverseString = require('../src/reverseString');

test('should reverse a string', () => {
  expect(reverseString('string')).toBe('gnirts');
});
