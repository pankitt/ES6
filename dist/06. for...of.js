'use strict';

var sports = ['football', 'hockey', 'basketball', 'baseball', 'rugby'];

//1
sports.forEach(function (i) {
    console.log(i);
});
console.log('***');

//2
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
console.log('***');

//3
for (var _i in sports) {
    console.log(sports[_i]);
}
console.log('***');

//4
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = sports[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _i2 = _step.value;

        console.log(_i2);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

console.log('***');