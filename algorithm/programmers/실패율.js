// 문제 (https://programmers.co.kr/learn/courses/30/lessons/42889)

// 실패율은 다음과 같이 정의한다.
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

// 제한사항
// 스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
// stages의 길이는 1 이상 200,000 이하이다.
// stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
// 각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
// 단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
// 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.

// 입출력 예
// N	stages						result
// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
// 4	[4,4,4,4,4]					[4,1,2,3]

function solution(N, stages) {
let r_players = []; // 스테이지별 도달한 player 수를 저장하는 배열
let fail_rate = []; // 스테이지별 실패율 저장 하는 배열

let answer = [];

for (let i=0; i < N+1; i++) { // 총 stages + 1 만큼 반복 i (다 클리어 시 +1 이기때문)
	for(let j=0; j< stages.length; j++) { // 플레이어 수 만큼 반복 j
		if(stages[j] > i) { // j번째 플레이어가 도달한 stage 가 i스테이지 보다 높으면 i번째 스테이지 count up
			if(r_players[i] == undefined) r_players[i] = 1 
			else r_players[i]++
        } else { // j번째 플레이어가 i 스테이지 도달 하지 않았을때 , i 스테이지 배열에 값이 없으면 0
			if(r_players[i] == undefined) r_players[i] = 0
		}
		}
	}


for (let i=1; i < N+1; i++) { // 해당 스테이지에 머무는 숫자 = 다음스테이지 플레이어수 - 이전 스테이지 플레이어 수
	let check_0 = (r_players[i-1] - r_players[i])/r_players[i-1] // 도달한 유저 없을 시 0
	if (isNaN(check_0)) fail_rate.push(0) // 0/0 시 NaN 반환되어 isNaN() 사용하여 NaN 일때 0 반환
	else fail_rate.push((r_players[i-1] - r_players[i])/r_players[i-1]) // 실패율 = 머무르는 숫자 / 도달한 숫자
}

for (let i=0; i < N; i++) {
	let temp = fail_rate.indexOf(Math.max(...fail_rate)) // 실패율이 가장 높은 스테이지 index 값 찾기
 	answer[i] = temp +1 // 출력에 해당 index +1 로 스테이지 값 넣기
	fail_rate[temp] = -1 // 실패율 가장 높은 스테이지 -1로 변경 후 스테이지 수 만큼 반복
}
    return answer
}