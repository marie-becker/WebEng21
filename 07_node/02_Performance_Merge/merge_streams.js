const fs = require("fs");

const myArgs = process.argv.slice(2);
let fileA = myArgs[0];
let fileB = myArgs[1];

const fileName = fs.createWriteStream('Test.txt');
let content = '';


const stream1 = fs.createReadStream(fileA, "utf8");
const stream2 = fs.createReadStream(fileB, "utf8");

// Source: Vorlesung 'Node & npm & Deno'
const
    lines1 = [],
    lines2 = [];
stream1.on("data", process_chunk( lines1 ) );
stream2.on("data", process_chunk( lines2 ) );
stream1.on("end", output);
stream2.on("end", output);

let count = 0;
function output()
{
    count += 1;
    if ( count === 2 )
    {
        lines1.forEach((line,i) =>
            content += line + lines2[i] + '\n');
        fileName.write(content);
    }
}

function process_chunk( lines )
{
    return function ( chunk )
    {
        let i = 0;
        chunk.split(/\r\n/).forEach(function (line)
        {
            if (!lines[i]) {
                lines[i] = '';
            }
            lines[i] += line;
            ++i;
        });
    }
}