const fs = require("fs");
let [a, b] = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

const gcd = (a, b) => {
    return a % b ? gcd(b, a % b) : b;
};
const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
};

console.log(gcd(a, b));
console.log(lcm(a, b));
