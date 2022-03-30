const fs = require("fs");
let [N, ...input] = fs
    .readFileSync("./dev/stdin")
    .toString()
    .trim()
    .split("\n");
N = +N;
input = input.map((v) => +v);
let compare = [];
let ans = [];

let NO = false;
let count = 1;

for (let i = 0; i < N; i++) {
    while (count <= input[i]) {
        compare.push(count++);
        ans.push("+");
    }

    let comparePop = compare.pop();
    if (comparePop === input[i]) {
        ans.push("-");
    } else {
        NO = true;
        break;
    }
}

NO ? console.log("NO") : console.log(ans.join("\n"));
