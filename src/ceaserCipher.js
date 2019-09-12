const ceaserCipher = (string) => {
    const answer = [];
    const array = string.split('');

    array.forEach(element => {
        if (element === 'Z') {
            answer.push('A');
        } else if (element === 'z') {
            answer.push('a');
        } else if (".!?-:;\\-".includes(element)){
            answer.push(element);
        } else {
            answer.push(getNextChar(element));
        }
    });

    return answer.join('');
}

const getNextChar = (element) => {
    return String.fromCharCode(element.charCodeAt() + 1);
};

module.exports = ceaserCipher;