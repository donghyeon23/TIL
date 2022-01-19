
let dartResult = '1D2S#10D'

let regex = /[^SDT#*]/g;
let regex2 = /[SDT#*]/g;

let result = [0,0,0];

dr_option = dartResult.split(regex).filter((a) => a != '')
dr_score = dartResult.split(regex2).filter((a) => a != '')

console.log(dr_score)
console.log(dr_option)


for(let i=0; i<dr_option.length; i++) {
	if (dr_option[i].search('D') != -1) {
		result[i] = Math.pow(dr_score[i],2)
	} else if (dr_option[i].search('T') != -1) {
		result[i] = Math.pow(dr_score[i],3)
	} else result[i] = dr_score[i]
}

for(let i=0; i<dr_score.length; i++) {
	if (dr_option[i].search('#') != -1) result[i] *= -1
	if (dr_option[i].search(/\*/) != -1) {
		if (i==0) result[i] *=2
		else {
			result[i] *=2
			result[i-1] *=2
		}
	}
}
console.log(result.reduce((acc, cur) => parseInt(acc)+ parseInt(cur),0))

// for(let i=0; i<dr.length; i++) {
// 	result[i] = dart_game(dr[i])
// }

// for(let i=0; i<dr.length; i++) {
// 	if (dr[i].search('#') != -1) result[i] *= -1
// 	if (dr[i].search(/\*/) != -1) {
// 		if (i==0) result[i] *=2
// 		else {
// 			result[i] *=2
// 			result[i-1] *=2
// 		}
// 	}
// }

// function dart_game(score) {
// 	let f = ['10','9','8','7','6','5','4','3','2','1','0']
// 	let goal = 0;
// 	for(let i=0; i <f.length; i++){
// 		if(score.search(f[i]) != -1) {
// 			console.log('숫자 발견',f[i])
// 			goal += Number(f[i])
// 			break
// 		}
// 	}
// 	if (score.search('D') != -1) {
// 		return Math.pow(goal,2)
// 	} else if (score.search('T') != -1) {
// 		return Math.pow(goal,3)
// 	}
// 	return goal
// }




// console.log(dr)
// console.log(result)
// console.log(dart_game('2S*'))