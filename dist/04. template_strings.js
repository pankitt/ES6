'use strict';

var _templateObject = _taggedTemplateLiteral(['I am ', ' not ', ''], ['I am ', ' not ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
    console.log(('hello ' + name).toUpperCase());
}
greet('Igor');

function createEmail(to, from, subject, message) {
    console.log('\n        To: ' + to + ',\n        From: ' + from + ',\n        Subject: ' + subject + ',\n        Message: ' + message + '\n    ');
}
createEmail('delfa_to@gmail.com', 'delfa_from@gmail.com', 'Hello', 'How are you?');

function add(x, y) {
    console.log(x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y)));
}
add('2', '2');

var name = 'Cat';
console.log(('Hello ' + name).toUpperCase());
var name2 = 'Dog';
console.log(('Hello ' + name2).toUpperCase());
console.log(upperName(_templateObject, name, name2));

function upperName(literals) {
    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    return literals[0] + values[0].toUpperCase() + literals[1] + values[1].toUpperCase();
}