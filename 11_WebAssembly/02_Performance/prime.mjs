export const wasmCode = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,4,4,1,112,0,0,5,3,1,0,1,7,17,2,6,109,101,109,111,114,121,2,0,4,109,97,105,110,0,0,10,105,1,103,1,5,127,65,0,33,1,65,2,33,2,65,0,33,4,3,64,65,0,33,3,2,64,3,64,32,3,65,2,106,33,0,2,64,2,64,32,1,32,3,71,13,0,32,4,65,1,106,33,4,12,1,11,32,2,32,0,111,69,13,2,11,32,3,65,1,106,33,3,32,0,32,2,72,13,0,11,11,32,1,65,1,106,33,1,32,2,65,1,106,34,2,65,160,141,6,71,13,0,11,32,4,11]);
    export const wasmInstance = new WebAssembly.Instance(new
    WebAssembly.Module(wasmCode));