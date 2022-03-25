const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim();

let sum;
let newNum;
let count = 0;
const addCycle = (num) => {
    count++;
    sum = Math.floor(num / 10) + (num % 10);
    newNum = (num % 10) * 10 + (sum % 10);
    if (+input === newNum) {
        return console.log(count);
    } else {
        return addCycle(newNum);
    }
};

addCycle(+input);
