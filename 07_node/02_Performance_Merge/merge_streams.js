const fs = require("fs");

const files = process.argv.slice(2);

console.time("merge")

const stream1 = fs.createReadStream(files[0], "utf8");
const stream2 = fs.createReadStream(files[1], "utf8");

const lines1 = [], lines2 = [];

stream1.on("data", process_chunk(lines1));
stream2.on("data", process_chunk(lines2));
stream1.on("end", output);
stream2.on("end", output);

let result = "";
let count = 0;

function output() {
    count += 1;
    if (count === 2) {
        lines1.forEach((line, i) => result += line + "\n" + lines2[i] + "\n")
    }
    fs.writeFile('mergeStreamsRes.txt', result.substring(0, result.length - 1), function (err) {
        if (err) throw err;
    });
    console.timeEnd("merge")
}

function process_chunk(lines) {
    return function (chunk) {
        let i = 0;
        chunk.split("\n").forEach(function (line) {
            if (!lines[i]) {
                lines[i] = '';
            }
            lines[i++] += line;
        });
    }
}