'use strict';

var _user;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var symbol = Symbol('name');
var symbol2 = Symbol('name');
//console.log(typeof symbol);
console.log(symbol);
console.log(symbol2);
console.log(symbol === symbol2); //  false


var symbol3 = Symbol.for('name');
var symbol4 = Symbol.for('name');
console.log(symbol3);
console.log(symbol4);
console.log(symbol3 === symbol4); // true


var symbolZ = Symbol.for('namesZ');
var name = Symbol.keyFor(symbolZ);
console.log(symbolZ);
console.log(name);

console.log('**********************');

var surname = Symbol();
var user = (_user = {
    username: 'r2d2'
}, _defineProperty(_user, Symbol.for('password'), 'c3po'), _defineProperty(_user, surname, 'Star'), _defineProperty(_user, 'surname', '1111'), _user);
console.log(user[Symbol.for('password')]);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(Object.getOwnPropertySymbols(user));

var password = user[Symbol.for('password')];
console.log(password);

console.log('**********************');

var object = _defineProperty({
    iterator: 111
}, Symbol.iterator, function () {});
console.log(object.iterator);