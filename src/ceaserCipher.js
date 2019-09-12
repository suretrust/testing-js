const ceaserCipher = (string) => {
    const answer = [];
    const array = string.split('');

    array.forEach(element => {
        if (element === 'Z') {
            answer.push('A');
        } else if (element === 'z') {
            answer.push('a');
        } else {
            answer.push(String.fromCharCode(element.charCodeAt() + 1));
        }
    });

    return answer.join('');
}

module.exports = ceaserCipher;