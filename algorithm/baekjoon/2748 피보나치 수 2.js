const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim();

let dp = [];
const fibo = (N) => {
    if (N === 0 || N === 1) return N;
    if (dp[N]) return dp[N];
    return (dp[N] = BigInt(fibo(N - 1)) + BigInt(fibo(N - 2)));
};

// for (let i = 0; i <= 90; i++) {
//     console.log(fibo(i));
// }

console.log(String(fibo(10)));


