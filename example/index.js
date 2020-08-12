const dotenv = require('dotenv');
dotenv.config()
const { parseFuncArgs } = require('../lib');

// function test(a, b, c, ...d) {
// }

// function test({ a, b }) {

// }

// function test({ a = e, b: f, c: g }) {
//     return;
// }
// function test({ displayName, fullName: { firstName: name } }) {
//     return `${displayName} is ${name}`;
// }

// function test(a, { displayName, fullName: { firstName: name, foo: bar } }) {
//     return `${a} ${displayName} is ${name} is ${bar}`;
// }

// function test({ size = 'big', coords = { x: 0, y: 0 }, radius = 25 } = {}) {
//     console.log(size, coords, radius);
//     // do some chart drawing
// }

function test([, , ...c]) {
    return a + b;
}

// test({ a: 1, b: { e: 3, f: 4 }, c: 3 })

console.log(parseFuncArgs(test))


