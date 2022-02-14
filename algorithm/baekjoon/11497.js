const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n');

let idx = 0;
let T = +input[idx++];

const getBest = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) newArr.push(arr[i])
        else {
            newArr.unshift(arr[i])
        }
    }
    return newArr
}

const getDifference = (arr) => {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            answer.push(Math.abs(arr[i] - arr[0]))
        } else {
            answer.push(Math.abs(arr[i] - arr[i + 1]))
        }
    }
    return Math.max(...answer)
}


let answer = [];
for (let i = 0; i < T; i++) {
    let N = +input[idx++];
    let arr = input[idx++].split(' ').map(v => +v).sort();
    answer.push(getDifference(getBest(arr)))
    answer.push('\n')
}

console.log(answer.join(''))