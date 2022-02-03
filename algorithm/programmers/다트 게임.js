// 문제 (https://programmers.co.kr/learn/courses/30/lessons/17682)

// 다트 게임은 총 3번의 기회로 구성된다.
// 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
// 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
// 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
// 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
// Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
// 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
// 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.


// 입력 
// 점수 | 보너스 | 옵션 으로 이루어진 문자열 3세트.
let dartResult = '1D2S#10D'

// 정규식 1 = S,D,T,#,* 와 대응하지 않는
// 정규식 2 = S,D,T,#,* 와 대응 하는 문자
let regex = /[^SDT#*]/g;
let regex2 = /[SDT#*]/g;

let result = [0,0,0];

// dr_option 문자,#,* 기준으로 split 하여 빈 요소 삭제 => 보너스  (+ 옵션) 만 남음
dr_option = dartResult.split(regex).filter((a) => a != '')

// dr_score 문자,#,* 와 대응하지 않는 문자 기준으로 split 해서 빈 요소 삭제 => 점수만 남음
dr_score = dartResult.split(regex2).filter((a) => a != '')

console.log(dr_score)
console.log(dr_option)

// 보너스 S , D , T 확인 후 점수 계산
for(let i=0; i<dr_option.length; i++) {
	// D 일때 2제곱
	if (dr_option[i].search('D') != -1) {
		result[i] = Math.pow(dr_score[i],2)
	} else if (dr_option[i].search('T') != -1) {
		// T 일때 3제곱
		result[i] = Math.pow(dr_score[i],3)
	} else result[i] = dr_score[i] // S 일때 1제곱
}

// 옵션 적용 후 점수 계산
for(let i=0; i<dr_score.length; i++) {
	// str.search(a) => str 내 a가 있을 시 인덱스 반환, 없으면 -1
	if (dr_option[i].search('#') != -1) result[i] *= -1 // # = 아차상 , 해당 점수 - 로 바꾸기
	if (dr_option[i].search(/\*/) != -1) { // * 스타상 = 해당 점수 와 전 점수 2배. (중첩가능)
		if (i==0) result[i] *=2 // 첫번째에 올때는 첫번째 점수만 2배
		else { // 그외 자리일때
			result[i] *=2
			result[i-1] *=2
		}
	}
}
// .reduce() 이용하여 result 내 점수 합산 실시.
console.log(result.reduce((acc, cur) => parseInt(acc)+ parseInt(cur),0))
