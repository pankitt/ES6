let firstName = 'Tom',
    lastName = 'Cat',
    email = 'tomcat@gmail.com';

let person = {
    firstName,
    lastName,
    email,
    sayHello() {
       console.log(`Hi! ${this.firstName} ${this.lastName}`);
    },
    // ES6
    get fullName() {
        return this.firstName + ' '  + this.lastName + ' - ' + this.email;
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
    return {
        [property]: value,
        ['_' + property]: value,
        [property + '__2']: value,
        [property.toLowerCase()]: value,
        ['get__' + property]() {
            return this[property];
        }
    }
}
console.log(createCar_ES6('ES6', 200));