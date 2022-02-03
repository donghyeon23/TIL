// 문제 (https://programmers.co.kr/learn/courses/30/lessons/1845)

// 제한사항
// nums는 폰켓몬의 종류 번호가 담긴 1차원 배열입니다.
// nums의 길이(N)는 1 이상 10,000 이하의 자연수이며, 항상 짝수로 주어집니다.
// 폰켓몬의 종류 번호는 1 이상 200,000 이하의 자연수로 나타냅니다.
// 가장 많은 종류의 폰켓몬을 선택하는 방법이 여러 가지인 경우에도, 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 return 하면 됩니다.

// 입출력 예
// nums					result
// [3,1,2,3]			2
// [3,3,3,2,2,4]		3
// [3,3,3,2,2,2]		2

function solution(nums) {
    let answer = 0;
    let n = nums.length
    let arr = [...new Set(nums)] // Set 사용하여 nums 내 중복 제거 한 뒤, [...Array] 스프레드 연산자 사용해 다시 arr 반환


    return arr.length > parseInt(n/2) ? parseInt(n/2) : arr.length // arr 길이가 첫 포켓몬 수/2 보다 크면 포켓몬/2 반환 , 아니면 arr 일이 반환
}