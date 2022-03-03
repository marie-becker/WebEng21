import * as process from "process";
import fs from 'fs';
const number = process.argv[process.argv.length -1]
let text = "";
for (let i = 1; i <= number; i++) {
    text += i + " .\n";
}
text = text.substring(0, text.length-1);
fs.writeFile('testfile.txt', text, function (err) {
    if (err) throw err;
    console.log('Saved!');
});