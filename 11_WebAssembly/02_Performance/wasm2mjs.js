const fs = require('fs').promises;
const fileSuffix = '.mjs';
const wasmFilename = process.argv[2];
const wasmPrefix = wasmFilename.split('.')[0]

function int8arr(wasmCode){
    return `export const wasmCode = new Uint8Array([`
    + wasmCode.join(`,`)
    + `]);
    export const wasmInstance = new WebAssembly.Instance(new
    WebAssembly.Module(wasmCode));`;
}
async function doi(){
    const wasm = await fs.readFile(wasmFilename, 'binary');
    const bytes = Object.keys(wasm).length;
    const int8Array = new Uint8Array(bytes);
    for(let i = 0; i < bytes; i++){
        int8Array[i] = wasm[i].charCodeAt(0);
    }
    console.log("printi")
    fs.writeFile(wasmPrefix + fileSuffix, int8arr(int8Array))
}
doi();