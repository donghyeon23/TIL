// 문제 (https://programmers.co.kr/learn/courses/30/lessons/17681)

// 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
// 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
// "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
// 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.

// 입출력 예제
// 매개변수			값
// n				5
// arr1				[9, 20, 28, 18, 11]
// arr2				[30, 1, 21, 17, 28]
// 출력				["#####","# # #", "### #", "# ##", "#####"]


function solution(n, arr1, arr2) {
let bit_map =[]


for (let i= 0; i<n; i++) { // 한변 크기 만큼 반복 실시.
	bit_map[i] = (arr1[i]|arr2[i]).toString(2) // 1번 배열 i번째 값, 2번 배열 i번째 값을 비트 OR 연산 한 값을 bit_map 에 저장
    bit_map[i] = bit_add_zero(bit_map[i],n) // 한 변 크기 만큼 앞자리를 0으로 채우는 함수 호출  ex) n=5 일때 1010 > 01010 
	for (let j=0; j< bit_map[i].length; j++) { // bit_map 내 1일때 #로 , 0일때 공백으로 변경
		if (bit_map[i][j] == 1) {
			bit_map[i][j] = '#'
		} else {
			bit_map[i][j] = ' '
		}
		
	}
    bit_map[i] = bit_map[i].join('') // 문자열 내 변경이 안되어서 함수에서 .split() 상태로 보내준 것을 다시 .join() 하여 저장.
}
    return bit_map
}

function bit_add_zero(n, len) { // 문자열 자체를 바꾸는 방법을 찾지 못해서 .split() 이용하여 잘라서 주어진 길이만큼 '0' 넣기
	n = n.split('')
	while (n.length < len) {
		n.splice(0,0,'0')
	} 
	return n
}