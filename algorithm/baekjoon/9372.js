const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

console.log(input)
let idx = 0;
let tc = +input[idx++]; // 0

for (let i = 0; i < tc; i++) {
    let [n, m] = input[idx++].split(' ').map(v => +v)
    idx += m
    console.log(n - 1)
}

