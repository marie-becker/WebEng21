let formula;

function createTable() {
    var reihen = document.getElementById("reihen").value;
    let table = `<table id="table">`;
    for(let i = 1; i <= reihen; i++){
        table +=`<tr><td>${toAbc(i)} = </td><td contenteditable="true" id="${toAbc(i)}2" onblur="calc(false)"></td>`;
    }
    table += `<tr><td>Sum = </td><td contenteditable="true" id="sumfield" onblur="calc(true)"></td></tr>`;
    table += '</table>';
    document.getElementById("tablewrapper").innerHTML = table;
    calc();
}

function calc(b) {
    if(b) formula = document.getElementById("sumfield").innerHTML.toLowerCase();
    var f = formula.slice(1,4)
    var z = parseInt(document.getElementById(formula.slice(5,7)).innerHTML);
    var w = parseInt(document.getElementById(formula.slice(8,10)).innerHTML);
    var res = window[f](z,w)
    console.log(res)
    document.getElementById("sumfield").innerHTML = res;
}

function toAbc(i){
    return ((i%26)+9).toString(36);
}

function sum(x,y){
    return x+y;
}
function mul(x,y){
    return x*y;
}
function sub(x,y){
    return x-y;
}
function div(x,y){
    return x/y;
}
