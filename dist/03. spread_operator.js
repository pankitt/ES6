"use strict";

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr0 = [0].concat(arr1, arr2);

console.log(arr0);

function add(x, y, z) {
    console.log(x + y + z);
}
add.apply(undefined, arr1);