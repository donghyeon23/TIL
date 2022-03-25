const fs = require("fs");
let [T, ...k] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
k = k.map((k) => k.split(" ").map((v) => +v));
let dp = Array.from(Array(31), () => new Array(31).fill(0));
const combination = (n, r) => {
    if (n == r || r == 0) return 1;
    if (dp[n][r]) return dp[n][r];
    return (dp[n][r] = combination(n - 1, r - 1) + combination(n - 1, r));
};
for (let i = 0; i < +T; i++) {
    console.log(combination(k[i][1], k[i][0]));
    dp = Array.from(Array(31), () => new Array(31).fill(0));
}
