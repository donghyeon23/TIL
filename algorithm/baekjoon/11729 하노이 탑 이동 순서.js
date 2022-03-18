const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString()
let result = [];
let count = 0;

// start 시작 위치
// to 목표 위치
// via 중간 위치


function hanoi(N, start, to, via) { // 하노이탑
    if (N === 0) { // 목표가 0 될때 까지
        return;
    } else {
        hanoi(N - 1, start, via, to) //  hanoi(N-1) 2번 실행
        result.push(`${start} ${to}`) // result 에 이동 내용 push
        count++;
        hanoi(N - 1, via, to, start)
    }
}

hanoi(+input, 1, 3, 2)
console.log(count)
console.log(result.join('\n'))
