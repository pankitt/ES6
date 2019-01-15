'use strict';

function add(x, y) {
    return x + y;
}
console.log(add(2, 5));

var add_arr = function add_arr(x, y) {
    return x + y;
};
console.log(add_arr(2, 5));

var square = function square(x) {
    return x * x;
};
console.log(square(5));

var square_arr = function square_arr(x) {
    return x * x;
};
console.log(square_arr(5));

var giveMeAnswer = function giveMeAnswer() {
    return 42;
};
console.log(giveMeAnswer());

var giveMeAnswer_arr = function giveMeAnswer_arr() {
    return 42;
};
console.log(giveMeAnswer_arr());

var log = function log() {
    console.log('logging');
};
log();

var log_arr = function log_arr() {
    return console.log('logging');
};
log_arr();

var multiply = function multiply(x, y) {
    var result = x * y;
    return result;
};
console.log(multiply(2, 5));

var multiply_arr = function multiply_arr(x, y) {
    var result = x * y;
    return result;
};
console.log(multiply_arr(2, 5));

var getPerson = function getPerson() {
    return { name: 'Cat' };
};
console.log(getPerson());

var getPerson_arr = function getPerson_arr() {
    return { name: 'Cat' };
};
console.log(getPerson_arr());

(function () {
    console.log('IIFE');
})();

(function () {
    return console.log('IIFE');
})();

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var sum = 0;
/*numbers.forEach(function (i) {
    sum += i;
});*/
numbers.forEach(function (i) {
    return sum += i;
});
console.log(sum);

/*let squared = numbers.map(function (i) {
    return i * i;
});*/
var squared = numbers.map(function (i) {
    return i * i;
});
console.log(squared);

/*let person = {
    name: 'Dog',
    greet: function () {
        let that = this;
        setTimeout(function () {
            console.log('My name is ' + that.name);
            console.log(that);
            console.log(this);
        }, 2000);
    }
};*/
var person = {
    name: 'Dog',
    greet: function greet() {
        var _this = this;

        setTimeout(function () {
            console.log('My name is ' + _this.name);
            console.log(_this);
        }, 2000);
    }
};
person.greet();

var Test = function Test() {
    return console.log('Test Test Test');
};
var test = new Test();