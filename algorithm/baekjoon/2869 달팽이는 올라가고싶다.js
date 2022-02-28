const fs = require("fs");
let [a, b, v] = fs
    .readFileSync("./dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v);
(v - a) % (a - b) === 0
    ? console.log(Math.floor((v - a) / (a - b)) + 1)
    : console.log(Math.floor((v - a) / (a - b)) + 2);
