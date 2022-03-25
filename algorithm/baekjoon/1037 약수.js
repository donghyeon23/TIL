const fs = require("fs");
let [N, input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
input = input
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b);

console.log(input[0] * input[input.length - 1]);
