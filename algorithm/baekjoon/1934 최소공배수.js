const fs = require("fs");
let [T, ...input] = fs
    .readFileSync("./dev/stdin")
    .toString()
    .trim()
    .split("\n");

const gcd = (a, b) => {
    return a % b ? gcd(b, a % b) : b;
};
const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
};

for (let i = 0; i < T; i++) {
    let [a, b] = input[i].split(" ");
    console.log(lcm(a, b));
}
