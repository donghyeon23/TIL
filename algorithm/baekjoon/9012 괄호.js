const fs = require("fs");
let [T, ...cases] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const isVPS = (e) => {
    e = e.split("");
    let idx = 0;
    let isPS = [];
    while (idx !== e.length) {
        if (e[idx] === "(") isPS.push(e[idx++]);
        else if (e[idx] === ")") {
            if (isPS.length === 0) return "NO";
            isPS.pop();
            idx++;
        }
    }
    return isPS.length > 0 ? "NO" : "YES";
};

// const isVPSNum = (e) => {
//     e = e.split("")
//     let left = e.filter(e => '(' === e).length;
//     let right = e.filter(e => ')' === e).length;
//     return left === right ? 'YES' : 'NO'
// }

for (let i = 0; i < T; i++) {
    console.log(isVPS(cases[i]));
}
