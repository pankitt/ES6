let symbol = Symbol('name');
let symbol2 = Symbol('name');
//console.log(typeof symbol);
console.log(symbol);
console.log(symbol2);
console.log(symbol === symbol2); //  false


let symbol3 = Symbol.for('name');
let symbol4 = Symbol.for('name');
console.log(symbol3);
console.log(symbol4);
console.log(symbol3 === symbol4); // true



let symbolZ = Symbol.for('namesZ');
let name = Symbol.keyFor(symbolZ);
console.log(symbolZ);
console.log(name);


console.log('**********************');



let surname = Symbol();
let user = {
    username: 'r2d2',
    [Symbol.for('password')]: 'c3po',
    [surname]: 'Star',
    surname: '1111'
};
console.log(user[Symbol.for('password')]);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(Object.getOwnPropertySymbols(user));

let password = user[Symbol.for('password')];
console.log(password);



console.log('**********************');



let object = {
    iterator: 111,
    [Symbol.iterator](){}
};
console.log(object.iterator);






