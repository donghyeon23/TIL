const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim();

input = input.split("-").map((v) => v.split("+").map((v) => +v).reduce((a, b) => a + b, 0));

console.log(input.reduce((a, b) => (a -= b)));
