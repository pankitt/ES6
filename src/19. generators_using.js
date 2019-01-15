/*
function* generator() {}
let generator = function () {};
let obj = {
    *generator() {}
};
class someClass {
    *generator() {}
}
*/

function* generator() {
    yield 1;
    yield 2;
}
let iterator = generator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());



function* generator2() {
   let result = 1 + (yield);
   console.log(`Result: ${result}`);
}
let iterator2 = generator2();
console.log(iterator2.next());
console.log(iterator2.next(1));




function* generator3() {
   let array = [yield, yield, yield];
   console.log(array[2]);
}
let iterator3 = generator3();
console.log(iterator3.next());
console.log(iterator3.next(1));
console.log(iterator3.next(2));
console.log(iterator3.next(3));




function* generator4() {
    yield 42;
    yield* [1, 2, 3];
    yield 43;
}
let iterator4 = generator4();
console.log(iterator4.next().value);
console.log(iterator4.next().value);
console.log(iterator4.next().value);
console.log(iterator4.next().value);
console.log(iterator4.next().value);
console.log(iterator4.next().value);




function* generateArray() {
    yield* [1, 2, 3];
}
function* generateArray_inn() {
    yield 42;
    yield* generateArray();
    yield 43;
}
let iteratorArray = generateArray_inn();
console.log(iteratorArray.next().value);
console.log(iteratorArray.next().value);
console.log(iteratorArray.next().value);
console.log(iteratorArray.next().value);
console.log(iteratorArray.next().value);
console.log(iteratorArray.next().value);




function* generateRT() {
    try {
        yield 1;
        yield 2;
        yield 3;
    }
    catch(e) {
        console.log(e);
    }
    
}
let iteratorRT = generateRT();
console.log(iteratorRT.next());
//console.log(iteratorRT.return());
console.log(iteratorRT.throw(new Error('Error!!!')));
console.log(iteratorRT.next());