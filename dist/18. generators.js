'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(generate);

function generate() {
    return regeneratorRuntime.wrap(function generate$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    console.log('Start');
                    _context.next = 3;
                    return 1;

                case 3:
                    _context.next = 5;
                    return 2;

                case 5:
                    _context.next = 7;
                    return 3;

                case 7:
                    console.log('Finish');

                case 8:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}
var iterator = generate();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/*function* range(start, end) {
    let current = start;
    while (current <= end) {
        yield current++;
    }
}
for(let num of range(1, 10)) {
    console.log(num);
}*/

var numbers = {
    range: /*#__PURE__*/regeneratorRuntime.mark(function range(start, end) {
        var current;
        return regeneratorRuntime.wrap(function range$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        current = start;

                    case 1:
                        if (!(current <= end)) {
                            _context2.next = 6;
                            break;
                        }

                        _context2.next = 4;
                        return current++;

                    case 4:
                        _context2.next = 1;
                        break;

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, range, this);
    })
};
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = numbers.range(1, 10)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var num = _step.value;

        console.log(num);
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