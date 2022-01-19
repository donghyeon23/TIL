// 프로그래머스 - 코딩테스트연습 > 정렬 > K번째 수
// https://programmers.co.kr/learn/courses/30/lessons/42748

// 문제 설명
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// array의 길이는 1 이상 100 이하입니다.
// array의 각 원소는 1 이상 100 이하입니다.
// commands의 길이는 1 이상 50 이하입니다.
// commands의 각 원소는 길이가 3입니다.
// 입출력 예
// array					commands							return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]

function solution(array, commands) {
    let result = [];
    for (let i = 0; i < commands.length; i++) { // 2차원 배열 의 개수 만큼 반복
        if (commands[i][0] == 0) // commands 내 i ,j 원소가 i,j 번째로 쓰이기 때문에 index번호로 쓰기 위해 0일때 1로 변경
            commands[i][0] = 1
        if (commands[i][2] == 0) // commands 내 i ,j 원소가 i,j 번째로 쓰이기 때문에 index번호로 쓰기 위해 0일때 1로 변경
            commands[i][2] = 1
        result[i] = array
            .slice((commands[i][0]) - 1, commands[i][1]) // arr.slice(a, b)  arr의 index a 부터 b 까지 자른다
            .sort((a, b) => a - b)[commands[i][2] - 1] // .sort() 로 정렬해서 k 번째 수를 반환 받아 result 배열에 담는다
    }
    return result
}



//다른 사람의 map() 함수 사용한 풀이.
let array = [1, 5, 2, 6, 3, 7, 4]
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

let next_array = commands.map(command => {
	let [sPosition,ePosition,position] = command
	let newArray = array.filter((value,fIndex) => fIndex >= sPosition -1 && fIndex <= ePosition -1).sort((a,b) => a -b)

	return newArray[position - 1]
	})

console.log(next_array)
