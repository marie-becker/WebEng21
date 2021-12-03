import fs from 'fs/promises'
import * as process from "process";

const file1 = process.argv[process.argv.length - 1];
const file2 = process.argv[process.argv.length - 2];

(async _=> {
    const [text1, text2] = await Promise.all([fs.readFile(file1, 'utf8'), fs.readFile(file2, 'utf8')])
    let arr1 = text1.split("\n");
    let arr2 = text2.split("\n");
    const text = interleave(arr1, arr2);
    const output = text.join('\n')
    console.log(output)
})();

const interleave = ([x, ...xs], ys = []) =>
    x === undefined
        ? ys                             // base: no x
        : [x, ...interleave(ys, xs)]  // inductive: some x

