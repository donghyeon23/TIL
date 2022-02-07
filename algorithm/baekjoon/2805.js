const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n');

let [N, M] = input[0].split(' ').map(v => +v)
let [...trees] = input[1].split(' ').map(v => +v)

trees.sort((a, b) => a - b)

const cutTreeSum = (trees, height) => {
    let cutTree = 0;
    for (tree of trees) {
        if (tree - height > 0) cutTree += tree - height;
    }
    return cutTree
}

const findHeight = (trees, M) => {
    let cutHeight = 0;
    let min = 0;
    let mid = 0;
    let max = trees[trees.length - 1];
    while (min <= max) {
        mid = Math.floor((min + max) / 2);
        if (cutTreeSum(trees, mid) < M) {
            max = mid - 1;
        } else if (cutTreeSum(trees, mid) >= M) {
            min = mid + 1;
            cutHeight = mid;
        }
    }
    return cutHeight
}

console.log(findHeight(trees, M))


