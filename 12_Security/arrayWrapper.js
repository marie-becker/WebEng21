function arrayWrapper() {
    let array = [...arguments]; // private
    return {
        get:function(pos){
            return array[pos];
        },
        set:function(pos,value){
            if(typeof pos == "number" && typeof value != "function"){
                array[pos] = value;
            }
        },
        append:function(value){
            array.push(value);
        }
    }
}