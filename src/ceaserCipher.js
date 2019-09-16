/* eslint-disable arrow-parens */

const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const isUpperCase = char => upperCase.includes(char);
const isLowerCase = char => lowerCase.includes(char);

const lowerCipherIndex = (element, shift) => {
  const index = lowerCase.indexOf(element) + shift;
  if (index > 25) return index - 26;
  return index;
};

const upperCipherIndex = (element, shift) => {
  const index = upperCase.indexOf(element) + shift;
  if (index > 25) return index - 26;
  return index;
};

const ceaserCipher = (string, shift) => {
  let answer = '';
  const array = string.split('');

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
