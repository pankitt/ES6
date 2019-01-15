'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sport = ['football', 'hockey', 'baseball'];

/*console.log('***forEach***');
sport.forEach(i => console.log(i));

console.log('***for***');
for(let i = 0; i < sport.length; i++) {
    console.log(sport[i]);
}

console.log('***for...in***');
for(let key in sport) {
    console.log(sport[key]);
}

console.log('***for...of***');
for(let key of sport) {
    console.log(key);
}*/

var iterator = sport[Symbol.iterator]();

/*console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log(iterator.next().done);*/

var next = iterator.next();
while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}

var countGenerator = _defineProperty({
    generate: function generate() {
        return this[Symbol.iterator]();
    }
}, Symbol.iterator, function () {
    var count = 0;

    return {
        next: function next() {
            var value = Math.ceil(Math.random() * 100);
            var done = count > 9;
            count += 1;

            return { value: value, done: done };
        }
    };
});

/*for (let i of countGenerator) {
    console.log(i);
}*/
//let random = countGenerator[Symbol.iterator]();
var random = countGenerator.generate();
console.log(random.next().value);

var ArrayIterator = function () {
    function ArrayIterator(array) {
        _classCallCheck(this, ArrayIterator);

        this.array = array.map(function (item) {
            return item;
        }).sort();
        this.index = 0;
    }

    _createClass(ArrayIterator, [{
        key: 'next',
        value: function next() {
            var result = { value: undefined, done: true };
            if (this.index < this.array.length) {
                result.value = this.array[this.index];
                result.done = false;
                this.index += 1;
            }

            return result;
        }
    }]);

    return ArrayIterator;
}();

var Tasklist = function () {
    function Tasklist() {
        _classCallCheck(this, Tasklist);

        this.tasks = [];
    }

    _createClass(Tasklist, [{
        key: 'addTask',
        value: function addTask() {
            for (var _len = arguments.length, tasks = Array(_len), _key = 0; _key < _len; _key++) {
                tasks[_key] = arguments[_key];
            }

            this.tasks = this.tasks.concat(tasks);
        }
    }, {
        key: Symbol.iterator,
        value: function value() {
            return new ArrayIterator(this.tasks);
        }
    }]);

    return Tasklist;
}();

var tasklist = new Tasklist();
tasklist.addTask('Write', 'Go', 'By', 'Show');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = tasklist[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;

        console.log(i);
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