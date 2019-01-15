'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var sports = ['football', 'hockey', 'basketball', 'baseball', 'rugby'];

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
var foot = 'football',
    hock = 'hockey',
    bask = 'basketball',
    base = 'baseball',
    rugb = 'rugby';


console.log(foot, hock, bask, base, rugb);

var scores = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var low = scores[0],
    high = scores[2],
    rest = scores.slice(3);

console.log(low, high, rest);

var scores2 = [1, [2, 3]];

var low2 = scores2[0],
    _scores2$ = _slicedToArray(scores2[1], 2),
    mid21 = _scores2$[0],
    mid22 = _scores2$[1],
    _scores2$2 = scores2[2],
    high2 = _scores2$2 === undefined ? 4 : _scores2$2;

console.log(low2, mid21, mid22, high2);

function compScore(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        low = _ref2[0],
        mid = _ref2[1];

    console.log(low, mid);
}
compScore([33, 44]);

function getLeagues() {
    return ['NHL', 'KHL', 'CHL'];
}
var leagues = getLeagues();
console.log(leagues);

var _getLeagues = getLeagues(),
    _getLeagues2 = _slicedToArray(_getLeagues, 3),
    amer = _getLeagues2[0],
    asia = _getLeagues2[1],
    euro = _getLeagues2[2];

console.log(amer, asia, euro);

var yes = 'Yes';
var no = 'No';

var _ref3 = [no, yes];
yes = _ref3[0];
no = _ref3[1];

console.log('Yes is', yes);
console.log('No is', no);