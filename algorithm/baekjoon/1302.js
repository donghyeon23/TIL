// 입력 표준
const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n');


let n = input[0]; // 총 판매 개수
let arr = input.slice(1, n + 1); // 전체 판매 책 목록 리스트

arr.sort(); // 문자열 오름차순 정렬

let sellList = {}; // 빈 obj 생성

for (let book of arr) { // 반복문 사용하여 book : 판매량count
    if (!sellList[book]) {
        sellList[book] = 1;
    } else {
        sellList[book] += 1;
    }
}

let BookList = Object.keys(sellList) // 오브젝트 내 키값 = 북내용 반환
let bestSell = Math.max(...Object.values(sellList)) // 판매량 count 중 최대값

let bestSeller = BookList.find(key => sellList[key] === bestSell)
// 북리스트에서 최대값이랑 일치하는 값 반환

console.log(bestSeller)