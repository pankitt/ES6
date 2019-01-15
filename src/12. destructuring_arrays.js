let sports = ['football', 'hockey', 'basketball', 'baseball', 'rugby'];

// ES5
/*let foot = sports[0];
let hock = sports[1];
let bask = sports[2];
let base = sports[3];
let rugb = sports[4];*/

// ES6
/*let foot, hock, bask, base, rugb;
[foot, hock, bask, base, rugb] = sports;*/

//let [foot, hock, bask, base, rugb] = sports;
let [foot, hock, bask, base, rugb] = ['football', 'hockey', 'basketball', 'baseball', 'rugby'];

console.log(foot, hock, bask, base, rugb);




let scores = [1, 2, 3, 4, 5, 6, 7 , 8, 9];
let [low, , high, ...rest] = scores;
console.log(low, high, rest);

let scores2 = [1, [2, 3]];
let [low2, [mid21, mid22], high2 = 4] = scores2;
console.log(low2, mid21, mid22, high2);

function compScore([low, mid]) {
    console.log(low, mid);
}
compScore([33, 44]);





function getLeagues() {
    return ['NHL', 'KHL', 'CHL']
}
let leagues = getLeagues();
console.log(leagues);
let [amer, asia, euro] = getLeagues();
console.log(amer, asia, euro);





let yes = 'Yes';
let no = 'No';

[yes, no] = [no, yes];
console.log('Yes is', yes);
console.log('No is', no);