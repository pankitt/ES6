'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task() {
        var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDefaultTitle();

        _classCallCheck(this, Task);

        this.title = title;
        this.sleep = '-sleep-';
        this._done = false;
        Task.count += 1;
        console.log('-Create new task-');
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this.done = true;
            console.log('-Task ' + this.title + ' ready!!!-');
        }
    }, {
        key: 'done',
        get: function get() {
            return this._done === true ? '___ready___' : '___not ready___';
        },
        set: function set(value) {
            if (value !== undefined && typeof value === 'boolean') {
                this._done = value;
            } else {
                console.error('Error!');
            }
        }
    }], [{
        key: 'getDefaultTitle',
        value: function getDefaultTitle() {
            return '-!!no task!!-';
        }
    }, {
        key: 'count',
        get: function get() {
            if (!this._count) {
                this._count = 0;
            }
            return this._count;
        },
        set: function set(value) {
            this._count = value;
        }
    }]);

    return Task;
}();

//Task.count = 0;

var task = new Task('-clean room-');
var task2 = new Task('-by beer-');
var task3 = new Task();

console.log(task.done, task._done);

console.log(typeof Task === 'undefined' ? 'undefined' : _typeof(Task));
console.log(task instanceof Task);
console.log(typeof task === 'undefined' ? 'undefined' : _typeof(task));

console.log(task.sleep);
console.log(task.title);
console.log(task2.title);
console.log(task3.title);

console.log(Task.count);
task2.complete();

task.complete();
console.log(task.done, task._done);