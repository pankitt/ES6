'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firstName = 'Tom',
    lastName = 'Cat',
    email = 'tomcat@gmail.com';

var person = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    sayHello: function sayHello() {
        console.log('Hi! ' + this.firstName + ' ' + this.lastName);
    },

    // ES6
    get fullName() {
        return this.firstName + ' ' + this.lastName + ' - ' + this.email;
    },
    set fullName(value) {
        this.firstName = value;
    }
};
console.log(person);
person.sayHello();

// ES5
/*Object.defineProperty(person, 'fullName', {
    get: function () {
        return this.firstName + ' '  + this.lastName + ' - ' + this.email;
    },
    set: function (value) {
        this.firstName = value;
    }
});*/
console.log(person.fullName);
console.log(person);

/*console.log(person.firstName);
console.log(person['firstName']);

let property = 'firstName';
console.log(person[property]);

person = {
  [property]: 'Dog'
};
console.log(person[property]);*/

function createCar_ES5(property, value) {
    var car = {};
    car[property] = value;
    return car;
}
console.log(createCar_ES5('ES5', 150));

function createCar_ES6(property, value) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, property, value), _defineProperty(_ref, '_' + property, value), _defineProperty(_ref, property + '__2', value), _defineProperty(_ref, property.toLowerCase(), value), _defineProperty(_ref, 'get__' + property, function () {
        return this[property];
    }), _ref;
}
console.log(createCar_ES6('ES6', 200));