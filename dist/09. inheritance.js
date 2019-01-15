'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task() {
        var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDefaultTitle();

        _classCallCheck(this, Task);

        this._title = title;
        this.done = false;
        Task.count += 1;
        console.log('Create task');
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this.done = true;
            console.log('Task -' + this._title + '- ready');
        }
    }, {
        key: 'title',
        get: function get() {
            return this._title;
        },
        set: function set(value) {
            this._title = value;
        }
    }], [{
        key: 'getDefaultTitle',
        value: function getDefaultTitle() {
            return '-!!no task!!-';
        }
    }]);

    return Task;
}();

var SubTask = function (_Task) {
    _inherits(SubTask, _Task);

    function SubTask(title) {
        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "no parent";

        _classCallCheck(this, SubTask);

        var _this = _possibleConstructorReturn(this, (SubTask.__proto__ || Object.getPrototypeOf(SubTask)).call(this, title));

        _this.parent = parent;
        console.log('Create sub task');
        return _this;
    }

    _createClass(SubTask, [{
        key: 'complete',
        value: function complete() {
            _get(SubTask.prototype.__proto__ || Object.getPrototypeOf(SubTask.prototype), 'complete', this).call(this);
            console.log('Sub task -' + this.title + '- ready');
        }
    }]);

    return SubTask;
}(Task);

Task.count = 0;

var task = new Task('study JS');
var subtask = new SubTask('study ES6', task);
console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

var notask = new SubTask();
console.log(SubTask.count);

console.log(task);
console.log(subtask);
console.log(notask);
// console.log(subtask instanceof SubTask);
// console.log(subtask instanceof Task);

task.complete();
subtask.complete();
console.log(task);
console.log(subtask);