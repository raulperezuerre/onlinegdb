/*function add(x, y) {
    return x + y;
}

const sum = add(1, 2);*/

/*
function add(x) {
    return function(y) {
        return x + y;
    }
}

const sum = add(1)(2);*/

const add = x => y => x + y;

const sum = add(3)(2);

document.getElementById('result').innerHTML = sum;