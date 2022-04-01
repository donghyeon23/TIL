let input = +require("fs").readFileSync("./dev/stdin").toString().trim();
const decomposeSum = (num) => {
    for (let i = 0; i <= num; i++) {
        if (
            i
                .toString()
                .split("")
                .reduce((a, b) => +a + +b, 0) +
                i ===
            num
        ) {
            return i;
        }
    }
    return 0;
};
console.log(decomposeSum(10));
