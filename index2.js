function makeAdjectifier(adjective) {
    return function(subject) {
        return adjective + ' ' + subject;
    }
}

// makeAdjectifier = adjective => subject => adjective + ' ' + subject;

const result = makeAdjectifier('cool')('class');

document.getElementById('result').innerHTML = result;