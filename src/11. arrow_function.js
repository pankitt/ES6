function add(x, y) {
    return x + y;
}
console.log(add(2, 5));

let add_arr = (x, y) => x + y;
console.log(add_arr(2, 5));

let square = function (x) {
    return x * x;
};
console.log(square(5));

let square_arr = (x) => x * x;
console.log(square_arr(5));

let giveMeAnswer = function () {
    return 42;
};
console.log(giveMeAnswer());

let giveMeAnswer_arr = () => 42;
console.log(giveMeAnswer_arr());

let log = function () {
    console.log('logging');
};
log();

let log_arr = () => console.log('logging');
log_arr();

let multiply = function (x, y) {
    let result = x *y;
    return result;
};
console.log(multiply(2, 5));

let multiply_arr = (x, y) => {
    let result = x * y;
    return result;
};
console.log(multiply_arr(2, 5));

let getPerson = function () {
    return { name: 'Cat' };
};
console.log(getPerson());

let getPerson_arr = () => ({ name: 'Cat' });
console.log(getPerson_arr());

(function () {
    console.log('IIFE');
})();

(() => console.log('IIFE'))();




let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;
/*numbers.forEach(function (i) {
    sum += i;
});*/
numbers.forEach(i => sum += i);
console.log(sum);

/*let squared = numbers.map(function (i) {
    return i * i;
});*/
let squared = numbers.map(i => i * i);
console.log(squared);




/*let person = {
    name: 'Dog',
    greet: function () {
        let that = this;
        setTimeout(function () {
            console.log('My name is ' + that.name);
            console.log(that);
            console.log(this);
        }, 2000);
    }
};*/
let person = {
    name: 'Dog',
    greet: function () {
        setTimeout(() => {
            console.log('My name is ' + this.name);
            console.log(this);
        }, 2000);
    }
};
person.greet();




let Test = () => console.log('Test Test Test');
let test = new Test();