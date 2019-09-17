/* eslint-disable arrow-parens */

const ceaserCipher = (string, shift) => {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const array = string.split('');

  let answer = '';

  const isUpperCase = char => upperCase.includes(char);
  const isLowerCase = char => lowerCase.includes(char);

  const getIndex = (element, caseType) => {
    let index = caseType.indexOf(element) + shift;
    if (index > 25) index %= 26;
    return index;
  };

  const lowerCaseCipherIndex = (element) => getIndex(element, lowerCase);
  const upperCaseCipherIndex = (element) => getIndex(element, upperCase);

  array.forEach((element) => {
    if (isLowerCase(element)) {
      answer += lowerCase[lowerCaseCipherIndex(element, shift)];
    } else if (isUpperCase(element)) {
      answer += upperCase[upperCaseCipherIndex(element, shift)];
    } else {
      answer += element;
    }
  });

  return answer;
};

module.exports = ceaserCipher;
