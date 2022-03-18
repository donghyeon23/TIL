const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n');

let before = input[1].split(' ').map(v => +v)
let after = [...new Set(before)].sort((a, b) => a - b);
let answer = [];
let map = new Map();

// for (num of before) {
//     let count = 0;
//     for (let i = 0; i < after.length; i++) {
//         if (num >= after[i]) count++
//     }
//     count--;
//     answer.push(count)
// }


// for (let i = 0; i < before.length; i++) {
//     answer.push(after.indexOf(before[i]))
// }



for (let i = 0; i < after.length; i++) {
    map.set(after[i], i)
}
for (let i = 0; i < before.length; i++) {
    answer.push(map.get(before[i]))
}



console.log(answer.join(' '))