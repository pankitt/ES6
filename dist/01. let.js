'use strict';

var buttons = document.querySelectorAll('button');

var _loop = function _loop(i) {
    but = buttons[i];

    but.innerText = i;

    but.onclick = function () {
        console.log(i);
    };
};

for (var i = 0; i < buttons.length; i++) {
    var but;

    _loop(i);
}