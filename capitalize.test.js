const capitalize = require('./capitalize');

test('capitalizes the first character of a string', () => {
    expect(capitalize('test me')).toBe('Test me');
});