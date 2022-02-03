// 문제 (https://programmers.co.kr/learn/courses/30/lessons/67256)

// 
// 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
// 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
// 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
// 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
// 4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.

// 입출력 예
// numbers									hand		result
// [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]		"right"		"LRLLLRLLRRL"
// [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]		"left"		"LRLLRRLLLRR"
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]			"right"		"LLRLLRLLRL"

// numbers = 누를 번호, hand = 주손
function solution(numbers, hand) {
    let answer = []
	// l_pos , r_pos 각각 왼손, 오른손 위치
	// *, # 일때 의 위치를 각각 0에서 왼쪽, 오른쪽 으로 구분
    let l_pos = -1
    let r_pos = 1
    
	// 번호 개수 만큼 반복문 사용
    for(let i=0; i<numbers.length; i++) {
        if(numbers[i] % 3 == 1) { // 번호가 1 , 4, 7 일때 L 추가 및 해당 번호로 위치 변경
            answer.push('L')
		    l_pos = numbers[i]
        } else if (numbers[i] == 3 || numbers[i] == 6 || numbers[i] == 9) { // 번호가 3,6,9 일때 R 추가 및 해당 번호로 위치 변경.
            answer.push('R')
            r_pos = numbers[i]
        } else { // 2,5,8,0 일때 현재 위치와 target 까지의 차이 구하는 함수 gap(pos,target,hand)) 호출
            let l_gap = gap(l_pos,numbers[i],'l')
		    let r_gap = gap(r_pos,numbers[i],'r')
            if (l_gap > r_gap) { // 왼손이 더 멀리 떨어져있을때
			    answer.push('R')
			    r_pos = numbers[i]
		    } else if (l_gap < r_gap) { // 오른손이 더 멀리 떨어져있을때
			    answer.push('L')
			    l_pos = numbers[i]
		    } else { // 차이가 같을때 주손에 따라 사용
			    if (hand == "right") {
				    answer.push('R')
				    r_pos = numbers[i]
			    } else {
				    answer.push('L')
				    l_pos = numbers[i]
			    }
            }
            
        }
    } return answer.join('')
}

// 몇 칸 차이인지 확인 하는 함수
function gap(pos, target, hand) {
	let center_pad = [2,5,8,0]
	let gap = 0;
	let idx = 0;

	if (center_pad.includes(pos)) { // 현재 위치가 2,5,8,0 일때 center_pad 의 인덱스 값 차이 가 곧 gap
		return Math.abs(center_pad.indexOf(pos)-center_pad.indexOf(target)) // Math.abs(num) 해당 수의 절대값 반환
	} else {
		if (hand == 'r') { // 좌우 구분하여 오른손일시 pos -1 하여 2,5,8,0으로 이동 / 1칸 이동
			pos-- 
			gap++
		} else { // 왼손일시 pos + 1 하여 2,5,8,0 이동 / 1칸 이동
			pos++
			gap++
		}
	}
	if (pos == target) return gap // pos _+ 연산 후 target 위치 이면 gap 반환
	else { // pos 연산하여 2,5,8,0 으로 이동 후 index 값 차이 + gap 반환
		idx = Math.abs(center_pad.indexOf(pos)-center_pad.indexOf(target))
		
		return gap+idx
	}
}