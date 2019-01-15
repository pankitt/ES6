function greet(name) {
    console.log(`hello ${name}`.toUpperCase());
}
greet(`Igor`);

function createEmail(to, from, subject, message) {
    console.log(`
        To: ${to},
        From: ${from},
        Subject: ${subject},
        Message: ${message}
    `);
}
createEmail(`delfa_to@gmail.com`, `delfa_from@gmail.com`, `Hello`, `How are you?`);

function add(x, y) {
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}
add('2', '2');

let name = 'Cat';
console.log(`Hello ${name}`.toUpperCase());
let name2 = 'Dog';
console.log(`Hello ${name2}`.toUpperCase());
console.log(upperName `I am ${name} not ${name2}`);

function upperName(literals, ...values) {
    return literals[0] + values[0].toUpperCase() + literals[1] + values[1].toUpperCase();
}