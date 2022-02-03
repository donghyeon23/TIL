// 문제 (https://programmers.co.kr/learn/courses/30/lessons/1845)

// 제한사항
// 전체 학생의 수는 2명 이상 30명 이하입니다.
// 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
// 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

// 입출력 예
// n	lost		reserve		return
// 5	[2, 4]		[1, 3, 5]	5
// 5	[2, 4]		[3]			4
// 3	[3]			[1]			2

function solution(n, lost, reserve) {
let status = []

for(let i=0; i< n; i++) { // 인원 수 만큼 1의 값을 가지는 배열 생성
	status[i] = 1
}

for(let i=0; i<reserve.length; i++) { // 여벌 체육복 가져온 인원들의 수량 +1
	status[reserve[i]-1]++
}

for(let i=0; i<lost.length; i++) { // 도난 당한 인원들 수량 -1
	status[lost[i]-1]--
}


let m_c = 0; // - 카운트
// 여벌 있으면서, 옆자리에 도난당한 사람 있으면 빌려주기
for (let i=1; i< status.length; i++){ // 인원 수 만큼 반복
	if (status[i-1] == 2 && status[i] == 0) { // 1번과 2번 비교 후 2, 0 or 0,2 일때 1,1로 변환 실시.
		status[i-1] = 1
		status[i] = 1
	} else if (status[i-1] == 0 && status[i] == 2) {
		status[i-1] = 1
		status[i] = 1	
	}
}
// 체육복 없는 친구 count
for (let i =0; i<status.length; i++) { 
	if (status[i] == 0) m_c++
    }  
 return n-m_c   // 인원수 - 없는 친구 수
}