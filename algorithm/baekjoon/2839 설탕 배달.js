const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString();
let N = +input;

const getMax = (N) => {
    let max = Math.floor(N / 5);
    for (let i = max; i > 0; i--) {
        if ((N - 5 * i) % 3 === 0) {
            return console.log(i + Math.floor((N - 5 * i) / 3));
        }
    }
    return N % 3 === 0 ? console.log(Math.floor(N / 3)) : console.log(-1);
};

getMax(N);
