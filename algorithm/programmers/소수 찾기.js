// 프로그래머스 - 코딩테스트연습 - 소수찾기
// https://programmers.co.kr/learn/courses/30/lessons/12921

// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// 	n은 2이상 1000000이하의 자연수입니다.

// 입출력 예
// n		result
// 10		4
// 5		3


function solution(n) {
    let arr = Array(n+1).fill(true).fill(false,0,2) //     0 ~ n 까지 기본값 true 로 배열 생성 0,1은 false 처리

for (let i=2; i*i <=n; i++) { //  2부터 시작하여 root n의 배수 까지 false 처리
	if(arr[i]) {
//      j = i*i 가 되는 이유는 5 면 2의 배수, 3의 배수, 4의 배수에서 지워졌기 때문.
//      n 까지의 수에서 i의 배수마다 false
		for (let j=i*i; j<=n; j+=i) arr[j] = false
	}
//    arr 에서 true 개수만 세어서 return
} return arr.filter(e => e).length
}