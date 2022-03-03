const webassembly = require("webassembly")

webassembly
.load("gcd.wasm")
.then(module => {
    console.log("AH")
    console.log(module.exports.gcd(9,6));
})