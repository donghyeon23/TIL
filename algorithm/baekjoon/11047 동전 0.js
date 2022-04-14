const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
let [N,K] = input[0].split(' ').map(v=>+v)
let countCoin = 0;
for(let i=input.length-1; i > 0; i--) {
    if(K /+input[i] >= 1) {
        countCoin += Math.floor(K / +input[i])
        K = K % +input[i]
    }

}

console.log(countCoin);
