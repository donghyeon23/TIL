// node js 입력 표준
const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n');


let T = +input.shift(); // 테스트 케이스 개수
let idx = 0;

let clothesList = {}; // key : value 값을 가지는 obj 생성.

for (let i = 0; i < T; i++) {
    let n = +input[idx++]; // 아이템 개수
    let clothes = input.slice(idx, idx + n); // 개수 만큼 불러오기

    for (cloth of clothes) { // 리스트 내 항목의 옷 종류 : 개수 로 count 실시.
        let o = cloth.split(' ')[1]
        if (!clothesList[o]) clothesList[o] = 1;
        else clothesList[o]++;
    }

    // obj 내 값들에 +1 (해당 옷 종류를 안입는 경우) 하여 옷 종류 만큼 곱해준 뒤
    // 전체 값에서 -1 (옷을 아예 안입는 경우)를 빼주었다.
    console.log(Object.values(clothesList).reduce((a, b) => a * (b + 1), 1) - 1);

    // idx 숫자를 아이템 개수 만큼 + 하여 다음 케이스 탐색
    idx += n;

    // obj 초기화;
    clothesList = {};
}

