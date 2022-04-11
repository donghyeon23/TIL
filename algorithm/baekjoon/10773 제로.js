const fs = require("fs");
let [T, ...input] = fs
    .readFileSync("./dev/stdin")
    .toString()
    .trim()
    .split("\n");
input = input.map((v) => +v);
let stack = [];
for (let i = 0; i < T; i++) {
    if (input[i] === 0) {
        if (stack.length !== 0) stack.pop();
        continue;
    } else {
        stack.push(input[i]);
    }
}
console.log(stack.reduce((pre, cur) => pre + cur, 0));
