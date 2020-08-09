const dotenv = require('dotenv');
dotenv.config()
const { parseFuncArgs } = require('../lib');

function test(a, b, c, ...d) {

}

// function test({ a = e, b: f, c: g }) {
//     return;
// }

// function whois({ displayName, fullName: { firstName: name } }) {
//     return `${displayName} is ${name}`;
// }

// test({ a: 1, b: { e: 3, f: 4 }, c: 3 })

console.log(parseFuncArgs(test))
