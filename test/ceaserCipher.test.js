/* eslint-disable no-undef */
const ceaserCipher = require('../src/ceaserCipher');

test('returns the ceaser cipher for the given string', () => {
    expect(ceaserCipher('abcdefghijklmnopqrstuvwxyz')).toBe('bcdefghijklmnopqrstuvwxyza');
});

test('returns the ceaser cipher for the given string', () => {
    expect(ceaserCipher('ABCDEfghijklMNOPQRStuvwXYZ')).toBe('BCDEFghijklmNOPQRSTuvwxYZA');
});

test("returns the punctuation", () => {
    expect(ceaserCipher("ABC!.abc")).toBe("BCD!.bcd");
})