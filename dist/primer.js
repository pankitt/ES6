'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
    function User() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Cat';

        _classCallCheck(this, User);

        this._name = name;
    }

    _createClass(User, [{
        key: 'show',
        value: function show() {
            console.log('' + this._name);
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name;
        },
        set: function set(val) {
            this._name = val;
        }
    }], [{
        key: 'notShow',
        value: function notShow() {
            return this.see = 'Car';
        }
    }]);

    return User;
}();

var Clone = function (_User) {
    _inherits(Clone, _User);

    function Clone(name) {
        _classCallCheck(this, Clone);

        return _possibleConstructorReturn(this, (Clone.__proto__ || Object.getPrototypeOf(Clone)).call(this, name));
    }

    _createClass(Clone, [{
        key: 'notShow',
        value: function notShow() {
            _get(Clone.prototype.__proto__ || Object.getPrototypeOf(Clone.prototype), 'notShow', this).call(this);
        }
    }]);

    return Clone;
}(User);

var user1 = new Clone();
console.log(user1.name); // get
user1.name = 'Dog';
user1.show(); // set

user1.notShow(); // static ERROR!!!
console.log(user1.see);