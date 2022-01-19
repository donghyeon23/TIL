let board = [
			[0,0,0,0,0],
			[0,0,1,0,3],
			[0,2,5,0,1],
			[4,2,4,4,2],
			[3,5,1,3,1]
			]

let moves = [1,5,3,5,1,2,1,4]

let box = []
let answer = 0;

for(let i=0; i<moves.length; i++) {
	for(let j=0; j<board.length; j++) {
		if(board[j][moves[i]-1] != 0) {
			console.log(board)
			console.log(moves[i],'번째 열에서 옮긴다.' , board[j][moves[i]-1], '얘를')
			if (box[box.length-1] != board[j][moves[i]-1]){
				box.push(board[j][moves[i]-1])
				board[j][moves[i]-1] = 0
				console.log(box)
				break
			} else {
				box.pop()
				board[j][moves[i]-1] = 0
				answer += 2
				console.log(box)
				break
			}
		}
	}
}


let box2 = [];
console.log(answer)
console.log(board)