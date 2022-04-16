const fs = require("fs");
let [N, K] = fs
    .readFileSync("./dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v);

let spin = [];
let answer = [];
for (let i = 0; i < N; i++) {
    spin.push(i + 1);
}
let count = 0;
while (count < N) {
    for (let i = 1; i <= K; i++) {
        if (i === K) {
            answer.push(spin.shift());
        } else {
            spin.push(spin.shift());
        }
    }
    count++;
}

console.log(`<${answer.join(", ")}>`);
