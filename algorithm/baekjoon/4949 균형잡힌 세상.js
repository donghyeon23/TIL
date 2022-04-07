const fs = require("fs");
let [...cases] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const isBalanced = (string) => {
    string = string
        .split("")
        .filter((el) => "[" === el || "]" === el || "(" === el || ")" === el)
        .join("")
        .trim();

    let idx = 0;
    let isBC = [];
    if (string.length === 0) return "yes";
    else if (string[idx] === ")" || string[idx] === "]") return "no"
    else isBC.push(string[idx++]);
    while (idx !== string.length) {
        if (isBC.length === 0) {
            if (string[idx] === ")" || string[idx] === "]") {
                return "no";
            } else {
                isBC.push(string[idx++]);
                continue;
            }
        }
        if (isBC[isBC.length - 1] === "(") {
            if (string[idx] === "(" || string[idx] === "[") {
                isBC.push(string[idx++]);
                continue;
            } else if (string[idx] === ")") {
                isBC.pop();
                idx++;
                continue;
            } else {
                return "no";
            }
        } else if (isBC[isBC.length - 1] === "[") {
            if (string[idx] === "(" || string[idx] === "[") {
                isBC.push(string[idx++]);
                continue;
            } else if (string[idx] === "]") {
                isBC.pop();
                idx++;
                continue;
            } else {
                return "no";
            }
        }
    }
    return isBC.length > 0 ? "no" : "yes";
};

let idx = 0;
while (cases[idx] !== ".") {
    console.log(isBalanced(cases[idx++]));
}
