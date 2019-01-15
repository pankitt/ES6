/*function greed(greeting, name) {
    if (greeting !== undefined && name !== undefined) {
        console.log(`${greeting} ${name}`);
    } else if (greeting === undefined && name !== undefined) {
        console.log(`Hello ${name}`);
    } else if (greeting !== undefined && name === undefined) {
        console.log(`${greeting} friend`);
    } else {
        console.log(`Hello friend`);
    }
}*/

function greed(greeting = 'Hello', name = 'friend') {
    console.log(`${greeting} ${name}`);
}
greed('Hi', 'Cat');
greed('Hi');
greed(undefined, 'Cat');
greed();



//1
function sumES5() {
    console.log(arguments instanceof Array);
    let x = 0;

    // 1
    /*Array.prototype.forEach.call(arguments, function (value) {
        x += value;
    });*/
    // 2
    for(let i=0; i<arguments.length; i++) {
        x += arguments[i];
    }

    console.log(x);
}
//2
function sumES6(...values) {
    console.log(values instanceof Array);
    let x = 0;

    values.forEach(function (item) {
        x += item;
    });

    console.log(x);
}
//3
function sumES6new(...values) {
    console.log(values.reduce(function (prevValue, currentValue) {
        return prevValue + currentValue;
    }));
}


sumES5(5, 5, 2, 10);
sumES6(5, 5, 2, 10);
sumES6new(5, 5, 2, 10);