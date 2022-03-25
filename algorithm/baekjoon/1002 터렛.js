const fs = require("fs");
let [T, ...input] = fs
    .readFileSync("./dev/stdin")
    .toString()
    .trim()
    .split("\n");

let xyr = input.map((v) => v.split(" ").map((v) => +v));
let ans = '';
for (let i = 0; i < +T; i++) {
    let [x1, y1, r1, x2, y2, r2] = xyr[i];

    let dx = x1 - x2;
    let dy = y1 - y2;

    let pd = Math.sqrt(dx ** 2 + dy ** 2);
    let sum = r1 + r2;
    let sub = Math.abs(r1 - r2);

    if (pd === 0 && sub === 0) {
        ans += -1 +'\n';
        continue;
    }
    if (pd > sum || pd < sub) {
        ans += 0 +'\n';
        continue;
    }
    if (pd === sub || pd === sum) {
        ans += 1 +'\n';
        continue
    }
    ans += 2 +'\n';
}

console.log(ans)
