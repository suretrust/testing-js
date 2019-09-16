/* eslint-disable arrow-parens */

const ceaserCipher = (string, shift) => {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const array = string.split('');

  let answer = '';

  const isUpperCase = char => upperCase.includes(char);
  const isLowerCase = char => lowerCase.includes(char);

  const lowerCipherIndex = (element) => {
    let index = lowerCase.indexOf(element) + shift;
    if (index > 25) index %= 26;
    return index;
  };

  const upperCipherIndex = (element) => {
    let index = upperCase.indexOf(element) + shift;
    if (index > 25) index %= 26;
    return index;
  };

  array.forEach((element) => {
    if (isLowerCase(element)) {
      const lowerIndex = lowerCipherIndex(element, shift);
      answer += lowerCase[lowerIndex];
    } else if (isUpperCase(element)) {
      const upperIndex = upperCipherIndex(element, shift);
      answer += upperCase[upperIndex];
    } else {
      answer += element;
    }
  });

  return answer;
};

module.exports = ceaserCipher;
