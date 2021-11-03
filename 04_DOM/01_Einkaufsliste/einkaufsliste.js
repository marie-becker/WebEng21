let liste = [];

function myKeyup(ev){
    console.log(ev)
    if (ev.key === "Enter") {
        additem();
        document.getElementById('item').value = "";
    }
}

function additem() {
    liste.push(document.getElementById('item').value);
    document.getElementById('item').value = "";
    renderlist();
}

function renderlist() {
    let str = '<ul id="renderedlist">';
    let counter = 0;
    liste.forEach(function (l) {
        str += `<li id="${counter}">` + l + ` <button onclick="deleteitem(${counter})">Delete</button>` + '</li>';
        counter++;
    });
    str += '</ul>';
    document.getElementById("liste").innerHTML = str;
}

function deleteitem(index) {
    liste.splice(index, 1)
    document.getElementById("renderedlist").remove();
    renderlist();
}

function clearall(){
    liste = [];
    renderlist();
}