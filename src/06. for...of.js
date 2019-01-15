let sports = ['football', 'hockey', 'basketball', 'baseball', 'rugby'];

//1
sports.forEach(function (i) {
    console.log(i);
});
console.log('***');

//2
for (let i=0; i<sports.length; i++) {
  console.log(sports[i]);
}
console.log('***');

//3
for (let i in sports) {
    console.log(sports[i]);
}
console.log('***');

//4
for (let i of sports) {
    console.log(i);
}
console.log('***');
