import process from 'process'
import fs from 'fs'
const number = process.argv[process.argv.length -1]
let text = "";

for (let i = 1; i <= number; i++) {
    text += numbersToLetters(i) + "\n"
}
text = text.substring(0, text.length-1);

fs.writeFile('alphafile.txt', text, function (err) {
    if (err) throw err;
    console.log('Saved!');
});

// function numbersToLetters from Flambino on Stackexchange
// https://codereview.stackexchange.com/a/16129
function numbersToLetters(number) {
    let baseChar = ("A").charCodeAt(0),
        letters = "";
    do {
        number -= 1;
        letters = String.fromCharCode(baseChar + (number % 26)) + letters;
        number = (number / 26) >> 0; // quick `floor`
    } while(number > 0);
    return letters;
}
