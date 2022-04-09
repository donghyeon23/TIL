const fs = require("fs");
let [T, ...HWN] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
let ans = "";
for (let i = 0; i < T; i++) {
    let [h, w, n] = HWN[i].split(" ").map((v) => +v);
    const floor = n % h === 0 ? h : n % h;
    const number = n % h === 0 ? n / h : Math.ceil(n / h);

    number < 10
        ? (ans += `${floor}0${number}` + "\n")
        : (ans += `${floor}${number}` + "\n");
}
console.log(ans);
