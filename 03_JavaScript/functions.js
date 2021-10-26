function identity_function(param) {
    return function () {
        return param;
    }
}

function addf(x) {
    return function (y) {
        return x + y;
    }
}


function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

function applyf(f) {
    return function (x) {
        return function (y) {
            return f(x, y);
        }
    }
}

// alert(applyf(add)(5)(6));

function curry(f, arg) {
    return function (argtwo) {
        return f(arg, argtwo)
    }
}

// alert(curry(add, 5)(6))

// Version 1
function inc1(arg) {
    return addf(arg)(1);
}

//alert(inc1(2))

function inc2(arg) {
    return applyf(add)(arg)(1);
}

// alert(inc2(2))

function inc3(arg) {
    return curry(add, arg)(1);
}

// alert(inc3(2))

function methodize(f) {
    return function (x) {
        return f(this, x)
    }
}

Number.prototype.add = methodize(add);

// alert((3).add(4))

function demethodize(f) {
    return function (x, y) {
        return f.call(x, y);
    }
}

// alert(demethodize(Number.prototype.add)(5, 6))

function twice(f) {
    return function (x) {
        return f(x, x);
    }
}

function composeu(f1, f2) {
    return function (x) {
        return f2(f1(x));
    }
}

function double(arg) {
    return arg * 2;
}

function square(arg) {
    return arg * arg;
}

function composeb(f1, f2) {
    return function (x, y, z) {
        return f2(f1(x, y), z);
    }
}

function once(func) {
    return function () {
        var f = func;
        func = null;
        return f.apply(this, arguments);
    };
}

function counterf(n) {
    return {
        inc: function () {
            n = n + 1;
            return n + 1;
        },
        dec: function () {
            n = n - 1;
            return n - 1;
        }
    }
}

function revocable(f) {
    var func = f;
    return {
        invoke: function (arg) {
            return func(arg);
        },
        revoke: function () {
            func = null;
        }
    }
}

function vector() {
    var arr = [];
    return {
        append: function (arg) {
            arr.push(arg);
        },
        store: function (index, arg) {
            arr.splice(index, 0, arg);
        },
        get: function (index) {
            return arr[index];
        }
    }
}

function pubsub() {
    var subs = []
    return {
        subscribe: function (f) {
            subs.push(f);
        },
        publish: function (arg) {
            for (let s of subs) {
                s(arg);
            }
        }
    }
}

function gensymf(sym) {
    var counter = 0;
    return function () {
        counter = counter + 1;
        return `${sym}${counter - 1}`;
    }
}


function fibonaccif(x, y) {
    return function () {
        var next = x;
        x = y;
        y += next;
        return next;
    }
}

function addg(a) {
    if (!a) {
        return undefined;
    }
    return function plus(b) {
        if (!b) {
            return a;
        }
        if (b) {
            a += b;
            return plus;
        }
    }
}

// Musterlösung?
function addh(first) {
    function more(next) {
        if (next === undefined) {
            return first;
        }
        first += next;
        return more;
    }

    if (first !== undefined) {
        return more;
    }
}

function applyg(f) {
    return function (a) {
        if (!a) return a;

        return function cont(b) {
            if (!b) return a;
            a = f(a, b);
            return cont;
        }
    }
}

function m(value, source) {
    return {"value": value, "source": (source || value).toString()};
}

function addm(m1, m2) {
    return m(m1.value + m2.value, m1.source + m2.source);
}

function binarymf(f, s) {
    return function (m1, m2) {
        return m(f(m1.value, m2.value), `(${m1.value}${s}${m2.value})`);
    }
}

function binarymf2(f, s){
    return function(m1, m2){
        if(m1.value){
            return m(f(m1.value, m2.value), `(${m1.value}${s}${m2.value})`);
        }else{
            return m(f(m1,m2), `(${m1}${s}${m2})`);
        }
    }
}

function unarymf(f, s){
    return function(a){
        return m(f(a), `(${s} ${a})`);
    }
}

function hyp(a,b){
    return Math.sqrt(square(a)+square(b));
}

function exp(arr){

}

console.log(hyp(3,4));




