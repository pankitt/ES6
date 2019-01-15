let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr0 = [0, ...arr1, ...arr2];

console.log(arr0);

function add(x, y, z) {
    console.log(x + y + z);
}
add(...arr1);