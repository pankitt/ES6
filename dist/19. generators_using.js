'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(generator),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(generator2),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(generator3),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(generator4),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(generateArray),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(generateArray_inn),
    _marked7 = /*#__PURE__*/regeneratorRuntime.mark(generateRT);

/*
function* generator() {}
let generator = function () {};
let obj = {
    *generator() {}
};
class someClass {
    *generator() {}
}
*/

function generator() {
    return regeneratorRuntime.wrap(function generator$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 1;

                case 2:
                    _context.next = 4;
                    return 2;

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}
var iterator = generator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function generator2() {
    var result;
    return regeneratorRuntime.wrap(function generator2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return;

                case 2:
                    _context2.t0 = _context2.sent;
                    result = 1 + _context2.t0;

                    console.log('Result: ' + result);

                case 5:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}
var iterator2 = generator2();
console.log(iterator2.next());
console.log(iterator2.next(1));

function generator3() {
    var array;
    return regeneratorRuntime.wrap(function generator3$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    _context3.next = 2;
                    return;

                case 2:
                    _context3.t0 = _context3.sent;
                    _context3.next = 5;
                    return;

                case 5:
                    _context3.t1 = _context3.sent;
                    _context3.next = 8;
                    return;

                case 8:
                    _context3.t2 = _context3.sent;
                    array = [_context3.t0, _context3.t1, _context3.t2];

                    console.log(array[2]);

                case 11:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked3, this);
}
var iterator3 = generator3();
console.log(iterator3.next());
console.log(iterator3.next(1));
console.log(iterator3.next(2));
console.log(iterator3.next(3));

function generator4() {
    return regeneratorRuntime.wrap(function generator4$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    _context4.next = 2;
                    return 42;

                case 2:
                    return _context4.delegateYield([1, 2, 3], 't0', 3);

                case 3:
                    _context4.next = 5;
                    return 43;

                case 5:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _marked4, this);
}
var iterator4 = generator4();
console.log(iterator4.next().value);
console.log(iterator4.next().value);
console.log(iterator4.next().value);
console.log(iterator4.next().value);
console.log(iterator4.next().value);
console.log(iterator4.next().value);

function generateArray() {
    return regeneratorRuntime.wrap(function generateArray$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                    return _context5.delegateYield([1, 2, 3], 't0', 1);

                case 1:
                case 'end':
                    return _context5.stop();
            }
        }
    }, _marked5, this);
}
function generateArray_inn() {
    return regeneratorRuntime.wrap(function generateArray_inn$(_context6) {
        while (1) {
            switch (_context6.prev = _context6.next) {
                case 0:
                    _context6.next = 2;
                    return 42;

                case 2:
                    return _context6.delegateYield(generateArray(), 't0', 3);

                case 3:
                    _context6.next = 5;
                    return 43;

                case 5:
                case 'end':
                    return _context6.stop();
            }
        }
    }, _marked6, this);
}
var iteratorArray = generateArray_inn();
console.log(iteratorArray.next().value);
console.log(iteratorArray.next().value);
console.log(iteratorArray.next().value);
console.log(iteratorArray.next().value);
console.log(iteratorArray.next().value);
console.log(iteratorArray.next().value);

function generateRT() {
    return regeneratorRuntime.wrap(function generateRT$(_context7) {
        while (1) {
            switch (_context7.prev = _context7.next) {
                case 0:
                    _context7.prev = 0;
                    _context7.next = 3;
                    return 1;

                case 3:
                    _context7.next = 5;
                    return 2;

                case 5:
                    _context7.next = 7;
                    return 3;

                case 7:
                    _context7.next = 12;
                    break;

                case 9:
                    _context7.prev = 9;
                    _context7.t0 = _context7['catch'](0);

                    console.log(_context7.t0);

                case 12:
                case 'end':
                    return _context7.stop();
            }
        }
    }, _marked7, this, [[0, 9]]);
}
var iteratorRT = generateRT();
console.log(iteratorRT.next());
//console.log(iteratorRT.return());
console.log(iteratorRT.throw(new Error('Error!!!')));
console.log(iteratorRT.next());