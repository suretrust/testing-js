/* eslint-disable no-undef */
const capitalize = require('../src/capitalize');

test('capitalizes the first character of a string', () => {
  expect(capitalize('test me')).toBe('Test me');
});
