let person = {
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
let {['first' + 'name']: first, lastname: last, age = 25} = {firstname: 'Tom', lastname: 'Cat'};
console.log(first, last, age);





let user = {
    firstname: 'Sem',
    lastname: 'Dog',
    social: {
        facebook: 'semdog',
        twitter: '@sdog'
    }
};

let {firstname: fn, lastname: ln, social: {facebook: fb, twitter: tw}, test = 15} = user;
console.log(fn, ln, fb, tw, test);



// ES5
/*function  post(url, config) {
    config.data;
    config.cache;
    console.log(url, config.data, config.cache);
}*/

// ES 6
function  post(url, {data: {firstname, lastname}, cache}) {
    console.log(url, /*data,*/ firstname, lastname, cache);
}

let result = post('api/users', { data: user, cache: false });




function getUserInfo() {
    return {
        one: 'Ham',
        two: 'Animal',
        three: {
            feb: 'hamani',
            twi: 'hani'
        }
    }
}

let { one, two, three: {feb, twi} } = getUserInfo();
console.log(one, two, feb, twi);