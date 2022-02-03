
// 문제 ( https://programmers.co.kr/learn/courses/30/lessons/64061 )

// [제한사항]
// board 배열은 2차원 배열로 크기는 "5 x 5" 이상 "30 x 30" 이하입니다.
// board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
// 0은 빈 칸을 나타냅니다.
// 1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타냅니다.
// moves 배열의 크기는 1 이상 1,000 이하입니다.
// moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다.

// 각 인형 위치, 종류가 들어있는 2차원 배열
let board = [
			[0,0,0,0,0],
			[0,0,1,0,3],
			[0,2,5,0,1],
			[4,2,4,4,2],
			[3,5,1,3,1]
			]

// 인형 뽑는 순서
let moves = [1,5,3,5,1,2,1,4]


// 바구니 생성
let box = []
let answer = 0;

// 인형 뽑는 수 만큼 반복 (i))
for(let i=0; i<moves.length; i++) {
	// 2차원 배열 rows 만큼 반복(j))
	for(let j=0; j<board.length; j++) {

		//  j 행, 목표 열에 요소가 있을때
		if(board[j][moves[i]-1] != 0) {

			// 바구니에 들어있는 마지막 인형과 현재 찾은 인형이 일치하지 않으면
			if (box[box.length-1] != board[j][moves[i]-1]){
				// 해당 인형 바구니로 옮긴 후 board 에서 삭제 
				box.push(board[j][moves[i]-1])
				board[j][moves[i]-1] = 0
				console.log(box)
				break
			} else { 
				// 바구니 마지막 인형과 크레인 인형 같을 시
				// 바구니에서 삭제 후 count + 2
				box.pop()
				board[j][moves[i]-1] = 0
				answer += 2
				console.log(box)
				break
			}
		}
	}
}


console.log(answer)
console.log(board)