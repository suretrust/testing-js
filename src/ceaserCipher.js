/* eslint-disable arrow-parens */

const getNextChar = element => String.fromCharCode(element.charCodeAt() + 1);

const ceaserCipher = (string) => {
  const answer = [];
  const array = string.split('');

  array.forEach((element) => {
    if (element === 'Z') {
      answer.push('A');
    } else if (element === 'z') {
      answer.push('a');
    } else if ('.!?-:;\\-'.includes(element)) {
      answer.push(element);
    } else {
      answer.push(getNextChar(element));
    }
  });

  return answer.join('');
};

module.exports = ceaserCipher;
