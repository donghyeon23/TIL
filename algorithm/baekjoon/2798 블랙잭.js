const fs = require("fs");
let [nm, k] = fs
    .readFileSync("./dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map((v) => +v));
let sumList = [];
for (let i = 0; i < k.length; i++) {
    for (let j = 0; j < k.length; j++) {
        if (i === j) continue;
        for (let f = 0; f < k.length; f++) {
            if (j === f || i === f) continue;
            sumList.push(k[i] + k[j] + k[f]);
        }
    }
}

console.log(Math.max(...sumList.filter((e) => e <= nm[1])));
