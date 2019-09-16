/* eslint-disable no-undef */
const ceaserCipher = require('../src/ceaserCipher');

test('returns the ceaser cipher for the given string', () => {
  expect(ceaserCipher('abcdefghijklmnopqrstuvwxyz', 3)).toBe('defghijklmnopqrstuvwxyzabc');
});

test('returns the ceaser cipher for the given string', () => {
  expect(ceaserCipher('ABCDEfghijklMNOPQRStuvwXYZ', 4)).toBe('EFGHIjklmnopQRSTUVWxyzaBCD');
});

test('returns the punctuation', () => {
  expect(ceaserCipher('ABC!.abc', 2)).toBe('CDE!.cde');
});
