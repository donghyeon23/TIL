const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString()

let [N, answer] = [+input, []];

function star(i, j, N) {
    if (i % 3 === 1 && j % 3 === 1) {
        answer.push(' ')
    } else {
        if (N === 1) {
            answer.push('*')
        } else {
            star(Math.floor(i / 3), Math.floor(j / 3), Math.floor(N / 3))
        }
    }

}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        star(i, j, N)
    }
    answer.push('\n')
}

console.log(answer.join(''))