'use strict';

/*function greed(greeting, name) {
    if (greeting !== undefined && name !== undefined) {
        console.log(`${greeting} ${name}`);
    } else if (greeting === undefined && name !== undefined) {
        console.log(`Hello ${name}`);
    } else if (greeting !== undefined && name === undefined) {
        console.log(`${greeting} friend`);
    } else {
        console.log(`Hello friend`);
    }
}*/

function greed() {
    var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'friend';

    console.log(greeting + ' ' + name);
}
greed('Hi', 'Cat');
greed('Hi');
greed(undefined, 'Cat');
greed();

//1
function sumES5() {
    console.log(arguments instanceof Array);
    var x = 0;

    // 1
    /*Array.prototype.forEach.call(arguments, function (value) {
        x += value;
    });*/
    // 2
    for (var i = 0; i < arguments.length; i++) {
        x += arguments[i];
    }

    console.log(x);
}
//2
function sumES6() {
    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    console.log(values instanceof Array);
    var x = 0;

    values.forEach(function (item) {
        x += item;
    });

    console.log(x);
}
//3
function sumES6new() {
    for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        values[_key2] = arguments[_key2];
    }

    console.log(values.reduce(function (prevValue, currentValue) {
        return prevValue + currentValue;
    }));
}

sumES5(5, 5, 2, 10);
sumES6(5, 5, 2, 10);
sumES6new(5, 5, 2, 10);