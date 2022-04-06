const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let solution = (n) => {
    let arr = Array(n+1).fill(true).fill(false, 0, 2);

    for(let i=2; i*i<=n; i++){
        if(arr[i]){
            for(let j=i*i; j<=n; j+=i){
                arr[j] = false;
            }
        }
    }

    return arr.filter(e => e).length;
}

for(let i = 0; i< input.length-1; i++){
    console.log (solution(+input[i]*2)-solution(+input[i]));
}
