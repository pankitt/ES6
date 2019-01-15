var buttons = document.querySelectorAll('button');

for(let i=0; i<buttons .length; i++) {
    var but = buttons[i];
    but.innerText = i;

    but.onclick = function () {
        console.log(i);
    };
}

