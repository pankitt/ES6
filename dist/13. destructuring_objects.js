'use strict';

var person = {
    firstname: 'Tom',
    lastname: 'Cat'
};

// ES5
/*let firstname = person.firstname;
let lastname = person.lastname;*/

// ES6
//let {firstname, lastname} = person;
//let {firstname: first, lastname: last} = person;
//let {firstname: first, lastname: last, age = 25} = {firstname: 'Tom', lastname: 'Cat'};
var _firstname$lastname = { firstname: 'Tom', lastname: 'Cat' },
    first = _firstname$lastname['first' + 'name'],
    last = _firstname$lastname.lastname,
    _firstname$lastname$a = _firstname$lastname.age,
    age = _firstname$lastname$a === undefined ? 25 : _firstname$lastname$a;

console.log(first, last, age);

var user = {
    firstname: 'Sem',
    lastname: 'Dog',
    social: {
        facebook: 'semdog',
        twitter: '@sdog'
    }
};

var fn = user.firstname,
    ln = user.lastname,
    _user$social = user.social,
    fb = _user$social.facebook,
    tw = _user$social.twitter,
    _user$test = user.test,
    test = _user$test === undefined ? 15 : _user$test;

console.log(fn, ln, fb, tw, test);

// ES5
/*function  post(url, config) {
    config.data;
    config.cache;
    console.log(url, config.data, config.cache);
}*/

// ES 6
function post(url, _ref) {
    var _ref$data = _ref.data,
        firstname = _ref$data.firstname,
        lastname = _ref$data.lastname,
        cache = _ref.cache;

    console.log(url, /*data,*/firstname, lastname, cache);
}

var result = post('api/users', { data: user, cache: false });

function getUserInfo() {
    return {
        one: 'Ham',
        two: 'Animal',
        three: {
            feb: 'hamani',
            twi: 'hani'
        }
    };
}

var _getUserInfo = getUserInfo(),
    one = _getUserInfo.one,
    two = _getUserInfo.two,
    _getUserInfo$three = _getUserInfo.three,
    feb = _getUserInfo$three.feb,
    twi = _getUserInfo$three.twi;

console.log(one, two, feb, twi);