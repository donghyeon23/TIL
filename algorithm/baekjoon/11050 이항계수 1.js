const fs = require("fs");
const [N, K] = fs.readFileSync("./dev/stdin").toString().trim().split(" ").map((v) => +v);

let n = 1;
let k = 1
let n_k = 1

for (let i = 1; i <= N; i++) n *= i;
for (let i = 1; i <= K; i++) k *= i;
for (let i = 1; i <= N - K; i++) n_k *= i;

console.log(n / (k * n_k));
