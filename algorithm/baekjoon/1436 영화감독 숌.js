const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim();
let tripleSixList = [];
for (let i = 0; i < 280_0000; i++) {
    if (i.toString().includes("666")) tripleSixList.push(i);
}

console.log(tripleSixList[input - 1]);
