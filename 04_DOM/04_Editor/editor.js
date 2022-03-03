function addlisteners() {
    document.querySelectorAll('.toolbar a').forEach(el => {
        el.addEventListener('click', function () {
            var command = this.dataset.command;
            if (command === 'h1' || command === 'h2' || command === 'p'){
                document.execCommand('formatBlock', false, command);
            }
            if (command == 'createlink' || command == 'insertimage') {
                url = prompt('Enter the link here: ','http:\/\/');
                document.execCommand(command, false, url);
            } else document.execCommand(command, false, null);
        })
    })
}
function addColorListener(){
    document.querySelectorAll('.toolbar input').forEach(el => {
        el.addEventListener('change', function (){
            console.log("change")
            var command = this.dataset.command;
            console.log(command);
            if (command == 'forecolor' || command == 'backcolor') {
                document.execCommand(command, false, this.value);
            }
        })
    })
}