const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

const isPrimeNumber = (x) => {
    let end = Math.sqrt(x);
    if (x === 1) return false;
    for (let i = 2; i <= end; i++) {
        if (x % i == 0) return false;
    }
    return x;
};

for (let i = +input[0]; i < +input[1] + 1; i++) {
    if (isPrimeNumber(i)) console.log(i);
}
